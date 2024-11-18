import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/imgs/logo.png'

export default function Header() {
    return (
        <header>
            <Image
                src={Logo}
                width={150}
                height={150}
                alt="Picture of the author"
            />
            <nav>
                <ul>
                    <li>
                        <Link href="/">HOME</Link>
                    </li>
                    <li>
                        <Link href="/catálogo">CATÁLOGO</Link>
                    </li>
                    <li>
                        <Link href="/alugue">ALUGUE</Link>
                    </li>
                    <li>
                        <Link href="/about">SOBRE NÓS</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
