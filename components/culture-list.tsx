"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const allCultures = [
  {
    id: "batik-yogyakarta",
    name: "Batik Yogyakarta",
    category: "Seni Tekstil",
    region: "Yogyakarta",
    description: "Seni batik tradisional dengan motif klasik yang sarat makna filosofis dan nilai-nilai Jawa.",
    image: "https://i.pinimg.com/736x/cb/dc/9b/cbdc9b0bb396e52294c1569cd9ffb0c5.jpg",
    period: "Abad ke-8",
  },
  {
    id: "tari-kecak-bali",
    name: "Tari Kecak Bali",
    category: "Seni Pertunjukan",
    region: "Bali",
    description: "Tarian sakral yang menceritakan kisah Ramayana dengan iringan suara 'cak' dari puluhan penari pria.",
    image: "https://i.pinimg.com/1200x/38/ab/0b/38ab0b7acfa7ffe5019c63f9d388f9e0.jpg",
    period: "1930-an",
  },
  {
    id: "rendang-minang",
    name: "Rendang Minangkabau",
    category: "Kuliner Tradisional",
    region: "Sumatera Barat",
    description: "Masakan daging dengan bumbu rempah yang dimasak dalam waktu lama hingga kering dan tahan lama.",
    image: "https://i.pinimg.com/736x/97/d0/21/97d02196deea630b66f9a2002c8f6ce8.jpg",
    period: "Abad ke-16",
  },
  {
    id: "wayang-kulit",
    name: "Wayang Kulit Jawa",
    category: "Seni Pertunjukan",
    region: "Jawa Tengah",
    description: "Pertunjukan boneka kulit dengan cerita epik Mahabharata dan Ramayana.",
    image: "https://i.pinimg.com/736x/c5/0b/4e/c50b4e6054e8ccb8b139592e5377d948.jpg",
    period: "Abad ke-10",
  },
  {
    id: "songket-palembang",
    name: "Songket Palembang",
    category: "Seni Tekstil",
    region: "Sumatera Selatan",
    description: "Kain tenun tradisional dengan benang emas dan perak yang mewah dan elegan.",
    image: "https://i.pinimg.com/736x/ea/60/fd/ea60fd24b8870a2bc8119eb53ea990db.jpg",
    period: "Abad ke-16",
  },
  {
    id: "rumah-gadang",
    name: "Rumah Gadang",
    category: "Arsitektur Tradisional",
    region: "Sumatera Barat",
    description: "Rumah adat Minangkabau dengan atap melengkung khas yang menyerupai tanduk kerbau.",
    image: "https://i.pinimg.com/1200x/3f/4b/c5/3f4bc52bf3869d2bead8ba47c03022a5.jpg",
    period: "Abad ke-16",
  },
  {
    id: "tari-saman",
    name: "Tari Saman Aceh",
    category: "Seni Pertunjukan",
    region: "Aceh",
    description: "Tarian tradisional Aceh yang diakui UNESCO sebagai warisan budaya dunia.",
    image: "https://i.pinimg.com/1200x/9d/cf/ee/9dcfee11f930af8c0141c0e9e6c14502.jpg",
    period: "Abad ke-14",
  },
  {
    id: "keris-jawa",
    name: "Keris Jawa",
    category: "Seni Rupa",
    region: "Jawa",
    description: "Senjata tradisional Jawa yang memiliki nilai spiritual dan seni tinggi.",
    image: "https://i.pinimg.com/1200x/cb/3e/a7/cb3ea73d20b1038c89aa0bf91eb70d7b.jpg",
    period: "Abad ke-9",
  },
]

const categories = [
  "Semua",
  "Seni Tekstil",
  "Seni Pertunjukan",
  "Kuliner Tradisional",
  "Arsitektur Tradisional",
  "Seni Rupa",
]

export function CultureList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Semua")

  const filteredCultures = allCultures.filter((culture) => {
    const matchesSearch =
      culture.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      culture.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      culture.region.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "Semua" || culture.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Jelajahi Budaya Indonesia</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Temukan kekayaan warisan budaya Nusantara dari berbagai daerah
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Cari budaya, daerah, atau kata kunci..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-primary hover:bg-primary/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 text-center">
            Menampilkan {filteredCultures.length} budaya
            {selectedCategory !== "Semua" && ` dalam kategori ${selectedCategory}`}
            {searchQuery && ` untuk "${searchQuery}"`}
          </p>
        </div>

        {/* Culture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCultures.map((culture) => (
            <div
              key={culture.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative">
                <Image
                  src={culture.image || "/placeholder.svg"}
                  alt={culture.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-3 left-3">
                  <Badge className="bg-primary text-white text-xs">{culture.category}</Badge>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-1">{culture.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{culture.description}</p>

                <div className="space-y-1 mb-4">
                  <div className="flex items-center text-xs text-gray-500">
                    <MapPin className="w-3 h-3 mr-1" />
                    {culture.region}
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    {culture.period}
                  </div>
                </div>

                <Link href={`/detail/${culture.id}`}>
                  <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                    Pelajari
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCultures.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-2">Tidak ada budaya yang ditemukan</p>
            <p className="text-gray-400 text-sm">Coba ubah kata kunci pencarian atau kategori</p>
          </div>
        )}

        {/* Learn More Button */}
        {/* {filteredCultures.length > 0 && (
          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-background-light-gold bg-transparent"
            >
              Pelajari Lebih Banyak Budaya
            </Button>
          </div>
        )} */}
      </div>
    </section>
  )
}
