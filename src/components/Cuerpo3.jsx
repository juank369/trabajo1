'use client'
import { elementostiposCuerpo3, elementosCuerpo3 } from "@/data"
import { useState, useMemo, useRef } from "react"


export default function Cuerpo3() {
  const [activeTab, setActiveTab] = useState(1)
  const tabsRef = useRef(null)

  // Encuentra el contenido activo
  const activeContent = useMemo(() => {
    return elementosCuerpo3.find(item => item.id === activeTab)
  }, [activeTab])

  const handleTabChange = (id) => {
    setActiveTab(id)
    // Mover el scroll suavemente a las pestañas si están fuera de vista
    tabsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative">
      {/* Encabezado fijo */}
      <div className=" bg-white border-b border-gray-200 pb-4 pt-6">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-6">
            Super <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Generador IA</span>
          </h2>
          
          {/* Navegación por pestañas */}
          <nav 
            ref={tabsRef}
            className="flex overflow-x-auto pb-2 hide-scrollbar"
          >
            <div className="flex space-x-1 mx-auto">
              {elementostiposCuerpo3.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex flex-col items-center px-4 py-2 rounded-lg min-w-[70px] ${activeTab === tab.id 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
                >
                  <tab.logo.type className="w-5 h-5 mb-1" />
                  <span className="text-xs font-medium whitespace-nowrap">{tab.titulo}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Área de contenido */}
      <div className="container mx-auto px-4 py-8">
        {activeContent && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            <div>
              <span className="inline-block px-3 py-1 decoration-4 bg-gradient-custom text-transparent bg-clip-text font-bold text-sm mb-4">
                {activeContent.etiqueta}
              </span>
              <h3 className="text-2xl font-bold mb-2">{activeContent.titulo}</h3>
              <p className="text-gray-600 mb-6">{activeContent.descripcion}</p>
              <ul className="space-y-2">
                {activeContent.caracteristicas.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <img 
                src={activeContent.imagen} 
                alt={activeContent.textoImg}
                className="rounded-lg shadow-lg w-full max-w-md object-cover"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}