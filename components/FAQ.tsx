import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Como sei qual placa serve no meu ar condicionado?',
    answer: 'Envie o modelo do seu aparelho pelo WhatsApp e nosso técnico identifica a placa compatível. Também aceitamos fotos da placa original para garantir 100% de compatibilidade.',
  },
  {
    question: 'Qual a diferença entre placa nova e seminova?',
    answer: 'A placa nova nunca foi utilizada — vem lacrada na embalagem original. A seminova foi retirada de um aparelho, revisada, testada eletronicamente e tem a mesma garantia de funcionamento. Ambas passam pelo teste completo antes do envio.',
  },
  {
    question: 'Como funciona a garantia?',
    answer: 'Placas novas têm 3 meses de garantia. Seminovas têm até 5 meses. Se apresentar defeito dentro do prazo, fazemos a troca imediata sem custo adicional — incluindo o frete de retorno.',
  },
  {
    question: 'Quanto tempo demora a entrega?',
    answer: 'Despachamos em até 24 horas úteis após a confirmação do pagamento. O prazo varia conforme sua região: capitais do Nordeste recebem em 2-3 dias, outras regiões em 5-8 dias úteis. Você recebe o código de rastreio por WhatsApp.',
  },
  {
    question: 'Vocês fazem instalação da placa?',
    answer: 'Não realizamos instalação presencial, mas oferecemos suporte técnico gratuito por vídeo chamada. Nosso técnico acompanha o passo a passo da instalação em tempo real para garantir que tudo funcione perfeitamente.',
  },
  {
    question: 'Posso devolver se a placa não servir?',
    answer: 'Sim! Se a placa não for compatível (desde que não tenha sido instalada), devolvemos 100% do valor. Por isso recomendamos sempre consultar nosso técnico antes da compra para evitar incompatibilidade.',
  },
  {
    question: 'Quais formas de pagamento vocês aceitam?',
    answer: 'Aceitamos Pix (com desconto), cartão de crédito em até 12x, boleto bancário e transferência. O pagamento é feito de forma segura pelo link que enviamos no WhatsApp.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-brand-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue-600 font-bold tracking-widest uppercase mb-2">Dúvidas</h2>
          <h3 className="text-3xl sm:text-4xl font-black text-brand-blue-900 uppercase">
            Perguntas Frequentes
          </h3>
          <div className="w-24 h-1 bg-brand-yellow-400 mx-auto mt-6"></div>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-brand-blue-50 transition-colors"
                aria-expanded={openIndex === idx}
              >
                <span className="font-bold text-brand-blue-900 text-sm sm:text-base pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-brand-blue-600 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed font-medium">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
