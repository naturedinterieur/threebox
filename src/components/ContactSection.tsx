"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, Send } from "lucide-react"

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-4">Intéressé par threebox ?</h2>
          <p className="text-xl text-[#555555] max-w-2xl mx-auto">
            Contactez-nous pour en savoir plus sur nos produits
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-[#6B8E23] to-[#5a7a1e] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Informations de Contact</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold mb-4">Guillaume Taillandier</p>

                  <a
                    href="mailto:guillaume@naturedinterieur.com"
                    className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors mb-3"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <span>guillaume@naturedinterieur.com</span>
                  </a>

                  <a
                    href="tel:0688794637"
                    className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <span>06 88 79 46 37</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F5DC] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#333333] mb-4">Pourquoi Choisir threebox ?</h3>
              <ul className="space-y-3 text-[#555555]">
                <li className="flex items-start space-x-2">
                  <span className="text-[#6B8E23] font-bold">•</span>
                  <span>Matériaux écologiques et design durable</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#6B8E23] font-bold">•</span>
                  <span>Esthétique élégante qui valorise tout espace de travail</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#6B8E23] font-bold">•</span>
                  <span>Tri efficace des déchets pour un meilleur recyclage</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#6B8E23] font-bold">•</span>
                  <span>Solutions personnalisables pour toutes tailles d'équipe</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-[#333333] mb-6">Envoyez-nous un Message</h3>

              {submitted ? (
                <div className="bg-[#6B8E23]/10 border border-[#6B8E23] rounded-lg p-6 text-center">
                  <p className="text-[#6B8E23] font-semibold">Merci ! Nous vous recontacterons bientôt.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#333333] mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#6B8E23] focus:ring-2 focus:ring-[#6B8E23]/20 outline-none transition-all"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#6B8E23] focus:ring-2 focus:ring-[#6B8E23]/20 outline-none transition-all"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>

                  <div className="flex-1">
                    <label htmlFor="message" className="block text-sm font-medium text-[#333333] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full h-full min-h-[120px] px-4 py-3 rounded-lg border border-gray-300 focus:border-[#6B8E23] focus:ring-2 focus:ring-[#6B8E23]/20 outline-none transition-all resize-none"
                      placeholder="Parlez-nous de votre projet..."
                    />
                  </div>
                   
                  {/* Ajout d’un simple espace au-dessus du bouton */}
                  <button
                    type="submit"
                    className="w-full bg-[#6B8E23] text-white py-4 rounded-full font-medium hover:bg-[#5a7a1e] transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 mt-4"
                  >
                    <span>Envoyer le Message</span>
                    <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
