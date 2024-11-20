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
  const [novoPedido, setNovoPedido] = useState<Partial<Pedido>>({});
  const [editando, setEditando] = useState<Pedido | null>(null);

  const apiUrl = "http://localhost:8080/api/pedidos";

  const fetchPedidos = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Erro ao buscar pedidos");
      const data = await response.json();
      setPedidos(data);
    } catch (error) {
      console.error(error);
    }
  };

  // const criarPedido = async () => {
  //   try {
  //     const response = await fetch(apiUrl, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(novoPedido),
  //     });
  //     if (response.ok) {
        
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const atualizarPedido = async (pedido: Pedido) => {
    try {
      const response = await fetch(`${apiUrl}/${pedido.idPedido}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pedido),
      });

      if (!response.ok) throw new Error("Erro ao atualizar pedido");
      const data = await response.json();

      setPedidos((prev) =>
        prev.map((p) => (p.idPedido === pedido.idPedido ? data : p))
      );
      setEditando(null);
    } catch (error) {
      console.error(error);
    }
  };

  const deletarPedido = async (idPedido: number) => {
    try {
      const response = await fetch(`${apiUrl}/${idPedido}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Erro ao deletar pedido");

      setPedidos((prev) => prev.filter((p) => p.idPedido !== idPedido));
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

        {/* Formulário para criar novo pedido
        <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-black text-verdeEscuro mb-6 font-Montserrat">
            Criar Novo Pedido
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Status"
              value={novoPedido.status || ""}
              onChange={(e) =>
                setNovoPedido({ ...novoPedido, status: e.target.value })
              }
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Tipo de Transação"
              value={novoPedido.tipoTransacao || ""}
              onChange={(e) =>
                setNovoPedido({ ...novoPedido, tipoTransacao: e.target.value })
              }
              className="p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Total do Pedido"
              value={novoPedido.totalPedido || ""}
              onChange={(e) =>
                setNovoPedido({
                  ...novoPedido,
                  totalPedido: parseFloat(e.target.value),
                })
              }
              className="p-2 border rounded"
            />
          </div>
          <button
            onClick={criarPedido}
            className="mt-4 bg-laranjaEscuro text-white py-2 px-4 rounded hover:bg-laranjaMedio transition-colors"
          >
            Adicionar Pedido
          </button>
        </div> */}

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
                  <td className="p-4 font-Montserrat">
                    {editando?.idPedido === pedido.idPedido ? (
                      <input
                        type="text"
                        value={editando.status}
                        onChange={(e) =>
                          setEditando({ ...editando, status: e.target.value })
                        }
                        className="p-2 border rounded"
                      />
                    ) : (
                      pedido.status
                    )}
                  </td>
                  <td className="p-4">
                    {editando?.idPedido === pedido.idPedido ? (
                      <input
                        type="text"
                        value={editando.tipoTransacao}
                        onChange={(e) =>
                          setEditando({
                            ...editando,
                            tipoTransacao: e.target.value,
                          })
                        }
                        className="p-2 border rounded"
                      />
                    ) : (
                      pedido.tipoTransacao
                    )}
                  </td>
                  <td className="p-4">
                    {editando?.idPedido === pedido.idPedido ? (
                      <input
                        type="number"
                        value={editando.totalPedido}
                        onChange={(e) =>
                          setEditando({
                            ...editando,
                            totalPedido: parseFloat(e.target.value),
                          })
                        }
                        className="p-2 border rounded"
                      />
                    ) : (
                      pedido.totalPedido
                    )}
                  </td>
                  <td className="p-4">
                    {editando?.idPedido === pedido.idPedido ? (
                      <>
                        <button
                          onClick={() => atualizarPedido(editando)}
                          className="bg-verdeEscuro hover:bg-verde font-Lato text-white py-1 px-3 rounded mr-2"
                        >
                          Salvar
                        </button>
                        <button
                          onClick={() => setEditando(null)}
                          className="bg-laranjaClaro text-verdeEscuro font-Lato py-1 px-3 rounded"
                        >
                          Cancelar
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => setEditando(pedido)}
                          className="bg-laranjaEscuro hover:bg-laranjaMedio text-white font-Lato py-1 px-3 rounded mr-2"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => deletarPedido(pedido.idPedido)}
                          className="bg-red-600 hover:bg-red-400 text-white font-Lato py-1 px-3 rounded"
                        >
                          Excluir
                        </button>
                      </>
                    )}
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
