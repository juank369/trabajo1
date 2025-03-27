

export default function Carrusel2(){

    const texto1="Fácil uso Personalizado"
    const texto2="Busqueda tiempo real  Hecho para todos"

    const lista1=[texto1,texto1,texto1,texto1,texto1,texto1,texto1]
    const lista2=[texto2,texto2,texto2,texto2,texto2,texto2,texto2]
    
   

    return(
        <div className='w-full '>
            <div className="overflow-hidden whitespace-nowrap mt-10">
                <div className="inline-flex space-x-16 animate-loop-scroll">
                    {lista1.map((elemento,index)=>(
                        <h3 key={index} className="max-w-none text-8xl  px-3 rounded-lg">
                            {elemento}
                        </h3>
                    ))}

                </div>
                
        </div>
        <div className="overflow-hidden whitespace-nowrap mt-10">
                <div className="inline-flex space-x-16 animate-loop-scroll">
                    {lista2.map((elemento,index)=>(
                        <h3 key={index} className="max-w-none text-8xl  px-3 rounded-lg">
                            {elemento}
                        </h3>
                    ))}

                </div>
                
        </div>


        </div>
    )
}