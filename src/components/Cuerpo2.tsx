import { defaultMaxListeners } from "events";
import {elementosPresentacion} from "../data"

export default function Cuerpo2(){

    return(
        <div className="w-vw mt-32 lg:px-10 border-4 border-black py-12 pb-10 lg:mx-16 ">
            <h1 className="text-center text-5xl mb-16 ">Eleve su 
                <span className=" bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text font-bold"> negocio
                </span >
            </h1>
            <nav>
                <div className="grid grid-cols-2 gap-8 mx-4 p-4  border-gray-300 lg:grid-cols-3">
                {elementosPresentacion.map((item) => (
                <div
                key={item.id}
                className="border border-gray-400/20 px-4 py-10  bg-white/20 backdrop-blur-md rounded-lg shadow-lg"
                >
                <div>{item.logo}</div> 
                <h2 className="text-xl font-semibold text-black mb-6">{item.titulo}</h2> {/* Título */}
                <p className="text-[16px] black/80 text-blue-950">{item.funcion}</p> {/* Descripción */}
            </div>
            ))}
            </div>
                
            </nav>

        </div>
    )
}