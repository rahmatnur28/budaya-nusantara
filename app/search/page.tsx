"use client"

import { useState } from "react"
import { SearchFilters } from "@/components/search-filters"
import { SearchResults } from "@/components/search-results"

export default function SearchPage() {
  const [filters, setFilters] = useState({
    category: [],
    region: [],
    period: [],
    difficulty: [],
  })

  const [sortBy, setSortBy] = useState("popularity")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <SearchFilters
              filters={filters}
              onFiltersChange={setFilters}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </div>
          <div className="lg:col-span-3">
            <SearchResults filters={filters} sortBy={sortBy} onSortChange={setSortBy} searchQuery={searchQuery} />
          </div>
        </div>
      </div>
    </div>
  )
}
