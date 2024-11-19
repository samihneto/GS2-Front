"use client";

import { useEffect, useState } from "react";
import { use } from "react";
import { IPropsCatalogo } from "@/interface/IPropsCatalogo";
import Image from "next/image";
import Gerador from "@/assets/imgs/comprar/gerador_comercial.jpg"

export default function ProdutoDetalhes({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params); // Resolva o params com o hook use()
    const [gerador, setGerador] = useState<IPropsCatalogo | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Função para buscar os detalhes do gerador pela API
    const fetchGeradorDetalhes = async (id: string) => {
        try {
            const response = await fetch(`http://localhost:8080/api/geradores/${id}`);
            if (!response.ok) {
                throw new Error("Erro ao buscar os detalhes do gerador.");
            }
            const data: IPropsCatalogo = await response.json();
            setGerador(data);
        } catch (err) {
            console.error(err);
            setError("Não foi possível carregar os detalhes do gerador.");
        }
    };

    useEffect(() => {
        fetchGeradorDetalhes(id);
    }, [id]);

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-red-600 text-xl">{error}</h1>
            </div>
        );
    }

    if (!gerador) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-verdeEscuro text-xl">Carregando...</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-16">
            <div className="container mx-auto px-6">
                <div className="bg-white p-12 rounded-lg shadow-lg max-w-3xl mx-auto flex flex-col justify-center gap-1">
                    <h1 className="text-6xl font-Montserrat font-black text-verdeEscuro">
                        {gerador.modelo}
                    </h1>
                    <Image
                        src={Gerador}
                        alt="Imagem de Gerador"
                        width={400}
                        height={300}
                        className="rounded-lg w-full"
                        priority
                    />
                    <p className="text-verdeEscuro text-lg font-medium font-Lato mt-4">{gerador.descricao}</p>
                    <p className="text-laranjaEscuro font-bold text-4xl mt-6 mb-4">
                        Preço de Venda: R${gerador.precoVenda}
                    </p>
                    {/* <p className="text-gray-600 mt-4">ID do Gerador: {gerador.idGerador}</p> */}
                    <p className="font-Lato font-medium text-lg text-verdeEscuro">Qual é a capacidade da bateria? {gerador.capacidadeBateria}</p>
                    <p className="font-Lato font-medium text-lg text-verdeEscuro">Quanto ela dura? {gerador.durabilidade}</p>
                    <p className="font-Lato font-medium text-lg text-verdeEscuro">Quantas portas? {gerador.portas}</p>
                    <p className="font-Lato font-medium text-lg text-verdeEscuro">É portátil? {gerador.portatil}</p>
                    <p className="font-Lato font-medium text-lg text-verdeEscuro">Quanto tem de potência? {gerador.potencia}</p>
                    <p className="font-Lato font-medium text-lg text-verdeEscuro">Quanto custa para alugar? {gerador.precoAluguelDiario}</p>
                    <p className="font-Lato font-medium text-lg text-verdeEscuro">Qual é o tempo de recarga? {gerador.tempoCarga}</p>
                    <div className="mt-8 flex justify-center">
                        <button className="bg-verdeEscuro text-white py-2 px-6 rounded hover:bg-verde transition-colors">
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
