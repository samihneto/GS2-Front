import { IPropsCardAbout } from '@/interface/IPropsCardAbout';
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function AboutCard(props: IPropsCardAbout) {
    return (
        <div>
            <section className="flex flex-col md:flex-row justify-around items-center text-center bg-gray-50 w-full p-8 shadow-md rounded-2xl my-6">
                <Image
                    className="w-1/6 md:w-2/12 rounded-full"
                    src={props.image as unknown as StaticImageData}
                    alt={props.name}
                    width={150}
                    height={150}
                />
                <div className="flex flex-col items-center">
                    <h2 className="font-Montserrat font-black text-2xl md:text-3xl text-verdeEscuro truncate">{props.name}</h2>
                    <h3 className="font-PlayfairDisplay font-bold text-sm md:text-lg text-verdeEscuro">{props.rm}</h3>
                </div>
                <div className="flex gap-4 mt-4 md:mt-0">
                    {props.urlInstagram && (
                        <Link href={props.urlInstagram} target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-verdeEscuro text-4xl md:text-5xl" />
                        </Link>
                    )}
                    {props.urlLinkedin && (
                        <Link href={props.urlLinkedin} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-verdeEscuro text-4xl md:text-5xl" />
                        </Link>
                    )}
                    {props.urlGithub && (
                        <Link href={props.urlGithub} target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-verdeEscuro text-4xl md:text-5xl" />
                        </Link>
                    )}
                </div>
            </section>
        </div>
    )
}
