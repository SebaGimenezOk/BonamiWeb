import React from 'react'
import Image from 'next/image'


export default function Contacto() {
  return (
    <div name='Contact' className='flex h-screen w-400 justify-center text-amber-50'>
       <Image
                  src="/blanco250.png"
                  alt="Púa"
                  width={250}
                  height={250}
                  className="object-contain"
                  priority
                />
      Contacto</div>
  )
}
