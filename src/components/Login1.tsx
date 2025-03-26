import { SlArrowRight } from "react-icons/sl";

export default function Login(){
   

    return(
        
        <div className="flex flex-col mt-20 gap-4 items-center lg:flex-row lg:items-center justify-center">
            <div className="flex bg-botonesIniciar items-center gap-3  text-white w-60 py-0.5 px-2.5 rounded-3xl text-center">
                <p>
                    INICIAR PRUEBA GRATIS
                    <br/>
                    <span>sin tarjeta de credito!</span>
                </p>
                <div>
                <SlArrowRight />
                </div>

            </div>
            <div className="flex bg-botonesIniciar items-center gap-3 text-white w-60 py-1.5 px-2.5 rounded-3xl text-center h-14">
                <p>INICIAR CON GOOGLE</p>
                <div><SlArrowRight /></div>

            </div>
        </div>
        
    )
}