"use client";

import { TipoAgendamento } from "@/interface/TipoAgendamento";
import { useEffect, useState } from "react";

export default function AgendamentosPage() {
    const [agendamentos, setAgendamentos] = useState<TipoAgendamento[]>([]);
    const [formData, setFormData] = useState({
        dataPedido: "",
        dataEntrega: "",
        tempoUso: "",
        qtd: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchAgendamentos = async () => {
        try {
            const res = await fetch("/api-local/dados-api");
            const data = await res.json();

            if (Array.isArray(data)) {
                setAgendamentos(data);
            } else {
                console.error("Resposta inesperada da API:", data);
                setAgendamentos([]);
            }
        } catch (error) {
            console.error("Erro ao buscar agendamentos:", error);
        }
    };

    useEffect(() => {
        fetchAgendamentos();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await fetch("/api-local/dados-api", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error("Erro ao salvar o agendamento.");
            }

            const newAgendamento = await res.json();
            setAgendamentos((prev) => [...prev, newAgendamento]);
            setFormData({
                dataPedido: "",
                dataEntrega: "",
                tempoUso: "",
                qtd: "",
            });
        } catch (error) {
            setError("Falha ao enviar o agendamento.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Função para excluir um agendamento
    const handleDelete = async (id: number) => {
        if (window.confirm("Tem certeza de que deseja excluir este agendamento?")) {
            try {
                const res = await fetch(`/api-local/dados-api?id=${id}`, {
                    method: "DELETE",
                });

                if (res.ok) {
                    setAgendamentos((prevAgendamentos) =>
                        prevAgendamentos.filter((agendamento) => agendamento.id !== id)
                    );
                } else {
                    const errorData = await res.json();
                    setError(errorData.error || "Erro ao excluir o agendamento.");
                }
            } catch (error) {
                setError("Falha ao excluir o agendamento.");
                console.error(error);
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-16">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-black text-verdeEscuro text-center mb-12">
                    Agendamentos
                </h1>

                {/* Formulário */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-lg shadow-md mb-12"
                >
                    <h2 className="text-2xl font-bold text-verdeEscuro mb-6">
                        Novo Agendamento
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Data Pedido:
                            </label>
                            <input
                                type="date"
                                value={formData.dataPedido}
                                onChange={(e) =>
                                    setFormData({ ...formData, dataPedido: e.target.value })
                                }
                                className="mt-1 p-2 block w-full border border-gray-300 rounded shadow-sm focus:ring-verdeEscuro focus:border-verdeEscuro"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Data Entrega:
                            </label>
                            <input
                                type="date"
                                value={formData.dataEntrega}
                                onChange={(e) =>
                                    setFormData({ ...formData, dataEntrega: e.target.value })
                                }
                                className="mt-1 p-2 block w-full border border-gray-300 rounded shadow-sm focus:ring-verdeEscuro focus:border-verdeEscuro"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Tempo de Uso (dias):
                            </label>
                            <input
                                type="number"
                                value={formData.tempoUso}
                                onChange={(e) =>
                                    setFormData({ ...formData, tempoUso: e.target.value })
                                }
                                className="mt-1 p-2 block w-full border border-gray-300 rounded shadow-sm focus:ring-verdeEscuro focus:border-verdeEscuro"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Quantidade:
                            </label>
                            <input
                                type="number"
                                value={formData.qtd}
                                onChange={(e) =>
                                    setFormData({ ...formData, qtd: e.target.value })
                                }
                                className="mt-1 p-2 block w-full border border-gray-300 rounded shadow-sm focus:ring-verdeEscuro focus:border-verdeEscuro"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`mt-6 bg-laranjaEscuro text-white py-2 px-4 rounded hover:bg-laranjaMedio transition-colors ${loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        {loading ? "Enviando..." : "Adicionar Agendamento"}
                    </button>
                    {error && <p className="text-red-600 mt-4">{error}</p>}
                </form>

                {/* Tabela */}
                <div className="overflow-x-auto bg-white p-6 rounded-lg shadow-md">
                    <table className="table-auto w-full text-left">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2">ID</th>
                                <th className="px-4 py-2">Data Pedido</th>
                                <th className="px-4 py-2">Data Entrega</th>
                                <th className="px-4 py-2">Tempo de Uso</th>
                                <th className="px-4 py-2">Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {agendamentos.map((agendamento) => (
                                <tr key={agendamento.id} className="border-t">
                                    <td className="px-4 py-2">{agendamento.id}</td>
                                    <td className="px-4 py-2">{agendamento.dataPedido}</td>
                                    <td className="px-4 py-2">{agendamento.dataEntrega}</td>
                                    <td className="px-4 py-2">{agendamento.tempoUso}</td>
                                    <td className="px-4 py-2">{agendamento.qtd}</td>
                                    <td className="px-4 py-2 text-center">
                                        <button
                                            onClick={() => handleDelete(agendamento.id)}
                                            className="text-white bg-laranjaEscuro rounded-md p-1 hover:bg-laranjaMedio"
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
