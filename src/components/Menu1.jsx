'use client'
import { useState } from "react";
import { HiOutlineMenuAlt4 } from 'react-icons/hi'; 

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative z-20">
            
            <button
                onClick={toggleMenu}
                className="bg-gray-100 p-2 rounded-3xl flex items-center "
            >
                <HiOutlineMenuAlt4 size={25} />
            </button>

          
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                    <ul className="flex flex-col">
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Presentación
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Funcionamiento
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Reseñas
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Precio
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                FAQ
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}