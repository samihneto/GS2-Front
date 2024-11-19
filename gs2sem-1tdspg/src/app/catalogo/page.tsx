import CatalogoCard from '@/components/CatalogoCard/CatalogoCard';
import React from 'react';
import { IPropsCatalogo } from '@/interface/IPropsCatalogo';

export default function Catalogo() {
  // Simulação de dados do catálogo
  const geradores: IPropsCatalogo[] = [
    {
      id: 1,
      name: 'Gerador Solar Residencial',
      description: 'Perfeito para fornecer energia sustentável para sua residência.',
      price: 2500,
      image: '/assets/imgs/gerador-residencial.jpg', // Caminho relativo
    },
    {
      id: 2,
      name: 'Gerador Solar Comercial',
      description: 'Ideal para empresas que desejam economizar em energia elétrica.',
      price: 5500,
      image: '/assets/imgs/gerador-comercial.jpg', // Caminho relativo
    },
    {
      id: 3,
      name: 'Gerador Solar para Eventos',
      description: 'Energia confiável para eventos e obras temporárias.',
      price: 4000,
      image: '/assets/imgs/gerador-eventos.jpg', // Caminho relativo
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-Montserrat font-black text-verdeEscuro text-center mb-12">NOSSO CATÁLOGO DE GERADORES</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {geradores.map((item) => (
            <CatalogoCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

