import React from 'react'
import { IoSearchCircle } from 'react-icons/io5'

export default function Catalogo() {
  return (
    <div className="flex justify-center items-center pt-12 pb-32 bg-gray-100">
      <div className="bg-white p-12 rounded-lg shadow-lg w-2/4 flex flex-col justify-center items-center gap-6">
        <h1 className="text-verdeEscuro font-Montserrat font-black text-4xl">CATÁLOGO</h1>
        <div className="flex items-center">
          <input 
          className="border-2 border-verdeEscuro rounded-3xl w-96 p-2" 
          type="text"
          placeholder="O que você está procurando?" />
          <IoSearchCircle className="text-6xl text-verdeEscuro hover:text-verde" />
        </div>
        
      </div>
    </div>
  )
}
