import {iconoRedesCuerpo4} from "../data"


export default function Cuerpo4(){
    const carruselP=[...iconoRedesCuerpo4,...iconoRedesCuerpo4,...iconoRedesCuerpo4,...iconoRedesCuerpo4,...iconoRedesCuerpo4,...iconoRedesCuerpo4,...iconoRedesCuerpo4,...iconoRedesCuerpo4]
    return(
        <div className="bg-black text-white">
            <h2 className="text-center text-5xl pt-8">Plantillas Personalizadas</h2>
            <p className="text-center text-sm">Nuestras herramientas pueden ayudarle a generar cualquier tipo de contenido, desde<br/>
             descripciones de productos y entradas de blog<br/> 
             hasta boletines y actualizaciones de redes sociales.
            </p>
            <div>
                <div className="overflow-hidden whitespace-nowrap mt-10">
                    <div className="flex space-x-8 animate-loop-scroll justify-center items-center">
                        {carruselP.map((elemento,index)=>(
                            <div key={index} className="text-center hover:bg-white hover:scale-x-110 hover:text-black hover:rounded-xl px-8 py-8">
                                <div className="text-blue-800 text-5xl py-4 px-4 border border-white rounded-lg">{elemento.icono}</div>
                                <p className="">{elemento.texto}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <p className="mt-10 pb-20 text-center">¿No encuentra lo que busca?<span className="text-blue-900"> Puede añadir sus plantillas personalizadas.</span></p>
        </div>
    )
}