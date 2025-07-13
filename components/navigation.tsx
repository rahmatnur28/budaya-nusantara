"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-gray-900">Budaya Nusantara</span>
          </Link>

          {/* Desktop Navigation */}
          {/* <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Beranda
            </Link>
          </div> */}

          {/* Search */}

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-4">
              <div className="space-y-2">
                <Link
                  href="/"
                  className="block py-2 text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Beranda
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
