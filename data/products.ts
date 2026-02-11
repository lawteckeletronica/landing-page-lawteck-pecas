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
    title: "TCL, Agratto, Philco",
    condition: "Seminova",
    price: "R$ 950,00",
    oldPrice: "R$ 1.200,00",
    warranty: "5 Meses",
    features: ["Compatível 9k"],
    img: "/images/placa-universal-split.jpg",
  },
  {
    id: 2,
    title: "Elgin ECO Inverter",
    condition: "Nova",
    price: "R$ 950,00",
    oldPrice: "R$ 1.200,00",
    warranty: "5 Meses",
    features: ["Original", "Revisada", "Plug & Play"],
    img: "/images/placa-springer-midea-12k.jpg",
    popular: true,
  },
  {
    id: 3,
    title: "LG Dual Inverter",
    condition: "Seminova",
    price: "R$ 600,00",
    oldPrice: "R$ 900,00",
    warranty: "5 Meses",
    features: ["Inverter", "Testada", "Econômica"],
    img: "/images/placa-lg-dual-inverter.jpg",
  },
  {
    id: 4,
    title: "Springer Midea",
    condition: "Seminova",
    price: "R$ 850,00",
    oldPrice: "R$ 1.200,00",
    warranty: "5 Meses",
    features: ["Original", "Smart", "Envio Imediato"],
    img: "/images/placa-samsung-virus-doctor.jpg",
  },
];
;
