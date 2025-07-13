"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Star, Share2, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CultureDetailProps {
  data: {
    id: string
    name: string
    category: string
    region: string
    mainImage: string
    gallery: string[]
    basicInfo: {
      origin: string
      period: string
      difficulty: string
      materials: string
    }
    description: string
    history: string
    philosophy: string
    process: string
    coordinates: { lat: number; lng: number }
    relatedCultures: Array<{ id: string; name: string; region: string }>
    references: string[]
  }
}

export function CultureDetail({ data }: CultureDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const allImages = [data.mainImage, ...data.gallery]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative">
                <Image
                  src={allImages[currentImageIndex] || "/placeholder.svg"}
                  alt={data.name}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex gap-2 overflow-x-auto">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 ${index === currentImageIndex ? "ring-2 ring-secondary" : ""}`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${data.name} ${index + 1}`}
                      width={100}
                      height={80}
                      className="w-20 h-16 object-cover rounded"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Basic Info */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-2 bg-background-light-gold text-text-primary-accent">{data.category}</Badge>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{data.name}</h1>
                <p className="text-gray-600 text-lg">{data.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-gray-600">Asal:</span>
                    <span className="ml-2 font-medium">{data.basicInfo.origin}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-gray-600">Periode:</span>
                    <span className="ml-2 font-medium">{data.basicInfo.period}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-sm">
                    <span className="text-gray-600">Tingkat Kesulitan:</span>
                    <div className="flex items-center mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <=
                            (
                              data.basicInfo.difficulty === "Mudah"
                                ? 2
                                : data.basicInfo.difficulty === "Menengah"
                                  ? 3
                                  : data.basicInfo.difficulty === "Tinggi"
                                    ? 4
                                    : 5
                            )
                              ? "fill-secondary text-secondary"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm font-medium">{data.basicInfo.difficulty}</span>
                    </div>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Bahan:</span>
                    <p className="font-medium">{data.basicInfo.materials}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Share2 className="w-4 h-4 mr-2" />
                  Bagikan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Information */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Tabs defaultValue="sejarah" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="sejarah">Sejarah</TabsTrigger>
            <TabsTrigger value="filosofi">Filosofi</TabsTrigger>
            <TabsTrigger value="proses">Proses</TabsTrigger>
            <TabsTrigger value="lokasi">Lokasi</TabsTrigger>
          </TabsList>

          <TabsContent value="sejarah" className="mt-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Sejarah & Latar Belakang</h3>
              <p className="text-gray-700 leading-relaxed">{data.history}</p>
            </div>
          </TabsContent>

          <TabsContent value="filosofi" className="mt-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Makna Filosofis & Simbolis</h3>
              <p className="text-gray-700 leading-relaxed">{data.philosophy}</p>
            </div>
          </TabsContent>

          <TabsContent value="proses" className="mt-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cara Pembuatan/Pelaksanaan</h3>
              <p className="text-gray-700 leading-relaxed">{data.process}</p>
            </div>
          </TabsContent>

          <TabsContent value="lokasi" className="mt-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Peta Lokasi Asal</h3>
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Peta akan ditampilkan di sini</p>
                <p className="text-sm text-gray-400 ml-2">
                  ({data.coordinates.lat}, {data.coordinates.lng})
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Cultures */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-6">Budaya Serupa</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.relatedCultures.map((culture) => (
              <Link
                key={culture.id}
                href={`/detail/${culture.id}`}
                className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <h4 className="font-medium">{culture.name}</h4>
                <p className="text-sm text-gray-600 flex items-center mt-1">
                  <MapPin className="w-3 h-3 mr-1" />
                  {culture.region}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* References */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Sumber Referensi</h3>
          <ul className="space-y-2">
            {data.references.map((ref, index) => (
              <li key={index} className="text-gray-600 text-sm">
                • {ref}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
