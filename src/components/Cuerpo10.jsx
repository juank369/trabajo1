"use client"
import { preguntasCuerpo9 } from "../data2"
import { useState } from "react"

export default function Cuerpo10() {
    const [idElemento, setIdElemento] = useState(null)

    const toggleElemento = (id) => {
        setIdElemento(idElemento === id ? null : id)
    }

    return (
        <section className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg py-28">
            {/* Título */}
            <h2 className="text-3xl font-bold text-center mb-4">
                ¿Tienes alguna pregunta? <br />
                <span className="text-blue-600">Estamos aquí para ayudarte</span>
            </h2>

            {/* Descripción */}
            <p className="text-gray-600 text-center mb-6">
                Nuestro equipo de asistencia, potenciado por IA, está listo para brindarte respuestas rápidas y eficientes.  
            </p>

            {/* Preguntas */}
            <ol className="grid grid-cols-1 gap-4">
                {preguntasCuerpo9.map((item) => (
                    <li 
                        key={item.id} 
                        className="bg-gray-100 border border-gray-300 rounded-lg shadow-md  p-4 relative"
                    >    
                        <div className="flex justify-between items-center">
                            <p className="text-lg font-medium">{item.pregunta}</p>

                            <button 
                                className="border border-gray-900 w-8 h-8 absolute p-1 bottom-2 right-1 rounded-full flex items-center justify-center text-lg font-bold transition-transform duration-200"
                                onClick={() => toggleElemento(item.id)}
                            >
                                {idElemento === item.id ? "−" : "+"}
                            </button>
                        </div>

                        {/* Respuesta (se muestra solo si está activa) */}
                        {idElemento === item.id && (
                            <p className="mt-4 text-gray-700 border-t pt-3">{item.respuesta}</p>
                        )}
                    </li>
                ))}
            </ol>
        </section>
    )
}
