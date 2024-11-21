"use client";

import React, { useState } from "react";
import Link from "next/link";
import { label } from "framer-motion/client";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para autenticar o usuário
    // Se a autenticação falhar, defina um erro
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    // Exemplo de sucesso
    setError("");
    // Realizar autenticação...
    console.log("Usuário autenticado:", email);
  };

  return (
    <div className="flex justify-center items-center pt-12 pb-32 bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-Lato text-verdeEscuro font-black text-center mb-6">LOGIN</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-verdeEscuro">E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-verdeMedio rounded-md mt-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-verdeEscuro">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-verdeMedio rounded-md mt-2"
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            <div>
              <input type="checkbox" id="remember-me" className="mr-2" />
              <label htmlFor="remember-me" className="text-sm text-verdeEscuro">Lembrar-me</label>
            </div>
            <Link href="/esqueceu" className="text-sm text-verde">Esqueceu a senha?</Link>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-laranjaEscuro text-white rounded-md hover:bg-laranjaMedio"
          >
            Entrar
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-verdeEscuro">Não tem uma conta?</p>
          <Link href="/cadastro" className="text-sm text-laranjaMedio hover:underline">Criar conta</Link>
        </div>
      </div>
    </div>
  );
}
