import { StaticImageData } from 'next/image';

export interface IPropsCatalogo {
  image: string | StaticImageData; // Manter StaticImageData para imagens importadas
  name: string;
  price: number;
  description: string;
  id: number;

}