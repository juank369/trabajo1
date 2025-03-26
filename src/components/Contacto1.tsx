'use client'; // Marca este componente como un Client Component

import { useState } from "react";

export default function Contacto() {
    const [email, setEmail] = useState("");

    // Tipar el evento `e` como React.ChangeEvent<HTMLInputElement>
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value); 
    };

    return (
        <form action="" className="flex flex-col opacity-100 items-center mt-10 pb-6">
            {/* Usa htmlFor en lugar de for */}
            <label htmlFor="correo" className="font-bold">
                Contactame!
            </label>
            <div className="flex border rounded-md">
                {/* Agrega un id que coincida con htmlFor */}
                <input
                    id="correo" // Este id debe coincidir con htmlFor
                    type="email"
                    placeholder="correo@ejemplo.com"
                    className="w-32 px-2 py-1"
                    value={email}
                    onChange={handleInputChange} // Manejador de cambios
                />
                <button className="bg-blue-500 text-white px-4 py-1">
                    Enviar
                </button>
            </div>
        </form>
    );
}