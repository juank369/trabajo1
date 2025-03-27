import { IoMenu } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="flex justify-between items-center p-4 md:p-8 bg-gray-100 border-t border-gray-200">
      {/* Botón con imagen */}
      <button>
        <img 
          src="/centralizaIA_logo_negro_sin_fondo.png" 
          alt="imagen principal de la pagina" 
          className="w-24 h-auto"
        />
      </button>

      {/* Menú para desktop */}
      <nav className="hidden md:flex items-center gap-4">
        <ul className="flex items-center space-x-6">
          <li className="flex items-center gap-2">
            <button className="text-base hover:text-blue-600 transition-colors">
              Inicio
            </button>
            <select className="w-8 h-8 p-0 border  cursor-pointer overflow-hidden text-[0px] bg-transparent">
              <option value="opcion1" className="text-sm">Opción 1</option>
              <option value="opcion2" className="text-sm">Opción 2</option>
              <option value="opcion3" className="text-sm">Opción 3</option>
            </select>
          </li>
          <li className="flex items-center gap-2">
            <button className="text-base hover:text-blue-600 transition-colors">
              Prestaciones
            </button>
            <select className="w-8 h-8 p-0 border  cursor-pointer overflow-hidden text-[0px]">
              <option value="opcion1" className="text-sm">Opción 1</option>
              <option value="opcion2" className="text-sm">Opción 2</option>
              <option value="opcion3" className="text-sm">Opción 3</option>
            </select>
          </li>
          <li className="flex items-center gap-2">
            <button className="text-base hover:text-blue-600 transition-colors">
              Funcionamiento
            </button>
            <select className="w-8 h-8 p-0 border  cursor-pointer overflow-hidden text-[0px]">
              <option value="opcion1" className="text-sm">Opción 1</option>
              <option value="opcion2" className="text-sm">Opción 2</option>
              <option value="opcion3" className="text-sm">Opción 3</option>
            </select>
          </li>
          <li className="flex items-center gap-2">
            <button className="text-base hover:text-blue-600 transition-colors">
              Reseñas
            </button>
            <select className="w-8 h-8 p-0 border  cursor-pointer overflow-hidden text-[0px]">
              <option value="opcion1" className="text-sm">Opción 1</option>
              <option value="opcion2" className="text-sm">Opción 2</option>
              <option value="opcion3" className="text-sm">Opción 3</option>
            </select>
          </li>
          <li className="flex items-center gap-2">
            <button className="text-base hover:text-blue-600 transition-colors">
              Precio
            </button>
            <select className="w-8 h-8 p-0 border  cursor-pointer overflow-hidden text-[0px]">
              <option value="opcion1" className="text-sm">Opción 1</option>
              <option value="opcion2" className="text-sm">Opción 2</option>
              <option value="opcion3" className="text-sm">Opción 3</option>
            </select>
          </li>
          <li className="flex items-center gap-2">
            <button className="text-base hover:text-blue-600 transition-colors">
              FAQ
            </button>
            <select className="w-8 h-8 p-0 border cursor-pointer overflow-hidden text-[0px]">
              <option value="opcion1" className="text-sm">Opción 1</option>
              <option value="opcion2" className="text-sm">Opción 2</option>
              <option value="opcion3" className="text-sm">Opción 3</option>
            </select>
          </li>
        </ul>
        {/* Botones de autenticación */}
        <div className="flex space-x-4">
          <button className="px-4 py-2 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-all">
            Iniciar
          </button>
          <button className="px-4 py-2 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-all">
            Registrarse
          </button>
        </div>
      </nav>

      {/* Menú desplegable para móviles */}
      <div className="md:hidden relative flex items-center gap-2">
        <select 
          className="w-10 h-10 p-0 border border-gray-300 rounded bg-white cursor-pointer appearance-none overflow-hidden text-[0px]"
        >
          <option value="inicio" className="text-sm">Inicio</option>
          <option value="prestaciones" className="text-sm">Prestaciones</option>
          <option value="funcionamiento" className="text-sm">Funcionamiento</option>
          <option value="reseñas" className="text-sm">Reseñas</option>
          <option value="precio" className="text-sm">Precio</option>
          <option value="faq" className="text-sm">FAQ</option>
        </select>
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <IoMenu className="w-6 h-6" />
        </div>
        {/* Segundo select con flecha nativa y texto oculto */}
        <select className="w-8 h-8 p-0 border border-gray-300 rounded bg-white cursor-pointer overflow-hidden text-[0px]">
          <option value="opcion1" className="text-sm">Opción 1</option>
          <option value="opcion2" className="text-sm">Opción 2</option>
          <option value="opcion3" className="text-sm">Opción 3</option>
        </select>
      </div>
    </div>
  );
}