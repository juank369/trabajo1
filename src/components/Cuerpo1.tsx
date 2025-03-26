
import Image from "next/image";
import { HiOutlineMenuAlt4 } from 'react-icons/hi'; 
import Mensaje1 from "./Mensaje1";
import Contacto from "./Contacto1";
import Login from "./Login1";
import Menu from "./Menu1";


export default function Cuerpo1(){

    return(
        <div>
            <div className="flex">
                <button
                    className="items-start justify-start h-7"
                    >
                    <Image
                        src="/CentralizaBlack.svg" 
                        alt="Logo de Centraliza" 
                        width={160} 
                        height={50} 
                    />
                </button>
                <section className="bg-divRobot relative w-full opacity-95 z-5 lg:mx-8">
                    <div className="inset-0 z-0 absolute mx-auto mt-20 p-4 ">
                        <img 
                            className="z-0 opacity-10 mt-25  mx-auto w-72 "
                            src="/roboy.svg" // La ruta es relativa a la carpeta public
                            alt="imagen fondo principal #1"/>
                    </div>
                    <button className="bg-gray-100 h-7 text-xs mt-1 absolute top-0 right-1 rounded-2xl px-2.5 py-2 hover:bg-emerald-100 hover:scale-105 transition-all duration-200 lg:mr-8">
                    iniciar
                    </button>
                    
                    <div className="opacity-100">
                    <Mensaje1/>
                    <Contacto/>
                    </div>
                </section>
            <div
                className="flex gap-x-2 text-[11px]"
                >
                <button
                className="bg-gray-100 text-xs rounded-2xl mt-1 px-2.5 h-7 py-2 "
                >unirse</button>
                <Menu/>
            </div>

            </div>
            <p
            className="absolute mt-2 text-[11px] text-center w-full"
            >
                Centraliza tu creatividad con IA: ahorra tiempo y multiplica tu impacto
                <br />
                en tiempo real
            </p>
            <Login/>
        </div>
    )
}