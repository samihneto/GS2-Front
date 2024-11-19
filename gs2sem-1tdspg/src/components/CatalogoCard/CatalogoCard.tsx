import { IPropsCatalogo } from '@/interface/IPropsCatalogo';
import Link from 'next/link';
// import Image from 'next/image';
import React from 'react';

export default function CatalogoCard({ image, idGerador, modelo, descricao, precoVenda, precoAluguelDiario }: IPropsCatalogo) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">

      <h3 className="text-2xl font-black text-verdeEscuro mt-4">{modelo}</h3>
      <p className="text-verdeEscuro mt-2">{descricao}</p>
      <p className="text-laranjaEscuro font-bold mt-4">Preço de Compra: R${precoVenda}</p>
      <p className="text-laranjaEscuro font-bold">Preço de Aluguel: R${precoAluguelDiario}</p>
      <Link href={`/produtos/${idGerador}`}>
        <button className="mt-6 bg-laranjaEscuro text-white py-2 px-4 rounded hover:bg-laranjaMedio transition-colors">
          Saiba Mais
        </button>
      </Link>

    </div>
  );
}