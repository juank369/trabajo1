import Link from "next/link";
import { FaRegCheckSquare } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Footer() {
    return (
        <footer className="px-4 bg-black text-white py-14 pb-40 w-full">
            {/* Etiqueta superior */}
            <div className="flex items-center text-xs mb-6 lg:ml-10">
                <span className="border border-gray-500 bg-slate-900 px-3 py-1 rounded-xl mr-3 text-sm">
                    Centraliza con IA
                </span>
                <span className="text-gray-300">PAGUE UNA VEZ Y SEA DUEÑO PARA SIEMPRE</span>
            </div>

            {/* Contenedor principal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:gap-96">
                {/* Sección Izquierda: Información de prueba gratis */}
                <div className="w-full lg:ml-10">
                    <h2 className="text-4xl font-bold leading-tight">
                        Inicie su prueba <br /> <span className="text-blue-400">gratis</span>
                    </h2>
                    <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                        Libere el potencial de su negocio dejando que la IA <br />
                        trabaje y genere dinero para usted.
                    </p>
                </div>

                {/* Sección Derecha: Lista de Beneficios */}
                <ol className="space-y-4 text-lg">
                    {[
                        "Planes de equipo",
                        "Asistencia Premium",
                        "Garantía de devolución",
                        "Acceso instantáneo",
                        "Prueba gratuita"
                    ].map((beneficio, index) => (
                        <li key={index} className="flex items-center space-x-3">
                            <FaRegCheckSquare className="text-green-400 text-2xl" />
                            <p className="text-gray-200">{beneficio}</p>
                        </li>
                    ))}
                </ol>
            </div>

            {/* Botón de acción */}
            <div className="mt-10">
                <Link href={"/register"}>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full flex items-center space-x-3 text-lg font-semibold shadow-lg hover:scale-105 transition-transform lg:ml-10">
                    <span>Únete a nuestra comunidad</span>
                    <IoIosArrowForward className="text-2xl" />
                </button>
                </Link>
            </div>
        </footer>
    );
}
