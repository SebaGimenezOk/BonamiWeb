

export default function Tickets() {
  return (
    <div name='Tickets' style={{ backgroundImage: "url('/astrogirl2.png')" }}
      className="w-screen h-[600px]
               bg-contain bg-no-repeat flex flex-col md:flex-row  items-center justify-center 
               scroll-mt-[100px] gap-6 md:gap-12
               ">
      <div
        className="w-full max-w-5xl mx-auto my-10 ml-72 p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-blue-800/10 via-blue-900 to-blue-800/20 ">
        {/* Contenido izquierdo */}
        <div className="flex-1 text-left">
          <h2 className="text-3xl font-bold text-neutral-100 mb-2">Fiesta Retro 80s</h2>
          <p className="text-neutral-200 mb-4">
            ¡Vení a bailar los mejores hits de los 80s y reviví una noche única con toda la onda retro!
            DJ en vivo, barra libre y mucha diversión garantizada.
          </p>
          <a
            href="https://www.eventbrite.com.ar/e/bonamiretro-tickets-1470993945489?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-red-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
          >
            Comprar entradas
          </a>

        </div>

        {/* Imagen derecha */}
        <div className="flex-1">
          <img
            src="/fondopeopleconsello.png"
            alt="Fiesta Retro"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>
      </div>
    </div >
  );
}
