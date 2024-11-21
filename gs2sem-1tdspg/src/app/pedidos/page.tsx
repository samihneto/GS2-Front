"use client";

import { useEffect, useState } from "react";

interface Pedido {
  idPedido: number;
  dataEntrega: string;
  dataPedido: string;
  idUsuario: number;
  status: string;
  tipoTransacao: string;
  totalPedido: number;
}

export default function PedidosPage() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  const fetchPedidos = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/pedidos");
      if (!response.ok) throw new Error("Erro ao buscar pedidos");
      const data = await response.json();
      setPedidos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPedidos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-Montserrat font-black text-verdeEscuro text-center mb-12">
          Gerenciamento de Pedidos
        </h1>
        {/* Tabela de pedidos */}
        <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-lg">
          <table className="table-auto w-full text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4 font-Montserrat">ID Pedido</th>
                <th className="p-4 font-Montserrat">Data Pedido</th>
                <th className="p-4 font-Montserrat">Data Entrega</th>
                <th className="p-4 font-Montserrat">ID Usuário</th>
                <th className="p-4 font-Montserrat">Status</th>
                <th className="p-4 font-Montserrat">Tipo Transação</th>
                <th className="p-4 font-Montserrat">Total Pedido</th>
                <th className="p-4 font-Montserrat">Ações</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map((pedido) => (
                <tr key={pedido.idPedido} className="border-t">
                  <td className="p-4 font-Montserrat">{pedido.idPedido}</td>
                  <td className="p-4 font-Montserrat">{pedido.dataPedido}</td>
                  <td className="p-4 font-Montserrat">{pedido.dataEntrega}</td>
                  <td className="p-4 font-Montserrat">{pedido.idUsuario}</td>
                  <td className="p-4 font-Montserrat">{pedido.status}</td>
                  <td className="p-4">{pedido.tipoTransacao}</td>
                  <td className="p-4">{pedido.totalPedido}</td>
                  <td className="p-4">
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
