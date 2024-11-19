"use client";

import CatalogoCard from '@/components/CatalogoCard/CatalogoCard';
import React, { useEffect, useState } from 'react';
import { IPropsCatalogo } from '@/interface/IPropsCatalogo';
import { IoSearchCircle } from 'react-icons/io5';

export default function Catalogo() {
  const [geradores, setGeradores] = useState<IPropsCatalogo[]>([]);

  useEffect(() => {
    fetchGeradores();
  }, []);

  const fetchGeradores = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/geradores');
      if (!response.ok) {
        throw new Error('Erro ao buscar os dados da API');
      }
      const data: IPropsCatalogo[] = await response.json();
      console.log(data); // Verifique o conteúdo aqui
      setGeradores(data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-6 flex flex-col justify-center items-center gap-10">
        <h1 className="text-4xl font-Montserrat font-black text-verdeEscuro text-center mb-4">
          NOSSO CATÁLOGO DE GERADORES
        </h1>
        <div className="flex justify-center items-center">
          <input className="bg-white text-verdeEscuro shadow-lg justify-self-center w-96 h-8 flex justify-center items-center p-6 rounded-3xl" type="text" />
          <IoSearchCircle className="text-6xl text-verdeEscuro hover:text-verde" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {geradores.map((item, index) => (
            <CatalogoCard key={item.id || index} {...item} />
          ))}

        </div>
      </div>
    </div>
  );
}
