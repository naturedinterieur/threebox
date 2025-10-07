"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Layers, Building2 } from "lucide-react"

const ProductSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const products = [
     {
      name: "1 Flux",
      compartments: 1,
      description: "Simple et compact pour les espaces individuels",
      details:
        "Idéal pour les postes de travail personnels ou les petites zones. Un compartiment unique pour un tri de proximité facile et esthétique.",
      icon: Layers,
      gradient: "from-[#9ACD32] to-[#6B8E23]",
      image: "/1 box.png", // <-- ajoute cette image dans /public
    },
    {
      name: "3 Flux",
      compartments: 3,
      description: "Idéal pour les petits bureaux et espaces de travail",
      details:
        "Design compact avec trois compartiments séparés pour un tri efficace des déchets. Parfait pour les équipes de 5 à 15 personnes.",
      icon: Layers,
      gradient: "from-[#6B8E23] to-[#5a7a1e]",
      image: "/threebox-product.png",
    },
    {
      name: "6 Flux",
      compartments: 6,
      description: "Conçu pour les grands espaces et équipes",
      details:
        "Capacité augmentée avec six compartiments pour un recyclage complet. Idéal pour les espaces ouverts et les équipes de plus de 15 personnes.",
      icon: Building2,
      gradient: "from-[#8B4513] to-[#6d3610]",
      image: "/6 box.png",
    },
  ]

  return (
    <section id="product" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-4">Notre Collection</h2>
          <p className="text-xl text-[#555555] max-w-2xl mx-auto">
            Choisissez le modèle threebox parfait pour votre espace de travail
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-[#F5F5DC] to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                <div className="h-64 bg-white flex items-center justify-center relative overflow-hidden flex-shrink-0">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-contain transition-transform duration-300 ${
                    product.name === "6 Flux" ? "scale-110" : "scale-100"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute top-4 right-4 bg-[#6B8E23] text-white px-4 py-2 rounded-full">
                    <span className="font-bold text-sm">{product.compartments} Flux</span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-[#333333] mb-3">threebox {product.name}</h3>
                  <p className="text-[#6B8E23] font-semibold mb-4">{product.description}</p>
                  <p className="text-[#555555] mb-6 leading-relaxed flex-1">{product.details}</p>
                  <button
                    onClick={scrollToContact}
                    className="w-full bg-[#6B8E23] text-white py-3 rounded-full font-medium hover:bg-[#5a7a1e] transition-colors"
                  >
                    Demander un Devis
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductSection
