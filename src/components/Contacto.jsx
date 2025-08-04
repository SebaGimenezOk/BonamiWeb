import React from 'react';
import Image from 'next/image';

export default function Contacto() {
    return (
        <div name='Contact'
            className="w-full min-h-[700px] p-10 
             bg-contain bg-no-repeat 
             flex flex-col items-center 
             scroll-mt-[100px] gap-10 text-white"

        >
            {/* Contenedor de columnas */}
            <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6">

                {/* 🧊 Columna 1: Logo + texto */}
                <div className="flex-1 max-w-xs text-center md:text-left space-y-4">
                    <Image
                        src="/blanco250.png"
                        alt="Logo Bonami"
                        width={140}
                        height={140}
                        className="mx-auto md:mx-0"
                    />
                    <h3 className="text-xl font-bold text-amber-400">Donde la Noche Sigue Sonando</h3>
                    <p className="text-sm leading-relaxed bg-black/90 rounded-3xl p-4">
                        En Bonami nos mueve una sola cosa: las ganas de revivir aquellas noches mágicas que marcaron a toda una generación.
                        Estamos trabajando con entusiasmo en nuevos eventos retro, con la música, la estética y la energía que hicieron de Bonami un verdadero ritual.
                        Queremos que usted forme parte de esta nueva etapa.
                        Síganos en nuestras redes para enterarse antes que nadie de las fechas, ubicaciones y descuentos exclusivos.
                        <br /><br />
                        Y si tiene ideas, sugerencias o simplemente quiere compartirnos un recuerdo... este es el lugar.
                        <br /><br />
                        💬 ¡Déjenos su mensaje y hágalo parte de esta historia que sigue sonando!
                    </p>
                </div>

                {/* ✉️ Columna 2: Form */}
                <form className="flex-1 max-w-sm bg-black bg-opacity-50 p-6 rounded-xl shadow-lg self-stretch">
                    <h3 className="text-lg font-semibold mb-4 text-center text-amber-400">Contáctenos</h3>
                    <div className="mb-3">
                        <label className="block text-sm mb-1">Nombre</label>
                        <input
                            type="text"
                            className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-amber-400 focus:ring-2"
                            placeholder="Su nombre"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-sm mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-amber-400 focus:ring-2"
                            placeholder="su@correo.com"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-sm mb-1">Mensaje</label>
                        <textarea
                            className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-amber-400 focus:ring-2"
                            rows="3"
                            placeholder="Escriba su mensaje"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-2 bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 rounded transition"
                    >
                        Enviar
                    </button>
                </form>

                {/* 🎞️ Columna 3 */}
                <div className="flex-1 flex justify-center items-start">
                    <Image
                        src="/albert.png" 
                        alt="Decoración retro"
                        width={500}
                        height={500}
                        className="rounded-lg shadow-md object-contain h-[400px] mt-12 "
                    />
                </div>

            </div>

            {/* 🌐 Sección debajo: Nuestra base + redes */}
            <div className="w-full max-w-4xl text-sm text-center md:text-left space-y-3 pt-6 border-t border-amber-400/30 mt-10">
                <h4 className="font-semibold text-amber-400">Nuestra base</h4>
                <p>📍 Moreno 1270 , Ciudad Autónoma de Buenos Aires, Argentina</p>
                <h4 className="font-semibold text-amber-400 mt-4">Redes sociales</h4>
                <div className="flex justify-center md:justify-start gap-4">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">Instagram</a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">X Twitter</a>
                </div>
            </div>
        </div>
    );
}
