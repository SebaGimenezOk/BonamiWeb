import React from 'react'
import Image from 'next/image'


export default function Eventos() {
    return (
    <div name='Eventos' className='flex h-screen w-400 justify-center text-amber-50'>Eventos
     <Image
                      src="/blanco250.png"
                      alt="Púa"
                      width={250}
                      height={250}
                      className="object-contain"
                      priority
                    />
                    </div>
    )
}
