'use client'
import { FaCheck } from "react-icons/fa"
import { MdOutlineDoNotDisturbOn } from "react-icons/md"
import { elementosCuerpo5 } from "@/data"

export default function Cuerpo5() {
    return (
        <section className="w-full max-w-6xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                        Centraliza IA.
                    </span>
                    <br />
                    <span>Superior</span>
                </h2>
            </div>

            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                
                <div className="flex-1 flex justify-center">
                    <img 
                        src="/ia.svg" 
                        alt="Algoritmos de IA" 
                        className="w-48 md:w-64" 
                    />
                </div>

                <div className="flex-1 max-w-md">
                    <div className="grid grid-cols-12 gap-4 items-center mb-4 pb-2 border-b border-gray-200">
                        <div className="col-span-8 font-medium text-sm">Característica</div>
                        <div className="col-span-2 text-center text-green-500">
                            <FaCheck className="mx-auto" />
                        </div>
                        <div className="col-span-2 text-center text-red-500">
                            <MdOutlineDoNotDisturbOn className="mx-auto" />
                        </div>
                    </div>

                    {elementosCuerpo5.map((item, index) => (
                        <div key={index} className="grid grid-cols-12 gap-4 items-center py-3 border-b border-gray-100">
                            <div className="col-span-8 text-sm">{item}</div>
                            <div className="col-span-2 text-center text-green-500">
                                <FaCheck />
                            </div>
                            <div className="col-span-2 text-center text-red-500">
                                <MdOutlineDoNotDisturbOn />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}