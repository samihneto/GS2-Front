"use client";

import React, { useState } from "react";

export default function Pagamento() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    tipo: "compra", // compra ou aluguel
    gerador: "",
    valor: "",
    numeroCartao: "",
    validadeCartao: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simula o envio para uma API ou gateway de pagamento
    console.log("Dados enviados:", formData);
    alert("Pagamento realizado com sucesso!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-black text-verdeEscuro text-center mb-12">
          Pagamento
        </h1>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-verdeEscuro font-bold mb-2" htmlFor="nome">
              Nome Completo
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-verdeEscuro font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-verdeEscuro font-bold mb-2" htmlFor="tipo">
              Tipo de Transação
            </label>
            <select
              id="tipo"
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="compra">Compra</option>
              <option value="aluguel">Aluguel</option>
            </select>
          </div>
          <hr className="my-6" />
          <h2 className="text-xl font-bold text-verdeEscuro mb-4">Informações do Cartão</h2>
          <div className="mb-4">
            <label className="block text-verdeEscuro font-bold mb-2" htmlFor="numeroCartao">
              Número do Cartão
            </label>
            <input
              type="text"
              id="numeroCartao"
              name="numeroCartao"
              value={formData.numeroCartao}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-verdeEscuro font-bold mb-2" htmlFor="validadeCartao">
              Validade (MM/AA)
            </label>
            <input
              type="text"
              id="validadeCartao"
              name="validadeCartao"
              value={formData.validadeCartao}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-verdeEscuro font-bold mb-2" htmlFor="cvv">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-laranjaEscuro text-white py-2 px-4 rounded hover:bg-laranjaMedio transition-colors w-full font-bold"
          >
            Confirmar Pagamento
          </button>
        </form>
      </div>
    </div>
  );
}
