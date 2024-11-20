"use client";

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '@/assets/imgs/logo.png'
import { IoPerson } from 'react-icons/io5'

export default function Header() {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };


    return (
        <header className="flex justify-center gap-8 bg-white shadow-lg items-center">
            <Image
                className=""
                src={Logo}
                width={150}
                height={150}
                alt="Logo da Gerasol"
            />
            <nav className="flex justify-center items-center" >
                <ul className="flex justify-center content-center gap-6">
                    <li>
                        <Link className="text-verdeEscuro text-2xl font-black font-Montserrat hover:text-verde" href="/">HOME</Link>
                    </li>
                    <li>
                        <Link className="text-verdeEscuro text-2xl font-black font-Montserrat hover:text-verde" href="/catalogo">CATÁLOGO</Link>
                    </li>
                    <li>
                        <Link className="text-verdeEscuro text-2xl font-black font-Montserrat hover:text-verde" href="/alugue">DESCUBRA</Link>
                    </li>
                    <li>
                        <Link className="text-verdeEscuro text-2xl font-black font-Montserrat hover:text-verde" href="/about">SOBRE NÓS</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex gap-2">
                <Link className="bg-verdeEscuro p-2 rounded-lg text-white hover:bg-verde" href="/pedidos">Pedidos</Link>
            </div>
            <button onClick={toggleModal}>
                <IoPerson className="text-4xl text-verdeEscuro border-2 border-verdeEscuro p-1 rounded-2xl hover:text-verdeMedio hover:border-verdeMedio" />
            </button>

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
        </header>
    )
}
