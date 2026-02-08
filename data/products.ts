export interface Product {
  id: number;
  title: string;
  condition: 'Nova' | 'Seminova';
  price: string;
  oldPrice: string;
  warranty: string;
  features: string[];
  img: string;
  popular?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Placa Universal Split",
    condition: "Nova",
    price: "R$ 189,90",
    oldPrice: "R$ 250,00",
    warranty: "3 Meses",
    features: ["Compatível 7k-30k", "Display Digital", "Com Controle"],
    img: "/images/placa-universal-split.jpg",
  },
  {
    id: 2,
    title: "Springer Midea 12k",
    condition: "Seminova",
    price: "R$ 299,00",
    oldPrice: "R$ 580,00",
    warranty: "5 Meses",
    features: ["Original", "Revisada", "Plug & Play"],
    img: "/images/placa-springer-midea-12k.jpg",
    popular: true,
  },
  {
    id: 3,
    title: "Inverter LG Dual Voice",
    condition: "Seminova",
    price: "R$ 450,00",
    oldPrice: "R$ 900,00",
    warranty: "5 Meses",
    features: ["Inverter", "Testada", "Econômica"],
    img: "/images/placa-lg-dual-inverter.jpg",
  },
  {
    id: 4,
    title: "Samsung Vírus Doctor",
    condition: "Seminova",
    price: "R$ 380,00",
    oldPrice: "R$ 850,00",
    warranty: "5 Meses",
    features: ["Original", "Smart", "Envio Imediato"],
    img: "/images/placa-samsung-virus-doctor.jpg",
  },
];
