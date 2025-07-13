"use client"

import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const filterOptions = {
  category: [
    "Seni Rupa",
    "Seni Pertunjukan",
    "Seni Tekstil",
    "Arsitektur Tradisional",
    "Kuliner Tradisional",
    "Upacara Adat",
    "Sastra & Cerita",
    "Festival & Perayaan",
  ],
  region: [
    "Jawa",
    "Sumatera",
    "Kalimantan",
    "Sulawesi",
    "Bali",
    "Nusa Tenggara",
    "Maluku",
    "Papua",
    "Jakarta",
    "Yogyakarta",
  ],
  period: ["Prasejarah", "Hindu-Buddha", "Islam Awal", "Kolonial", "Kemerdekaan", "Modern"],
  difficulty: ["Mudah", "Menengah", "Tinggi", "Sangat Tinggi"],
}

interface SearchFiltersProps {
  filters: any
  onFiltersChange: (filters: any) => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function SearchFilters({ filters, onFiltersChange, searchQuery, onSearchChange }: SearchFiltersProps) {
  const handleFilterChange = (category: string, value: string, checked: boolean) => {
    const newFilters = { ...filters }
    if (checked) {
      newFilters[category] = [...newFilters[category], value]
    } else {
      newFilters[category] = newFilters[category].filter((item: string) => item !== value)
    }
    onFiltersChange(newFilters)
  }

  const clearAllFilters = () => {
    onFiltersChange({
      category: [],
      region: [],
      period: [],
      difficulty: [],
    })
    onSearchChange("")
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-lg flex items-center">
          <Filter className="w-5 h-5 mr-2" />
          Filter Pencarian
        </h3>
        <Button variant="ghost" size="sm" onClick={clearAllFilters}>
          Reset
        </Button>
      </div>

      <div className="mb-6">
        <Label htmlFor="search" className="text-sm font-medium mb-2 block">
          Pencarian
        </Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            id="search"
            type="text"
            placeholder="Cari budaya..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <Accordion type="multiple" defaultValue={["category", "region"]} className="w-full">
        {Object.entries(filterOptions).map(([key, options]) => (
          <AccordionItem key={key} value={key}>
            <AccordionTrigger className="text-sm font-medium">
              {key === "category" && "Jenis Seni"}
              {key === "region" && "Daerah Asal"}
              {key === "period" && "Periode Waktu"}
              {key === "difficulty" && "Tingkat Kesulitan"}
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                {options.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox
                      id={`${key}-${option}`}
                      checked={filters[key].includes(option)}
                      onCheckedChange={(checked) => handleFilterChange(key, option, checked as boolean)}
                    />
                    <Label htmlFor={`${key}-${option}`} className="text-sm font-normal cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-6 pt-6 border-t">
        <h4 className="font-medium mb-3">Filter Cepat</h4>
        <div className="flex flex-wrap gap-2">
          {["Jawa", "Sumatera", "Bali", "Kalimantan"].map((region) => (
            <Button
              key={region}
              variant={filters.region.includes(region) ? "default" : "outline"}
              size="sm"
              onClick={() => handleFilterChange("region", region, !filters.region.includes(region))}
              className="text-xs"
            >
              {region}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
