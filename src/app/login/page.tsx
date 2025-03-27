export default function LoginPage() {
    return (
      <main className="flex flex-col md:flex-row h-screen">
        {/* Sección Izquierda - Login */}
        <article className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 md:px-10 relative">
          {/* Ícono en la parte superior izquierda */}
          <header className="absolute top-6 left-6">
            <img src="/CentralizaBlack2.svg" alt="Logo" className="h-10 w-10" />
          </header>
  
          <section className="w-full max-w-md">
            <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-[#6F9CB3] via-[#7088FF] to-[#47BDB5] bg-clip-text text-transparent">Iniciar sesión</h1>
  
            <form className="space-y-4">
              {/* Correo */}
              <fieldset>
                <label htmlFor="email" className="block text-sm font-medium">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  placeholder="admin@admin.com"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </fieldset>
  
              {/* Contraseña */}
              <fieldset>
                <label htmlFor="password" className="block text-sm font-medium">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </fieldset>
  
              {/* Recordarme y Olvidé Contraseña */}
              <div className="flex justify-between text-sm">
                <label htmlFor="remember" className="flex items-center space-x-2">
                  <input type="checkbox" id="remember" />
                  <span>Recordarme</span>
                </label>
                <a href="#" className="text-indigo-600 hover:underline">
                  ¿Olvidó su contraseña?
                </a>
              </div>
  
              {/* Botón de Iniciar Sesión */}
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                Iniciar sesión
              </button>
            </form>
  
            {/* Registro */}
            <p className="text-center text-sm mt-4">
              ¿No tienes cuenta? <a href="#" className="text-indigo-600 hover:underline">Registrarse</a>
            </p>
          </section>
        </article>
  
        {/* Sección Derecha - Imagen */}
        <aside className="hidden md:flex w-1/2 items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500">
          <img
            src="/background.png"
            alt="Vista previa"
            className="max-w-md rounded-lg shadow-lg"
          />
        </aside>
      </main>
    );
  }