export default function Home() {
  return (
    <div>
      {/* Destaques da Empresa */}
      <section className="py-16 bg-white" id="destaques">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-verdeEscuro">Por que escolher a Gerasol?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-100 p-6 text-center rounded-lg shadow">
              <h3 className="text-xl font-Lato font-semibold mb-3 text-verdeEscuro">Sustentabilidade</h3>
              <p>Energia 100% renovável.</p>
            </div>
            <div className="bg-gray-100 p-6 text-center rounded-lg shadow">
              <h3 className="text-xl font-Lato font-semibold mb-3 text-verdeEscuro">Flexibilidade</h3>
              <p>Opções de venda e aluguel.</p>
            </div>
            <div className="bg-gray-100 p-6 text-center rounded-lg shadow">
              <h3 className="text-xl font-Lato font-semibold mb-3 text-verdeEscuro">Atendimento Especializado</h3>
              <p>Soluções personalizadas para cada cliente.</p>
            </div>
            <div className="bg-gray-100 p-6 text-center rounded-lg shadow">
              <h3 className="text-xl font-Lato font-semibold mb-3 text-verdeEscuro">Confiabilidade</h3>
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
              <h3 className="text-2xl font-Lato font-semibold mb-4 text-verdeEscuro">Residências</h3>
              <p>Geradores solares para sua casa.</p>
              <a href="#" className="mt-4 inline-block bg-laranjaEscuro hover:bg-laranjaMedio text-white py-2 px-4 rounded">Ver mais</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-2xl font-Lato font-semibold mb-4 text-verdeEscuro">Empresas e Comércios</h3>
              <p>Energia confiável para seu negócio.</p>
              <a href="#" className="mt-4 inline-block bg-laranjaEscuro hover:bg-laranjaMedio text-white py-2 px-4 rounded">Ver mais</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="text-2xl font-Lato font-semibold mb-4 text-verdeEEscuro">Eventos e Obras</h3>
              <p>Soluções energéticas para ocasiões especiais.</p>
              <a href="#" className="mt-4 inline-block bg-laranjaEscuro hover:bg-laranjaMedio text-white py-2 px-4 rounded">Ver mais</a>
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
          <a
            href="#contato"
            className="bg-white text-laranjaEscuro hover:bg-laranjaMedio hover:text-white py-3 px-8 rounded font-semibold"
          >
            Fale com um Especialista
          </a>
        </div>
      </section>
    </div>
  );
}
