"use client"

import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Book, Heart, Users, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"
import masjidImg from '@/images/masjid.jpg'

const services = [
  {
    title: "Quranic Studies",
    description: "Dive deep into the holy Quran with our expert scholars. Learn tajweed, tafsir, and memorization techniques.",
    icon: <Book className="h-8 w-8 text-primary" />,
    rating: 4.8,
    image: masjidImg
  },
  {
    title: "Islamic Counseling",
    description: "Get guidance on personal, family, and spiritual matters from our experienced Islamic counselors.",
    icon: <Heart className="h-8 w-8 text-primary" />,
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Community Programs",
    description: "Join our vibrant Muslim community in various social and educational programs fostering unity and brotherhood.",
    icon: <Users className="h-8 w-8 text-primary" />,
    rating: 4.9,
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Islamic Education",
    description: "Enroll in our comprehensive Islamic studies courses covering fiqh, hadith, seerah, and Islamic history.",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    rating: 4.6,
    image: "/placeholder.svg?height=400&width=600"
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= Math.round(rating)
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300"
          }`}
        />
      ))}
      <span className="ml-2 text-sm text-gray-200">{rating.toFixed(1)}</span>
    </div>
  )
}

export default function Services() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="flex flex-col h-full overflow-hidden relative">
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                </div>
                <div className="absolute inset-0 bg-black/50 z-10" />
                <CardHeader className="relative z-20">
                  <CardTitle className="flex items-center text-2xl font-semibold mb-4 text-white">
                    {React.cloneElement(service.icon, { className: "h-8 w-8 text-primary mr-2" })}
                    <span>{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow relative z-20">
                  <p className="mb-4 text-gray-200">{service.description}</p>
                  <StarRating rating={service.rating} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}