import { StaticImageData } from 'next/image';

export interface IPropsCatalogo {
  image: string | StaticImageData; // Manter StaticImageData para imagens importadas
  name: string;
  price: number;
  descricao: string;
  id: number;
  modelo: string;
  precoVenda: number;
  idGerador: number;
  capacidadeBateria: number;
  durabilidade: string;
  idCategoria: number;
  idMarca: number;
  portas: string;
  portatil: string;
  potencia: number;
  precoAluguelDiario: number;
  tempoCarga: string
}