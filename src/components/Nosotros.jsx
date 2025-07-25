import React from 'react'
import Image from 'next/image'


export default function Nosotros() {
    return (
        <div name='Nosotros' className='flex h-screen w-400 justify-center text-amber-50'>Nosotros
            <Image
                src="/fondomuestra.jpg"
                alt="Púa"
                width={250}
                height={250}
                className="object-contain"
                priority
            />
        </div>
    )
}
