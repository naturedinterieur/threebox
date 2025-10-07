"use client"

import { motion } from "framer-motion"
import { ArrowDown, Leaf, Recycle, TreePine } from "lucide-react"
import { useEffect, useState } from "react"

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  // 🌿 Génère les feuilles uniquement côté client (évite l’erreur SSR)
  const [leaves, setLeaves] = useState<
    { left: string; size: number; rotation: number; duration: number; delay: number }[]
  >([])

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      size: Math.random() * 20 + 10,
      rotation: Math.random() * 360,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 5,
    }))
    setLeaves(generated)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8f9f5] via-white to-[#F5F5DC] will-change-transform">
      {/* 🌿 Background animé */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-10 w-96 h-96 bg-[#6B8E23] rounded-full blur-xl"
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, -45, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#8B4513] rounded-full blur-xl"
        />
      </div>

      {/* 🌱 Contenu principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte gauche */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-[#6B8E23]/10 px-4 py-2 rounded-full">
              <Leaf className="text-[#6B8E23]" size={20} />
              <span className="text-[#6B8E23] font-semibold text-sm">Éco-Conçu & Durable</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-tight">
              <div className="flex flex-col items-start gap-0.5">
                <img
                  src="/threebox-logo.png"
                  alt="threebox"
                  className="h-40 sm:h-48 lg:h-64 w-auto object-contain mx-auto sm:mx-0 relative sm:-left-6"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <span className="font-bold text-[#6B8E23] text-4xl sm:text-5xl lg:text-6xl">La nature</span>
                <span className="font-bold text-[#8B4513] text-4xl sm:text-5xl lg:text-6xl">au bureau</span>
              </div>
            </h1>

            <p className="text-xl text-[#555555] leading-relaxed max-w-xl">
              Transformez votre espace de travail avec nos poubelles végétalisées élégantes. Un design unique qui allie
              tri sélectif et décoration naturelle.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("product")}
                className="bg-[#6B8E23] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#5a7a1e] transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-2"
              >
                <span>Découvrir threebox</span>
                <ArrowDown size={20} />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-[#6B8E23] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all border-2 border-[#6B8E23] transform hover:scale-105 shadow-lg"
              >
                Nous Contacter
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-6">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-[#6B8E23]/10 rounded-full flex items-center justify-center">
                  <Recycle className="text-[#6B8E23]" size={24} />
                </div>
                <div>
                  <p className="font-bold text-[#333333]">Tri Efficace</p>
                  <p className="text-sm text-[#555555]">1,3 ou 6 flux</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-[#8B4513]/10 rounded-full flex items-center justify-center">
                  <TreePine className="text-[#8B4513]" size={24} />
                </div>
                <div>
                  <p className="font-bold text-[#333333]">100% Naturel</p>
                  <p className="text-sm text-[#555555]">Plantes incluses</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image droite */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-30"
            >
              <img
                src="/threebox-product.png"
                alt="ThreeBox - Poubelle végétalisée"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-br from-[#6B8E23] to-[#8B4513] rounded-full blur-xl -z-10"
            />

            {/* Cercles décoratifs */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute w-96 h-96 bg-[#6B8E23]/20 rounded-full blur-xl -top-10 -left-10"
              />
              <motion.div
                animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute w-[500px] h-[500px] bg-[#8B4513]/15 rounded-full blur-xl bottom-0 right-0"
              />
            </div>

            {/* Cercles décoratifs nets */}
            <div className="absolute inset-0 pointer-events-none z-10">
              {/* Cercle en bas à gauche */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-16 left-10 w-48 h-48 rounded-full border-[6px] border-[#6B8E23]/50 shadow-lg shadow-[#6B8E23]/20"
              />
              {/* Cercle en haut à droite */}
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 right-8 w-60 h-60 rounded-full border-[6px] border-[#8B4513]/40 shadow-lg shadow-[#8B4513]/20"
              />
            </div>

            {/* Pastilles flottantes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute inset-0 z-20 pointer-events-none"
            >
              {/* Tri Efficace */}
              <div className="absolute top-8 left-6 bg-white/90 backdrop-blur-sm shadow-lg rounded-xl px-4 py-2 flex items-center space-x-2">
                <div className="bg-[#6B8E23]/10 p-2 rounded-full">
                  <Recycle className="text-[#6B8E23]" size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Tri Efficace</p>
                  <p className="text-xs text-gray-500">1, 3 ou 6 flux</p>
                </div>
              </div>

              {/* Design Unique */}
              <div className="absolute bottom-10 left-0 bg-white/90 backdrop-blur-sm shadow-lg rounded-xl px-4 py-2 flex items-center space-x-2">
                <div className="bg-[#6B8E23]/10 p-2 rounded-full">
                  <Leaf className="text-[#6B8E23]" size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Design Unique</p>
                  <p className="text-xs text-gray-500">Végétalisé</p>
                </div>
              </div>

              {/* Écoresponsable */}
              <div className="absolute top-1/3 right-0 bg-white/90 backdrop-blur-sm shadow-lg rounded-xl px-4 py-2 flex items-center space-x-2">
                <div className="bg-[#6B8E23]/10 p-2 rounded-full">
                  <TreePine className="text-[#6B8E23]" size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Écoresponsable</p>
                  <p className="text-xs text-gray-500">Matériaux durables</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bouton scroll */}
      <button
        onClick={() => scrollToSection("product")}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-[#6B8E23] text-sm font-medium">Découvrez nos modèles</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown className="text-[#6B8E23]" size={32} />
          </motion.div>
        </motion.div>
      </button>

      {/* Feuilles animées (client-only) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {leaves.map((leaf, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: [0, 0.3, 0], y: ["0vh", "100vh"] }}
            transition={{
              duration: leaf.duration,
              repeat: Infinity,
              delay: leaf.delay,
              ease: "linear",
            }}
            className="absolute will-change-transform"
            style={{ left: leaf.left, top: "-10%" }}
          >
            <Leaf
              className="text-[#6B8E23]"
              size={leaf.size}
              style={{ transform: `rotate(${leaf.rotation}deg)` }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Hero
