"use client"; // Asegúrate de que este componente sea de cliente 
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Mensaje1() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {//despues de montar el componente en el Dom cambiamos el estado del cliente a true
    setIsClient(true);
  }, []);

  return (
    <div className=" text-center relative font-bold z-10 mt-44 pt-4 text-2xl opacity-100"> 
      <h2>
        IA que entiende tu          
        <br />
        {isClient && (  //solo lo podemos ejecutar desde el lado del cliente
          <span className="underline bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            <TypeAnimation
              sequence={[
                "negocio",
                1000,
                "libro",
                1000,
                "estudio",
                1000,
                "mercado",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        )}
      </h2>
    </div>
  );
}