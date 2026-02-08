export interface Testimonial {
  name: string;
  role: string;
  location: string;
  text: string;
  stars: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Carlos Eduardo",
    role: "Técnico",
    location: "SP",
    text: "O diferencial é que elas realmente vêm testadas. Nunca tive retorno de garantia. Recomendo demais!",
    stars: 5,
  },
  {
    name: "Mariana Souza",
    role: "Cliente",
    location: "BA",
    text: "A autorizada cobrou R$ 1.200. Comprei a seminova na Lawteck pela metade do preço e está perfeita.",
    stars: 5,
  },
  {
    name: "Roberto Lima",
    role: "Empresário",
    location: "CE",
    text: "Suporte técnico sensacional. Tive dúvida na instalação e me ajudaram por vídeo. Nota 10.",
    stars: 5,
  },
];
