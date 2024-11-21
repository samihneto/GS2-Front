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
  const [editPedido, setEditPedido] = useState<Pedido | null>(null);

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

  const handleEditPedido = (pedido: Pedido) => {
    setEditPedido(pedido);
  };

  const handleUpdatePedido = async (pedido: Pedido) => {
    try {
      const response = await fetch(`http://localhost:8080/api/pedidos/${pedido.idPedido}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pedido),
      });

      if (!response.ok) throw new Error("Erro ao atualizar pedido");
      const data = await response.json();
      
      setPedidos((prevPedidos) =>
        prevPedidos.map((p) =>
          p.idPedido === pedido.idPedido ? { ...p, ...data } : p
        )
      );

      setEditPedido(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (idPedido: number) => {
    try {
      const response = await fetch(`http://localhost:8080/api/pedidos/${idPedido}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Erro ao excluir pedido");
      
      setPedidos((prevPedidos) => prevPedidos.filter((pedido) => pedido.idPedido !== idPedido));
    } catch (error) {
      console.error("Erro ao deletar pedido:", error);
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

        {editPedido && (
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-Montserrat mb-4">Editar Pedido</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (editPedido) handleUpdatePedido(editPedido);
              }}
            >
              <div className="mb-4">
                <label className="block mb-2">Data Entrega</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded"
                  value={editPedido.dataEntrega}
                  onChange={(e) => setEditPedido({ ...editPedido, dataEntrega: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Status</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={editPedido.status}
                  onChange={(e) => setEditPedido({ ...editPedido, status: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Tipo Transação</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={editPedido.tipoTransacao}
                  onChange={(e) => setEditPedido({ ...editPedido, tipoTransacao: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Total Pedido</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  value={editPedido.totalPedido}
                  onChange={(e) => setEditPedido({ ...editPedido, totalPedido: parseFloat(e.target.value) })}
                />
              </div>
              <button type="submit" className="bg-green-500 text-white p-2 rounded">Salvar Alterações</button>
            </form>
          </div>
        )}

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
                    <button
                      onClick={() => handleEditPedido(pedido)}
                      className="bg-verdeEscuro hover:bg-verde text-white p-2 rounded"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(pedido.idPedido)}
                      className="bg-laranjaEscuro hover:bg-laranjaMedio text-white p-2 rounded ml-2"
                    >
                      Excluir
                    </button>
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
