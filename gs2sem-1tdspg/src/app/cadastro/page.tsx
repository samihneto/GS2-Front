import Link from 'next/link'
import React from 'react'

export default function Cadastro() {
  return (
    <div className="flex justify-center items-center pt-12 pb-32 bg-gray-100 min-h-screen">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-3xl font-Lato text-verdeEscuro font-black text-center mb-6">CRIAR CONTA</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-verdeEscuro">Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="w-full p-3 border border-verdeMedio rounded-md mt-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-verdeEscuro">E-mail</label>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="w-full p-3 border border-verdeMedio rounded-md mt-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-verdeEscuro">Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            className="w-full p-3 border border-verdeMedio rounded-md mt-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-verdeEscuro">Confirmar Senha</label>
          <input
            type="password"
            placeholder="Confirme sua senha"
            className="w-full p-3 border border-verdeMedio rounded-md mt-2"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-laranjaEscuro text-white rounded-md hover:bg-laranjaMedio transition-colors"
        >
          Criar Conta
        </button>
      </form>

      <div className="text-center mt-6">
        <p className="text-sm text-verdeEscuro">Já possui uma conta?</p>
        <Link href="/login" className="text-laranjaMedio hover:underline">
          Fazer Login
        </Link>
      </div>
    </div>
  </div>
  )
}
