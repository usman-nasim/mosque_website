'use client'

import Image from "next/image"
import masjidImg from '@/images/masjid.jpg'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image 
        src={masjidImg} 
        alt="Masjid Image" 
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black/50" /> {/* Overlay for better text readability */}

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:flex-row md:justify-between md:px-16">
        {/* Left Side: Main Heading */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            Purity Comes From Faith
          </h1>
          <p className="mt-4 text-lg text-gray-200 md:text-xl max-w-md mx-auto md:mx-0">
            Explore the journey of purity and faith. A belief that changes the world starts from within. 
          </p>
        </div>

        {/* Right Side: Supporting Text */}
        <div className="mt-8 md:mt-0 md:w-1/2">
          <p className="text-gray-300 text-center md:text-right text-md md:text-lg leading-relaxed max-w-md ml-auto">
            Whether it's an inward reflection or an outward action, true faith shines through in everything you do. Embrace the power of purity in faith and let it guide you in every aspect of life.
          </p>
        </div>
      </div>
    </section>
  )
}