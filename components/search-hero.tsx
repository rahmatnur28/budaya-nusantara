"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchHero() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section
      className="relative py-20 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1703769605314-18648cfc3428')` }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        {" "}
        {/* Text color changed to white for contrast */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Budaya Indonesia</h1>
        <p className="text-lg mb-8 max-w-xl mx-auto">Jelajahi kekayaan seni dan budaya Nusantara</p>
        <div className="relative max-w-2xl mx-auto">
          <div className="relative max-w-xl mx-auto">
            <div className="flex items-center gap-2">
              {/* Search Icon + Input */}
              {/* <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Cari batik, tari tradisional, kuliner, atau budaya lainnya..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 text-base border-2 border-gray-200 rounded-full 
                  focus:border-secondary focus:ring-0 text-gray-900 placeholder-gray-400"
                />
              </div> */}

              {/* Button - Dipisahkan dengan flex gap */}
              {/* <Button
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90 text-white font-medium
                 whitespace-nowrap px-6 py-3.5 transition-colors duration-200"
              >
                Cari
              </Button> */}
            </div>
          </div>

          {/* <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {["Batik", "Tari Tradisional", "Kuliner", "Wayang"].map((tag) => (
              <button
                key={tag}
                className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 hover:bg-background-light-gold hover:text-primary transition-colors border border-gray-200"
              >
                {tag}
              </button>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}
