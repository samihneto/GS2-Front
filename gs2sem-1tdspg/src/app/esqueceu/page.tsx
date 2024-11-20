"use client";

import Link from "next/link";

export default function EsqueceuSenha() {


  return (
    <div className="flex justify-center items-center pt-12 pb-32 bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-Lato text-verdeEscuro font-black text-center mb-6">Esqueceu a Senha</h2>
        <form >
          <div className="mb-4">
            <label className="block text-sm font-medium text-verdeEscuro">E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full p-3 border border-verdeMedio rounded-md mt-2"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-laranjaEscuro text-white rounded-md hover:bg-laranjaMedio"
          >
            Enviar Link de Recuperação
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-verdeEscuro">Lembrou da sua senha?</p>
          <Link href="/login" className="text-sm text-laranjaMedio hover:underline">Voltar para o login</Link>
        </div>
      </div>
    </div>
  );
}
