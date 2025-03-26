import React from 'react'
import {datosCarrusel1}from "../data"



export default function Carrusel1(){
    const carruselP=[...datosCarrusel1,...datosCarrusel1,...datosCarrusel1]
    return(
        <div className="overflow-hidden whitespace-nowrap mt-10">
            <div className="inline-flex space-x-16 animate-loop-scroll">
                {carruselP.map((elemento,index)=>(
                    <h3 key={index} className="max-w-none bg-gray-200 px-3 rounded-lg">{elemento}</h3>
                ))}

            </div>
        </div>
    )
}
