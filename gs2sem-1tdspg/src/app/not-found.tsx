"use client";

export default function NotFound() {


  return (
    <div className="flex pt-12 pb-36 justify-center bg-gray-100">
      <div className="text-center py-16 px-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto">
        <h1 className="text-6xl font-bold text-laranjaEscuro mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Página Não Encontrada</h2>
        <p className="text-lg text-gray-600 mb-6">
          Desculpe, mas a página que você está procurando não existe. Você será redirecionado para a página inicial em breve.
        </p>
        <p className="text-sm text-gray-500">Ou você pode voltar clicando no botão abaixo:</p>
        <a
          href="/"
          className="mt-6 inline-block bg-laranjaEscuro hover:bg-laranjaMedio text-white py-3 px-8 rounded-lg font-semibold"
        >
          Voltar para a Home
        </a>
      </div>
    </div>
  );
}