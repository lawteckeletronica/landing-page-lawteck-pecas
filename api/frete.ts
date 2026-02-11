import type { VercelRequest, VercelResponse } from '@vercel/node';

const CEP_ORIGEM = '60420570';
const SEDEX_CODE = '04014';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const cep = typeof req.query.cep === 'string' ? req.query.cep.replace(/\D/g, '') : '';
  const peso = typeof req.query.peso === 'string' ? req.query.peso : '1';

  if (!cep || cep.length !== 8) {
    return res.status(400).json({ error: 'CEP inválido. Informe 8 dígitos.' });
  }

  try {
    const params = new URLSearchParams({
      nCdEmpresa: '',
      sDsSenha: '',
      nCdServico: SEDEX_CODE,
      sCepOrigem: CEP_ORIGEM,
      sCepDestino: cep,
      nVlPeso: peso,
      nCdFormato: '1',
      nVlComprimento: '30',
      nVlAltura: '5',
      nVlLargura: '20',
      nVlDiametro: '0',
      sCdMaoPropria: 'N',
      nVlValorDeclarado: '0',
      sCdAvisoRecebimento: 'N',
    });

    const response = await fetch(
      `http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx/CalcPrecoPrazo?${params}`
    );

    if (!response.ok) {
      return res.status(502).json({ error: 'Erro ao consultar Correios' });
    }

    const xml = await response.text();

    const erroMatch = xml.match(/<MsgErro>([^<]+)<\/MsgErro>/);
    if (erroMatch && erroMatch[1].trim()) {
      return res.status(400).json({ error: erroMatch[1].trim() });
    }

    const prazoMatch = xml.match(/<PrazoEntrega>(\d+)<\/PrazoEntrega>/);
    if (!prazoMatch) {
      return res.status(502).json({ error: 'Não foi possível obter o prazo de entrega' });
    }

    const prazo = parseInt(prazoMatch[1], 10);

    return res.status(200).json({
      prazo,
      servico: 'SEDEX',
      cepDestino: cep,
    });
  } catch (error) {
    return res.status(500).json({ error: 'Erro interno ao calcular prazo de entrega' });
  }
}
