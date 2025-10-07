"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img src="/logo-nature.png" alt="Nature d'Intérieur" className="h-16 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("product")}
              className="text-[#333333] hover:text-[#6B8E23] transition-colors font-medium"
            >
              Produit
            </button>
            <button
              onClick={() => scrollToSection("rse")}
              className="text-[#333333] hover:text-[#6B8E23] transition-colors font-medium"
            >
              Démarche RSE
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#6B8E23] text-white px-6 py-2 rounded-full hover:bg-[#5a7a1e] transition-colors"
            >
              Contact
            </button>
          </nav>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-[#333333]">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("product")}
                className="text-[#333333] hover:text-[#6B8E23] transition-colors font-medium text-left"
              >
                Produit
              </button>
              <button
                onClick={() => scrollToSection("rse")}
                className="text-[#333333] hover:text-[#6B8E23] transition-colors font-medium text-left"
              >
                Démarche RSE
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#6B8E23] text-white px-6 py-2 rounded-full hover:bg-[#5a7a1e] transition-colors text-center"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
