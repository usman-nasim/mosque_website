'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import Slider from "react-slick"
import masjidImg from "@/images/masjid.jpg"
import tajMahal from "@/images/tagMahalImage.jpeg"
import lahoreImg from "@/images/lahoreMasjid.jpeg"
import madarsa from "@/images/madarsa.jpeg"


// You'll need to install these packages:
// npm install react-slick slick-carousel

// Import the CSS for react-slick in your global CSS file:
// @import "~slick-carousel/slick/slick.css";
// @import "~slick-carousel/slick/slick-theme.css";

const carouselImages = [
masjidImg, tajMahal, madarsa, lahoreImg
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {mounted && (
        <Slider {...settings} className="absolute inset-0">
          {carouselImages.map((src, index) => (
            <div key={index} className="relative h-screen">
              <Image
                src={src}
                alt={`Masjid Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={index === 0}
              />
            </div>
          ))}
        </Slider>
      )}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:flex-row md:justify-between md:px-16">
        <motion.div 
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            Purity Comes From Faith
          </h1>
          <p className="mt-4 text-lg text-gray-200 md:text-xl max-w-md mx-auto md:mx-0">
            Explore the journey of purity and faith. A belief that changes the world starts from within. 
          </p>
        </motion.div>

        <motion.div 
          className="mt-8 md:mt-0 md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-gray-300 text-center md:text-right text-md md:text-lg leading-relaxed max-w-md ml-auto">
            Whether it's an inward reflection or an outward action, true faith shines through in everything you do. Embrace the power of purity in faith and let it guide you in every aspect of life.
          </p>
        </motion.div>
      </div>
    </section>
  )
}