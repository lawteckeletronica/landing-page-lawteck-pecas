export interface Feature {
  icon: 'ClipboardCheck' | 'Truck' | 'Banknote' | 'Shield' | 'Wrench' | 'Award';
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: 'ClipboardCheck',
    title: "100% Testadas",
    description: "Única empresa que testa eletronicamente cada placa antes de embalar.",
  },
  {
    icon: 'Truck',
    title: "Frete Grátis",
    description: "Enviamos para todo o Brasil sem custo adicional. Rapidez e segurança.",
  },
  {
    icon: 'Banknote',
    title: "Melhor Preço",
    description: "Cobrimos ofertas da concorrência com qualidade superior garantida.",
  },
  {
    icon: 'Shield',
    title: "Garantia Real",
    description: "Até 5 meses de garantia com troca imediata em caso de defeito.",
  },
  {
    icon: 'Wrench',
    title: "Suporte Pós-Venda",
    description: "Ajuda técnica especializada para instalação e configuração.",
  },
  {
    icon: 'Award',
    title: "Expertise Total",
    description: "Anos de experiência focados exclusivamente em placas eletrônicas.",
  },
];
