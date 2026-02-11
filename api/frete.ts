import type { VercelRequest, VercelResponse } from '@vercel/node';

// Prazo estimado SEDEX a partir de Fortaleza-CE por UF
const PRAZO_POR_UF: Record<string, [number, number]> = {
  // Ceará (mesmo estado)
  CE: [1, 2],
  // Nordeste próximo
  PI: [2, 3], MA: [2, 3], RN: [2, 3], PB: [2, 3], PE: [2, 3],
  // Nordeste mais distante
  AL: [2, 4], SE: [3, 4], BA: [3, 5],
  // Sudeste
  MG: [3, 5], ES: [3, 5], RJ: [3, 5], SP: [3, 5],
  // Centro-Oeste
  DF: [3, 5], GO: [3, 5], TO: [3, 5], MT: [4, 6], MS: [4, 6],
  // Sul
  PR: [4, 6], SC: [4, 7], RS: [5, 7],
  // Norte
  PA: [3, 6], AP: [5, 8], AM: [5, 8], RR: [6, 9], AC: [6, 9], RO: [5, 7],
};

const PRAZO_DEFAULT: [number, number] = [5, 8];

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

  if (!cep || cep.length !== 8) {
    return res.status(400).json({ error: 'CEP inválido. Informe 8 dígitos.' });
  }

  try {
    const viaCepRes = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    if (!viaCepRes.ok) {
      return res.status(502).json({ error: 'Erro ao validar o CEP' });
    }

    const viaCepData = await viaCepRes.json();

    if (viaCepData.erro) {
      return res.status(400).json({ error: 'CEP não encontrado' });
    }

    const uf = viaCepData.uf as string;
    const [min, max] = PRAZO_POR_UF[uf] || PRAZO_DEFAULT;

    return res.status(200).json({
      prazoMin: min,
      prazoMax: max,
      servico: 'SEDEX',
      localidade: viaCepData.localidade,
      uf,
    });
  } catch (err) {
    return res.status(500).json({
      error: 'Erro ao calcular prazo de entrega',
      detail: err instanceof Error ? err.message : String(err),
    });
  }
}
