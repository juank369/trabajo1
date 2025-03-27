'use client'
import { useState } from 'react'
import { preciosCuerpo9 } from '../data2'
import { CiCircleCheck } from "react-icons/ci";

export default function Cuerpo9() {
    const [tipoCarga, setTipoCarga] = useState(1)

    const cambiarTipo = (id) => {
        setTipoCarga(id)
    }

    

    return (
        <div className="w-full px-2 py-4">
            <h2 className=" font-bold text-center mb-12 text-5xl">Sencillo y asequible</h2>
            <p className="text-center mb-16 text-gray-600 text-[clamp(0.75rem,1.5vw,1rem)]">
                Hemos adaptado una variedad de planes para ajustarnos a su presupuesto, garantizando
                que pueda aprovechar el poder de la IA en cualquier momento y lugar.
            </p>
            <nav className="flex justify-center gap-2 mb-16 flex-wrap">
                <button 
                    onClick={() => cambiarTipo(1)} 
                    className={`px-2 py-1 rounded text-[clamp(0.75rem,1.5vw,1rem)] ${tipoCarga === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-600 hover:text-white transition-colors`}
                >
                    Mensualmente
                </button>
                <button 
                    onClick={() => cambiarTipo(2)} 
                    className={`px-2 py-1 rounded text-[clamp(0.75rem,1.5vw,1rem)] ${tipoCarga === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-600 hover:text-white transition-colors`}
                >
                    Anual 30%
                </button>
                <button 
                    onClick={() => cambiarTipo(3)} 
                    className={`px-2 py-1 rounded text-[clamp(0.75rem,1.5vw,1rem)] ${tipoCarga === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-600 hover:text-white transition-colors`}
                >
                    De por vida
                </button>
                <button 
                    onClick={() => cambiarTipo(4)} 
                    className={`px-2 py-1 rounded text-[clamp(0.75rem,1.5vw,1rem)] ${tipoCarga === 4 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-600 hover:text-white transition-colors`}
                >
                    Prepago
                </button>
            </nav>
            <div className="max-w-full mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:max-w-4xl md:mx-auto">
                    {preciosCuerpo9
                        .filter(item => tipoCarga === item.id)
                        .map((item, index) => (
                            <div 
                                key={index} 
                                className="bg-white p-2 rounded-lg shadow-md flex flex-col items-center text-center"
                            >
                                <span className="font-semibold text-gray-800 mb-1 text-[clamp(0.75rem,2vw,1.25rem)]">
                                    {item.tipo}
                                </span>
                                <p className="font-bold text-blue-600 mb-1 text-[clamp(1rem,3vw,1.5rem)]">
                                    {item.precio}
                                </p>
                                <p className="text-gray-500 mb-2 text-[clamp(0.625rem,1.2vw,0.875rem)]">
                                    {item.tiempo}
                                </p>
                                <button 
                                    className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors mb-2 text-[clamp(0.625rem,1.2vw,0.875rem)]"
                                >
                                    Seleccionar
                                </button>
                                <p className="text-gray-600 mb-2 text-[clamp(0.625rem,1.2vw,0.875rem)]">
                                    {item.intro}
                                </p>
                                <ul className="space-y-1 lg:text-2xl">
                                    {item.caracteristicas.map((ca, i) => (
                                        <li key={i} className="flex items-center gap-1">
                                            <span className="text-blue-500">
                                                <CiCircleCheck size="clamp(12px,2vw,16px)" />
                                            </span>
                                            <p className="text-gray-700 text-[clamp(0.625rem,1.2vw,0.875rem)]">
                                                {ca}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}