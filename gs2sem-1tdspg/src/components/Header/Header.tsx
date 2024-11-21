"use client";

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '@/assets/imgs/logo.png'
import BotaoEntrar from '../BotaoEntrar/BotaoEntrar';

export default function Header() {
    // Estado para controlar a visibilidade do menu hambúrguer
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="flex justify-center items-center gap-10 bg-white shadow-lg p-4">
            <Image
                className=""
                src={Logo}
                width={150}
                height={150}
                alt="Logo da Gerasol"
            />

            {/* Menu hambúrguer visível apenas em telas menores que 1024px */}
            <div className="lg:hidden">
                <button 
                    onClick={() => setMenuOpen(!menuOpen)} 
                    className="text-3xl text-verdeEscuro"
                >
                    {menuOpen ? 'X' : '☰'}
                </button>
            </div>

            {/* Navegação, oculta em telas pequenas */}
            <nav className={`lg:flex flex-col ${menuOpen ? 'block' : 'hidden'}`}>
                <ul className="flex lg:flex-row flex-col justify-center gap-2 lg:gap-6">
                    <li>
                        <Link className="text-verdeEscuro text-lg lg:text-2xl sm:text-base font-black font-Montserrat hover:text-verde" href="/">HOME</Link>
                    </li>
                    <li>
                        <Link className="text-verdeEscuro text-lg lg:text-2xl sm:text-base font-black font-Montserrat hover:text-verde" href="/catalogo">CATÁLOGO</Link>
                    </li>
                    <li>
                        <Link className="text-verdeEscuro text-lg lg:text-2xl sm:text-base font-black font-Montserrat hover:text-verde" href="/alugue">DESCUBRA</Link>
                    </li>
                    <li>
                        <Link className="text-verdeEscuro text-lg lg:text-2xl sm:text-base font-black font-Montserrat hover:text-verde" href="/about">SOBRE NÓS</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex gap-2">
                <Link className="bg-verdeEscuro p-2 rounded-lg text-white hover:bg-verde" href="/pedidos">Pedidos</Link>
            </div>
            <BotaoEntrar />
        </header>
    );
}
