import React from 'react'
import Image from 'next/image'

export default function Alugue() {
  return (
    <div className=" bg-gray-100 py-16">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          <div className="bg-laranjaEscuro p-6 rounded-lg shadow-lg w-2/4">
            <h1 className="text-4xl font-black text-center mb-12 text-white">
              ALUGUE O GERADOR IDEAL PARA SUAS NECESSIDADES!
            </h1>
            <Image
              src="/assets/imgs/gerador-aluguel.jpg"
              alt="Gerador Solar para Aluguel"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <h2 className="text-2xl font-Montserrat font-black mt-4 text-white">
              Por que Alugar um Gerador Solar?
            </h2>
            <p className="text-white">
              Você precisa de uma solução para um problema com falta de energia? Ou talvez deseje um suporte para seu evento? Ou uma saída para sua viagem? Talvez precise de uma garantia em sua residência em tempos de chuva?
            </p>
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                Comece Agora!
              </h3>
              <p className="text-white">
                Entre em contato conosco e descubra a solução perfeita.
              </p>
              <button className="mt-4 bg-verdeEscuro hover:bg-verde text-white py-3 px-6 rounded-lg font-bold transition-colors">
                Solicitar Cotação
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
