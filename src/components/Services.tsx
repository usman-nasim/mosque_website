import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Book, Heart, Users, GraduationCap } from "lucide-react"

const services = [
  {
    title: "Quranic Studies",
    description: "Dive deep into the holy Quran with our expert scholars. Learn tajweed, tafsir, and memorization techniques.",
    icon: <Book className="h-8 w-8 text-primary" />,
    rating: 4.8
  },
  {
    title: "Islamic Counseling",
    description: "Get guidance on personal, family, and spiritual matters from our experienced Islamic counselors.",
    icon: <Heart className="h-8 w-8 text-primary" />,
    rating: 4.7
  },
  {
    title: "Community Programs",
    description: "Join our vibrant Muslim community in various social and educational programs fostering unity and brotherhood.",
    icon: <Users className="h-8 w-8 text-primary" />,
    rating: 4.9
  },
  {
    title: "Islamic Education",
    description: "Enroll in our comprehensive Islamic studies courses covering fiqh, hadith, seerah, and Islamic history.",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    rating: 4.6
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
      <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  )
}

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-semibold mb-4">
                  {service.icon}
                  <span className="ml-2">{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4 text-gray-600">{service.description}</p>
                <StarRating rating={service.rating} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}