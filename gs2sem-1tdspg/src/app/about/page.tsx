import AboutCard from '@/components/AboutCard/AboutCard'
import { IPropsCardAbout } from '@/interface/IPropsCardAbout';
import React from 'react'
import samir from '@/assets/imgs/about/samir.jpg'
import levy from '@/assets/imgs/about/levy.jpeg'
import diego from '@/assets/imgs/about/diego.jpeg'

export default function About() {
  const membros: IPropsCardAbout[] = [
    {
      image: diego,
      name: 'Diego Bassalo Canals',
      rm: 'rm558710',
      urlGithub: 'https://github.com/andremarko',
      urlInstagram: '.',
      urlLinkedin: 'https://www.linkedin.com/in/andrem7/',
    },
    {
      image: levy,
      name: 'Felipe Levy Stephens Fidelix',
      rm: 'rm556426',
      urlGithub: 'https://github.com/felipe-2833',
      urlInstagram: '.',
      urlLinkedin: 'https://www.linkedin.com/in/felipe-fidelix-316980264/',
    },
    {
      image: samir,
      name: 'Samir Hage Neto',
      rm: 'rm557260',
      urlGithub: 'https://github.com/samihneto',
      urlInstagram: '.',
      urlLinkedin: 'https://www.linkedin.com/in/samir-neto/',
    },
  ];

  return (
    <div className="flex flex-col p-4 justify-center items-center mt-8 gap-6">
      <h1 className="font-Montserrat font-black text-5xl text-verdeEscuro">Sobre nós</h1>
      <div>
      {membros.map((membro: IPropsCardAbout, index: number) => {
        return (
          <div key={index}>
            <AboutCard
              image={membro.image}
              name={membro.name}
              rm={membro.rm}
              urlInstagram={membro.urlInstagram}
              urlLinkedin={membro.urlLinkedin}
              urlGithub={membro.urlGithub}
            />
          </div>
        );
      })}
      </div>
    </div>
  )
}
