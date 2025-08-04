import React from 'react'
import Image from 'next/image'

export default function Eventos() {
  return (
    <div
      name="Eventos"
      className="w-screen h-screen mt-16 bg-cover bg-center bg-no-repeat flex items-center justify-center scroll-mt-[100px]"
      style={{
        backgroundImage: "url('/fondosicodelico.png')",
      }}
    >
      <div className="bg-black/90 rounded-xl p-6 text-amber-50 max-w-3xl w-[90%] flex flex-col items-start md:flex-row md:items-center gap-6 shadow-lg">
        <Image
          src="/blanco250.png"
          alt="Púa"
          width={120}
          height={120}
          className="object-contain"
          priority
        />

        <div className="text-sm md:text-base leading-relaxed">
          <p className="text-3xl font-bold mb-2">Donde la Noche Sigue Sonando</p>
          <p>
            Una fiesta cargada de nostalgia, música y energía. Bonami te invita a revivir lo mejor de los '70s, '80s, '90s y 2000s con hits que siguen vivos. <br /><br />
            🎧 DJs mezclando en vinilo<br />
            🪩 Visuales retro y ambientación de época<br />
            📸 Rincones para fotos como en 1999<br />
            🍸 Tragos clásicos y barra temática<br />
            🎁 Regalos y sorteos para nostálgicos<br /><br />
            📍 Ubicación secreta (con la entrada)<br />
            ⏰ Desde las 23:00 hasta que el cuerpo diga basta<br />
            🎟️ Entradas limitadas — no te lo pierdas.
          </p>
        </div>
      </div>
    </div>
  )
}
