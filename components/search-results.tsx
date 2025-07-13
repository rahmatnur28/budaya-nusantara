"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Heart, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data - in real app this would come from API
const mockResults = [
  {
    id: "batik-yogya",
    name: "Batik Yogyakarta",
    category: "Seni Tekstil",
    region: "Yogyakarta",
    description: "Seni batik tradisional dengan motif klasik yang sarat makna filosofis",
    image: "/placeholder.svg?height=200&width=300",
    period: "Abad ke-8",
    difficulty: "Menengah",
  },
  {
    id: "tari-kecak",
    name: "Tari Kecak Bali",
    category: "Seni Pertunjukan",
    region: "Bali",
    description: "Tarian sakral yang menceritakan kisah Ramayana",
    image: "/placeholder.svg?height=200&width=300",
    period: "1930-an",
    difficulty: "Tinggi",
  },
  {
    id: "rendang",
    name: "Rendang Minangkabau",
    category: "Kuliner Tradisional",
    region: "Sumatera Barat",
    description: "Masakan daging dengan bumbu rempah yang dimasak lama",
    image: "/placeholder.svg?height=200&width=300",
    period: "Abad ke-16",
    difficulty: "Tinggi",
  },
  {
    id: "wayang-kulit",
    name: "Wayang Kulit Jawa",
    category: "Seni Pertunjukan",
    region: "Jawa",
    description: "Pertunjukan boneka kulit dengan cerita epik Mahabharata",
    image: "/placeholder.svg?height=200&width=300",
    period: "Abad ke-10",
    difficulty: "Sangat Tinggi",
  },
  {
    id: "songket-palembang",
    name: "Songket Palembang",
    category: "Seni Tekstil",
    region: "Sumatera Selatan",
    description: "Kain tenun tradisional dengan benang emas dan perak",
    image: "/placeholder.svg?height=200&width=300",
    period: "Abad ke-16",
    difficulty: "Tinggi",
  },
  {
    id: "rumah-gadang",
    name: "Rumah Gadang",
    category: "Arsitektur Tradisional",
    region: "Sumatera Barat",
    description: "Rumah adat Minangkabau dengan atap melengkung khas",
    image: "/placeholder.svg?height=200&width=300",
    period: "Abad ke-16",
    difficulty: "Tinggi",
  },
]

interface SearchResultsProps {
  filters: any
  sortBy: string
  onSortChange: (sort: string) => void
  searchQuery: string
}

export function SearchResults({ filters, sortBy, onSortChange, searchQuery }: SearchResultsProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Filter and sort results based on current filters
  const filteredResults = mockResults.filter((item) => {
    if (
      searchQuery &&
      !item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    if (filters.category.length > 0 && !filters.category.includes(item.category)) {
      return false
    }

    if (filters.region.length > 0 && !filters.region.includes(item.region)) {
      return false
    }

    return true
  })

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
        <div>
          <h2 className="text-xl font-semibold">Hasil Pencarian</h2>
          <p className="text-gray-600 text-sm">
            Ditemukan {filteredResults.length} budaya
            {searchQuery && ` untuk "${searchQuery}"`}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Urutkan berdasarkan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity">Popularitas</SelectItem>
              <SelectItem value="name-asc">Nama A-Z</SelectItem>
              <SelectItem value="name-desc">Nama Z-A</SelectItem>
              <SelectItem value="region">Daerah</SelectItem>
              <SelectItem value="period">Periode</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex border rounded-lg">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-r-none"
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-l-none"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Results Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResults.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-gray-600" />
                </button>
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-1 bg-amber-600 text-white text-xs font-medium rounded">{item.category}</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>

                <div className="space-y-1 mb-4">
                  <div className="flex items-center text-xs text-gray-500">
                    <MapPin className="w-3 h-3 mr-1" />
                    {item.region}
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    {item.period}
                  </div>
                </div>

                <Link href={`/detail/${item.id}`}>
                  <Button size="sm" className="w-full bg-amber-600 hover:bg-amber-700">
                    Lihat Detail
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredResults.map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-6">
                <div className="relative flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={200}
                    height={150}
                    className="w-48 h-32 object-cover rounded-lg"
                  />
                  <span className="absolute top-2 left-2 px-2 py-1 bg-amber-600 text-white text-xs font-medium rounded">
                    {item.category}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-xl">{item.name}</h3>
                    <Button variant="ghost" size="sm">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>

                  <p className="text-gray-600 mb-4">{item.description}</p>

                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {item.region}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.period}
                    </div>
                    <div className="px-2 py-1 bg-gray-100 rounded text-xs">{item.difficulty}</div>
                  </div>

                  <Link href={`/detail/${item.id}`}>
                    <Button className="bg-amber-600 hover:bg-amber-700">Pelajari Lebih Lanjut</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredResults.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg">
          <p className="text-gray-500 text-lg mb-2">Tidak ada hasil yang ditemukan</p>
          <p className="text-gray-400 text-sm">Coba ubah filter atau kata kunci pencarian</p>
        </div>
      )}
    </div>
  )
}
