"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Target, Book, Heart, Scale, Users } from "lucide-react"
import { motion } from "framer-motion"
import React from "react"
const cards = [
  {
    title: "Our Vision",
    icon: <Eye className="mr-2 h-6 w-6" />,
    content: "Islam envisions a harmonious world where individuals, guided by the Quran, lead lives of piety and adhere to principles of justice. On a collective level, the vision involves a united Muslim community fostering social equity and contributing positively to society.",
    items: [
      { icon: <Book className="h-10 w-10 mb-2" />, label: "Guided by Quran" },
      { icon: <Scale className="h-10 w-10 mb-2" />, label: "Justice & Equity" },
      { icon: <Users className="h-10 w-10 mb-2" />, label: "United Community" },
    ]
  },
  {
    title: "Our Mission",
    icon: <Target className="mr-2 h-6 w-6" />,
    content: "Islam's mission centers on spreading monotheism, moral principles, and submission to Allah's will. Muslims are tasked with sharing the message of Islam with sincerity, promoting justice, charity, and kindness. The mission extends to cultivating positive contributions and fostering unity for the betterment of individuals and society.",
    items: [
      { icon: <Heart className="h-10 w-10 mb-2" />, label: "Spread Love & Kindness" },
      { icon: <Scale className="h-10 w-10 mb-2" />, label: "Promote Justice" },
      { icon: <Users className="h-10 w-10 mb-2" />, label: "Foster Unity" },
    ]
  },
]

export default function AboutUs() {
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
          About Us
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="flex flex-col h-full transition-colors hover:bg-primary group">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-semibold mb-4 group-hover:text-primary-foreground">
                    {React.cloneElement(card.icon, { className: "mr-2 h-6 w-6 group-hover:text-primary-foreground" })}
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4 group-hover:text-primary-foreground">
                    {card.content}
                  </p>
                  <div className="flex justify-around mt-6">
                    {card.items.map((item, i) => (
                      <div key={i} className="flex flex-col items-center">
                        {React.cloneElement(item.icon, { className: "h-10 w-10 mb-2 text-primary group-hover:text-primary-foreground" })}
                        <span className="text-sm text-center group-hover:text-primary-foreground">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}