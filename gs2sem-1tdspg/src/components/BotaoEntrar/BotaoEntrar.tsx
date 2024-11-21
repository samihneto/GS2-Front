"use client";

import Link from 'next/link';
import React, { useState } from 'react'
import { IoPerson } from 'react-icons/io5'

export default function BotaoEntrar() {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            {/* Botão para abrir o modal */}
            <button onClick={toggleModal} className="relative">
                <IoPerson className="text-4xl text-verdeEscuro border-2 border-verdeEscuro p-1 rounded-2xl hover:text-verdeMedio hover:border-verdeMedio" />
            </button>

            {/* Modal que aparece ao clicar no botão */}
            {modal && (

                <div
                    className="absolute bg-white w-96 p-12 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        className="absolute top-4 right-4 text-2xl"
                        onClick={toggleModal}
                    >
                        &times;
                    </button>
                    <Link className="p-2 bg-verdeEscuro items-center text-center text-white hover:bg-verde text-2xl font-black font-Montserrat rounded-md" href="/login">
                        LOGIN
                    </Link>
                    <Link className="text-center text-laranjaEscuro hover:text-laranjaMedio" href="/cadastro">
                        Não tem uma conta?
                    </Link>
                </div>

            )}
        </>
    );
}
