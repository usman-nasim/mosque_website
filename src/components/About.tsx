"use client"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Target, Book, Heart, Scale, Users } from "lucide-react"

export default function AboutUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-semibold mb-4">
                <Eye className="mr-2 h-6 w-6" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4">
                Islam envisions a harmonious world where individuals, guided by the Quran, lead lives of piety and adhere to principles of justice. On a collective level, the vision involves a united Muslim community fostering social equity and contributing positively to society.
              </p>
              <div className="flex justify-around mt-6">
                <div className="flex flex-col items-center">
                  <Book className="h-10 w-10 text-primary mb-2" />
                  <span className="text-sm text-center">Guided by Quran</span>
                </div>
                <div className="flex flex-col items-center">
                  <Scale className="h-10 w-10 text-primary mb-2" />
                  <span className="text-sm text-center">Justice & Equity</span>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <span className="text-sm text-center">United Community</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-semibold mb-4">
                <Target className="mr-2 h-6 w-6" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4">
                Islam's mission centers on spreading monotheism, moral principles, and submission to Allah's will. Muslims are tasked with sharing the message of Islam with sincerity, promoting justice, charity, and kindness. The mission extends to cultivating positive contributions and fostering unity for the betterment of individuals and society.
              </p>
              <div className="flex justify-around mt-6">
                <div className="flex flex-col items-center">
                  <Heart className="h-10 w-10 text-primary mb-2" />
                  <span className="text-sm text-center">Spread Love & Kindness</span>
                </div>
                <div className="flex flex-col items-center">
                  <Scale className="h-10 w-10 text-primary mb-2" />
                  <span className="text-sm text-center">Promote Justice</span>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <span className="text-sm text-center">Foster Unity</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-semibold mb-4">
                <Target className="mr-2 h-6 w-6" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4">
                Islam's mission centers on spreading monotheism, moral principles, and submission to Allah's will. Muslims are tasked with sharing the message of Islam with sincerity, promoting justice, charity, and kindness. The mission extends to cultivating positive contributions and fostering unity for the betterment of individuals and society.
              </p>
              <div className="flex justify-around mt-6">
                <div className="flex flex-col items-center">
                  <Heart className="h-10 w-10 text-primary mb-2" />
                  <span className="text-sm text-center">Spread Love & Kindness</span>
                </div>
                <div className="flex flex-col items-center">
                  <Scale className="h-10 w-10 text-primary mb-2" />
                  <span className="text-sm text-center">Promote Justice</span>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <span className="text-sm text-center">Foster Unity</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-semibold mb-4">
                <Target className="mr-2 h-6 w-6" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4">
                Islam's mission centers on spreading monotheism, moral principles, and submission to Allah's will. Muslims are tasked with sharing the message of Islam with sincerity, promoting justice, charity, and kindness. The mission extends to cultivating positive contributions and fostering unity for the betterment of individuals and society.
              </p>
              <div className="flex justify-around mt-6">
                <div className="flex flex-col items-center">
                  <Heart className="h-10 w-10 text-primary mb-2" />
                  <span className="text-sm text-center">Spread Love & Kindness</span>
                </div>
                <div className="flex flex-col items-center">
                  <Scale className="h-10 w-10 text-primary mb-2" />
                  <span className="text-sm text-center">Promote Justice</span>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <span className="text-sm text-center">Foster Unity</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Image */}
        {/* <div className="mt-12 relative h-64 md:h-96">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Islamic Calligraphy"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div> */}
      </div>
    </section>
  )
}