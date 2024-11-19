import Image from 'next/image'
import Gerador1 from '@/assets/imgs/alugue/gerador-solar-1.jpg'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Destaques da Empresa */}
      <section className="py-16 bg-white" id="destaques">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-verdeEscuro">Por que escolher a Gerasol?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-100 p-6 text-center rounded-lg shadow-md hover:shadow-xl">
              <h3 className="text-xl font-Lato font-black mb-3 text-verdeEscuro">Sustentabilidade</h3>
              <p>Energia 100% renovável.</p>
            </div>
            <div className="bg-gray-100 p-6 text-center rounded-lg shadow-md hover:shadow-xl">
              <h3 className="text-xl font-Lato font-black mb-3 text-verdeEscuro">Flexibilidade</h3>
              <p>Opções de venda e aluguel.</p>
            </div>
            <div className="bg-gray-100 p-6 text-center rounded-lg shadow-md hover:shadow-xl">
              <h3 className="text-xl font-Lato font-black mb-3 text-verdeEscuro">Atendimento Especializado</h3>
              <p>Soluções personalizadas para cada cliente.</p>
            </div>
            <div className="bg-gray-100 p-6 text-center rounded-lg shadow-md hover:shadow-xl">
              <h3 className="text-xl font-Lato font-black mb-3 text-verdeEscuro">Confiabilidade</h3>
              <p>Equipamentos modernos e eficientes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos e Serviços */}
      <section className="py-16 bg-gray-50" id="produtos">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-verdeEscuro">Nossos Geradores Solares</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-2xl font-Lato font-black mb-4 text-verdeEscuro">Residências</h3>
              <p>Geradores solares para sua casa.</p>
              <Link href="/catalogo" className="mt-4 inline-block bg-laranjaEscuro hover:bg-laranjaMedio text-white py-2 px-4 rounded">Ver mais</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-2xl font-Lato font-black mb-4 text-verdeEscuro">Empresas e Comércios</h3>
              <p>Energia confiável para seu negócio.</p>
              <Link href="/catalogo" className="mt-4 inline-block bg-laranjaEscuro hover:bg-laranjaMedio text-white py-2 px-4 rounded">Ver mais</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-2xl font-Lato font-black mb-4 text-verdeEscuro">Eventos e Obras</h3>
              <p>Soluções energéticas para ocasiões especiais.</p>
              <Link href="/catalogo" className="mt-4 inline-block bg-laranjaEscuro hover:bg-laranjaMedio text-white py-2 px-4 rounded">Ver mais</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos de Clientes */}
      <section className="py-16 bg-white" id="depoimentos">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-verdeEscuro">O que nossos clientes estão dizendo</h2>
          <div className="space-y-8">
            <blockquote className="italic text-lg">
              "A Gerasol garantiu energia para nosso evento sem falhas. Recomendo!"
              <br />
              <span className="font-Lato font-semibold text-verdeEscuro">- Hugo Partezane</span>
            </blockquote>
            <blockquote className="italic text-lg">
              "Economizamos muito com os geradores solares. Ótima escolha!"
              <br />
              <span className="font-Lato font-semibold text-verdeEscuro">- Laerte Andrade</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Benefícios de Usar Energia Solar */}
      <section className="py-16 bg-gray-50" id="beneficios">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-Montserrat text-3xl font-bold mb-10 text-verdeEscuro">A Energia Solar é o Futuro</h2>
          <ul className="list-disc list-inside text-left mx-auto max-w-lg">
            <li>Economia de custos a longo prazo</li>
            <li>Redução da pegada de carbono</li>
            <li>Independência energética</li>
            <li>Baixa manutenção</li>
          </ul>
        </div>
      </section>

      {/* Chamada para Ação */}
      <section className="py-16 bg-laranjaEscuro text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-Montserrat text-3xl font-bold mb-6">Pronto para garantir sua energia sustentável?</h2>
          <Link
            href="#contato"
            className="bg-white text-laranjaEscuro hover:bg-laranjaMedio hover:text-white py-3 px-8 rounded font-semibold"
          >
            Fale conosco!
          </Link>
        </div>
      </section>
      {/* Anúncio de Aluguel */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
            <div className="bg-laranjaEscuro p-12 rounded-lg shadow-lg w-2/4 justify-center gap-12">
              <h1 className="text-4xl font-black text-center mb-12 text-white">
                ALUGUE O GERADOR IDEAL PARA SUAS NECESSIDADES!
              </h1>
              <Image
                src={Gerador1}
                alt="Gerador Solar para Aluguel"
                width={400}
                height={300}
                className="rounded-lg justify-self-center m-4"
              />
              <h2 className="text-2xl font-Montserrat font-black mt-8 text-white">
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
                  Veja nosso Catálogo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
