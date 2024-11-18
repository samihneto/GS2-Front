import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/imgs/logo.png'

export default function Header() {
    return (
        <header className="flex justify-center gap-4 bg-white shadow-lg">
            <Image
                className=""
                src={Logo}
                width={150}
                height={150}
                alt="Logo da Gerasol"
            />
            <nav className="flex justify-center items-center" >
                <ul className="flex justify-center content-center gap-4">
                    <li>
                        <Link className="text-verdeEscuro text-2xl font-black font-Montserrat" href="/">HOME</Link>
                    </li>
                    <li>
                        <Link className="text-verdeEscuro text-2xl font-black font-Montserrat" href="/catálogo">CATÁLOGO</Link>
                    </li>
                    <li>
                        <Link className="text-verdeEscuro text-2xl font-black font-Montserrat" href="/alugue">ALUGUE</Link>
                    </li>
                    <li>
                        <Link className="text-verdeEscuro text-2xl font-black font-Montserrat" href="/about">SOBRE NÓS</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
