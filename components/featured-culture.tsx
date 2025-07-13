import Image from "next/image"
import Link from "next/link"
import { MapPin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredItems = [
  {
    id: "batik-yogyakarta",
    name: "Batik Yogyakarta",
    category: "Seni Tekstil",
    region: "Yogyakarta",
    description: "Seni batik tradisional dengan motif klasik yang sarat makna filosofis.",
    image: "/placeholder.svg?height=250&width=350",
  },
  {
    id: "tari-kecak-bali",
    name: "Tari Kecak Bali",
    category: "Seni Pertunjukan",
    region: "Bali",
    description: "Tarian sakral yang menceritakan kisah Ramayana.",
    image: "/placeholder.svg?height=250&width=350",
  },
  {
    id: "rendang-minang",
    name: "Rendang Minangkabau",
    category: "Kuliner Tradisional",
    region: "Sumatera Barat",
    description: "Masakan daging dengan bumbu rempah yang khas.",
    image: "/placeholder.svg?height=250&width=350",
  },
]

export function FeaturedCulture() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Budaya Unggulan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan warisan budaya Indonesia yang paling menarik dan bersejarah
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={350}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-gray-600" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-amber-600 text-white text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    {item.region}
                  </div>
                </div>

                <Link href={`/detail/${item.id}`}>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">Pelajari Lebih Lanjut</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/explore">
            <Button
              variant="outline"
              size="lg"
              className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
            >
              Jelajahi Semua Budaya
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
