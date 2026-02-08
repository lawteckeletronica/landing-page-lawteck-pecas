import React from 'react';

export interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ProductProps {
  id: number;
  name: string;
  condition: 'Nova' | 'Seminova';
  price: string;
  image: string;
  warranty: string;
}

export interface TestimonialProps {
  name: string;
  location: string;
  text: string;
  stars: number;
}