'use client';
import { useState, useEffect } from 'react';

export default function GridResponsive() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // Tailwind's `lg`
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div 
      className={`grid gap-4 p-4 mt-10 mb-16 ${
        isMobile 
          ? 'grid-cols-1 grid-rows-[auto]' 
          : 'grid-cols-3 grid-rows-2'
      }`}
      style={{
        gridTemplateAreas: isMobile
          ? `
            "numero1"
            "articulo1"
            "numero2"
            "articulo2"
            "numero3"
            "articulo3"
          `
          : `
            "numero1 numero2 numero3"
            "articulo1 articulo2 articulo3"
          `,
      }}
    >
      {/* Número 1 */}
      <div style={{ gridArea: 'numero1' }} className="bg-blue-100 p-4 text-center text-2xl font-bold">
        1
      </div>

      {/* Artículo 1 */}
      <article style={{ gridArea: 'articulo1' }} className="bg-gray-100 p-4">
        <h4 className="font-bold">Seleccione una herramienta</h4>
        <p>Simplemente explique de qué trata su contenido.</p>
      </article>

      {/* Número 2 */}
      <div style={{ gridArea: 'numero2' }} className="bg-blue-100 p-4 text-center text-2xl font-bold">
        2
      </div>

      {/* Artículo 2 */}
      <article style={{ gridArea: 'articulo2' }} className="bg-gray-100 p-4">
        <h4 className="font-bold">Explique su idea</h4>
        <p>Introduzca palabras clave sobre su marca.</p>
      </article>

      {/* Número 3 */}
      <div style={{ gridArea: 'numero3' }} className="bg-blue-100 p-4 text-center text-2xl font-bold">
        3
      </div>

      {/* Artículo 3 */}
      <article style={{ gridArea: 'articulo3' }} className="bg-gray-100 p-4">
        <h4 className="font-bold">¡Hecho!</h4>
        <p>Edite o exporte sus resultados fácilmente.</p>
      </article>
    </div>
  );
}