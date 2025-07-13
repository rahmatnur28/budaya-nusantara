import Link from "next/link"
import { Palette, Music, Shirt, Building, ChefHat, Calendar, BookOpen, PartyPopper } from "lucide-react"

const categories = [
  {
    id: "seni-rupa",
    name: "Seni Rupa",
    description: "Lukis, patung, kerajinan",
    icon: Palette,
    count: 245,
    color: "bg-red-50 text-red-600",
  },
  {
    id: "seni-pertunjukan",
    name: "Seni Pertunjukan",
    description: "Tari, musik, teater",
    icon: Music,
    count: 189,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: "seni-tekstil",
    name: "Seni Tekstil",
    description: "Batik, tenun, songket",
    icon: Shirt,
    count: 156,
    color: "bg-purple-50 text-purple-600",
  },
  {
    id: "arsitektur",
    name: "Arsitektur Tradisional",
    description: "Rumah adat, bangunan",
    icon: Building,
    count: 98,
    color: "bg-green-50 text-green-600",
  },
  {
    id: "kuliner",
    name: "Kuliner Tradisional",
    description: "Makanan & minuman",
    icon: ChefHat,
    count: 312,
    color: "bg-orange-50 text-orange-600",
  },
  {
    id: "upacara",
    name: "Upacara Adat",
    description: "Ritual & tradisi",
    icon: Calendar,
    count: 134,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    id: "sastra",
    name: "Sastra & Cerita",
    description: "Dongeng, legenda",
    icon: BookOpen,
    count: 87,
    color: "bg-pink-50 text-pink-600",
  },
  {
    id: "festival",
    name: "Festival & Perayaan",
    description: "Event budaya",
    icon: PartyPopper,
    count: 76,
    color: "bg-yellow-50 text-yellow-600",
  },
]

export function CategoryGrid() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Kategori Seni & Budaya</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jelajahi berbagai kategori kekayaan budaya Indonesia dari Sabang sampai Merauke
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                <div className="text-xs text-amber-600 font-medium">{category.count} item budaya</div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
