'use client';
import { useState, useRef, useEffect } from 'react';
import { comentarios } from '../data2';

export default function Cuerpo8() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carruselRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const isScrolling = useRef(false);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Configurar el carrusel
  useEffect(() => {
    if (isMobile || !carruselRef.current) return;

    const carrusel = carruselRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;
    let scrollTimeout;

    const updateActiveIndex = () => {
      if (isScrolling.current) return;
      
      const itemWidth = carrusel.scrollWidth / comentarios.length;
      const newIndex = Math.round(carrusel.scrollLeft / itemWidth);
      const clampedIndex = Math.max(0, Math.min(newIndex, comentarios.length - 1));
      
      if (clampedIndex !== activeIndex) {
        setActiveIndex(clampedIndex);
      }
    };

    const handleScroll = () => {
      if (!isDown) {
        isScrolling.current = true;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling.current = false;
          updateActiveIndex();
        }, 100);
      }
      updateActiveIndex();
    };

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - carrusel.offsetLeft;
      scrollLeft = carrusel.scrollLeft;
      carrusel.style.cursor = 'grabbing';
      carrusel.style.scrollBehavior = 'auto';
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carrusel.offsetLeft;
      const walk = (x - startX) * 2;
      carrusel.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      isDown = false;
      carrusel.style.cursor = 'grab';
      carrusel.style.scrollBehavior = 'smooth';
      
      // Snap al comentario más cercano
      const itemWidth = carrusel.scrollWidth / comentarios.length;
      const targetIndex = Math.round(carrusel.scrollLeft / itemWidth);
      carrusel.scrollTo({
        left: targetIndex * itemWidth,
        behavior: 'smooth'
      });
    };

    carrusel.addEventListener('mousedown', handleMouseDown);
    carrusel.addEventListener('mousemove', handleMouseMove);
    carrusel.addEventListener('mouseup', handleMouseUp);
    carrusel.addEventListener('mouseleave', handleMouseUp);
    carrusel.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(scrollTimeout);
      carrusel.removeEventListener('mousedown', handleMouseDown);
      carrusel.removeEventListener('mousemove', handleMouseMove);
      carrusel.removeEventListener('mouseup', handleMouseUp);
      carrusel.removeEventListener('mouseleave', handleMouseUp);
      carrusel.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile, activeIndex]);

  const goToComment = (index) => {
    const carrusel = carruselRef.current;
    if (carrusel) {
      isScrolling.current = true;
      const itemWidth = carrusel.scrollWidth / comentarios.length;
      carrusel.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
      
      setTimeout(() => {
        isScrolling.current = false;
      }, 500);
    }
  };

  return (
    <section className="py-12 px-4 w-[90vw] mx-auto select-none">
      <div className="text-center mb-12">
        <h2 className="text-4xl">
          Escuche nuestra<br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text font-bold">
            comunidad
          </span>
        </h2>
        <p className="text-sm mt-3 text-gray-400 max-w-2xl mx-auto">
          Desde pequeños negocios hasta empresas, usuarios de sectores dependen de
          nuestra tecnología para generación de contenido
        </p>
      </div>

      <div className="relative">
        <div
          ref={carruselRef}
          className={`${
            isMobile 
              ? 'space-y-8' 
              : 'flex overflow-x-hidden snap-x snap-mandatory gap-6 pb-8 cursor-grab'
          }`}
        >
          {comentarios.map((item) => (
            <div
              key={item.id}
              className={`${isMobile ? 'w-full' : 'min-w-[35%] snap-center'}`}
            >
              <div className="p-6">
                <p className="text-lg italic mb-6">
                  "{item.comentario}"
                </p>
                <div className="w-4/5 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto my-6" />
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                  <img
                    src={item.img}
                    alt={item.descripcionImg}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-center sm:text-left">
                    <h5 className="font-bold">{item.usuario}</h5>
                    <p className="text-sm text-purple-300">{item.tipo}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!isMobile && (
          <div className="flex justify-center gap-2 mt-6">
            {comentarios.map((_, index) => (
              <button
                key={index}
                onClick={() => goToComment(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? 'bg-purple-500 w-6'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}