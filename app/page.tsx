import { SearchHero } from "@/components/search-hero" // Pastikan ini diimpor kembali
import { CultureList } from "@/components/culture-list"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <SearchHero /> {/* SearchHero dikembalikan ke sini */}
      <CultureList />
    </main>
  )
}
