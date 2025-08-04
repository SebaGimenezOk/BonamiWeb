import React from 'react'
import Image from 'next/image'




export default function Nosotros() {
    return (
        <div name="Nosotros"
            style={{ backgroundImage: "url('/hombretv.png')" }}
            className="w-screen h-[600px]
                       bg-contain bg-no-repeat flex flex-col md:flex-row  items-center justify-center 
                       scroll-mt-[100px] gap-6 md:gap-12
                       "
        >

            <div className="flex flex-col max-w-lg text-amber-50 ml-48 text-center md:text-left"
            >   <Image
                    src="/blanco250.png"
                    alt="Púa"
                    width={250}
                    height={250}
                    className="object-contain mt-36 mb-14"
                    priority
                />

                <p className="text-2xl font-bold mb-4">
                    Donde la Noche Sigue Sonando
                </p>
                <p className="text-base leading-relaxed">
                    Hoy, Jorge y Nicolás Ortalli, quienes hicieron vibrar esas noches como DJs de Bonami,
                    mantienen viva esa esencia con su radio streaming y las fiestas retro que siguen conectando generaciones.
                    <br /><br />
                    BonamiApp te invita a revivir esa magia, a redescubrir la música que hizo historia y a sumarte a cada fiesta
                    donde la noche sigue sonando, igual que antes, pero ahora en tu bolsillo.
                </p>
            </div>
        </div>
    );
}

