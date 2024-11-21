import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-verdeEscuro text-gray-300 py-8">
            <div className="container mx-auto px-6 text-center space-y-4">
                <p>&copy; 2024 Gerasol - Todos os direitos reservados</p>

                {/* Lista de links responsiva */}
                <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8">
                    <li className="my-2 md:my-0">
                        <Link className="hover:text-white" href={''} >Sobre Nós</Link>
                    </li>
                    <li className="my-2 md:my-0">
                        <Link className="hover:text-white" href={''} >Produtos</Link>
                    </li>
                    <li className="my-2 md:my-0">
                        <Link className="hover:text-white" href={''} >Blog</Link>
                    </li>
                    <li className="my-2 md:my-0">
                        <Link className="hover:text-white" href={''} >Contato</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
