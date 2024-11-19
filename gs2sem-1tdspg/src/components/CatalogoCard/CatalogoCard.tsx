import { IPropsCatalogo } from '@/interface/IPropsCatalogo';
import Image from 'next/image';
import React from 'react';

export default function CatalogoCard({ image, name, description, price }: IPropsCatalogo) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <Image
        src={image}
        alt={name}
        width={400}
        height={300}
        className="rounded-lg"
        priority
      />
      <h3 className="text-2xl font-black text-verdeEscuro mt-4">{name}</h3>
      <p className="text-verdeEscuro mt-2">{description}</p>
      <p className="text-laranjaEscuro font-bold mt-4">R${price}</p>
      <button className="mt-6 bg-laranjaEscuro text-white py-2 px-4 rounded hover:bg-laranjaMedio transition-colors">
        Saiba Mais
      </button>
    </div>
  );
}