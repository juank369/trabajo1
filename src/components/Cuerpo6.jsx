'use client'
import {datosCuerpo6} from "../data"
import { useState } from "react"

export default function Cuerpo6(){
    const [idElemento,setIdElemento]=useState(0)
    const [estadoElemento,setEstadoElemento]=useState(false)

    const identificarElemento =(id)=>{
        setIdElemento(id)
    }

    const cambiarEstadoElemento=()=>{
        setEstadoElemento(!estadoElemento)
    }

    return(
        <section className="bg-black text-white text-center pt-12 pb-16">
            <h2 className="text-4xl text-center">Expericia mejorada</h2>
            <h5 className="text-sm text-center mb-6 mx-1 mt-2" >Mejore su experiencia de generacion de contenido con herramientas unicas y funciones integradas</h5>

            <div className="grid grid-cols-1 md:grid-cols-4 mx-2 gap-4">
                {datosCuerpo6.map((item)=>(
                    <div key={item.id} className={`flex justify-between relative px-4 py-10 rounded-lg border border-gray-900 ${
                        item.id === 1 ? 'md:col-span-2 md:row-span-1' :
                        item.id === 2 ? 'md:col-start-3 md:row-start-1' :
                        item.id === 3 ? 'md:col-start-4 md:row-start-1' :
                        item.id === 4 ? 'md:col-start-1 md:row-span-2 md:row-start-2' :
                        item.id === 5 ? 'md:col-start-2 md:row-start-2' :
                        item.id === 6 ? 'md:col-start-2 md:row-start-3' :
                        item.id === 7 ? 'md:col-start-3 md:row-span-2 md:row-start-2' :
                        item.id === 8 ? 'md:col-start-4 md:row-span-2 md:row-start-2' : ''
                    }`}>    
                        {
                            (estadoElemento && idElemento===item.id)?
                            <p>{item.texto}</p>
                            :
                            <div className="flex flex-col items-start ">
                                <p>{item.titulo}</p>
                                <p className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">{item.etiqueta}</p>
                            </div>
                        }
                        <button className="border border-gray-900 p-2 px-4 absolute bottom-2 right-2 rounded-3xl" onClick={()=>(identificarElemento(item.id),cambiarEstadoElemento())}>+</button>
                    </div>
                ))}
            </div>
        </section>
    )
}