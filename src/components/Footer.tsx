import { Linkedin, Mail, Phone } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo-nature.png" alt="Nature d'Intérieur" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Apporter la nature et la durabilité dans votre espace de travail avec des solutions élégantes et
              éco-conçues.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#product" className="hover:text-[#6B8E23] transition-colors">
                  Produits
                </a>
              </li>
              <li>
                <a href="#rse" className="hover:text-[#6B8E23] transition-colors">
                  Démarche RSE
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#6B8E23] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://www.naturedinterieur.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#6B8E23] transition-colors"
                >
                  Site Nature d'Intérieur
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Restez Connecté</h3>
            <div className="space-y-3">
              <a
                href="mailto:guillaume@naturedinterieur.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-[#6B8E23] transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm">guillaume@naturedinterieur.com</span>
              </a>
              <a
                href="tel:0688794637"
                className="flex items-center space-x-2 text-gray-400 hover:text-[#6B8E23] transition-colors"
              >
                <Phone size={18} />
                <span className="text-sm">06 88 79 46 37</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://www.linkedin.com/company/naturedinterieur/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#6B8E23] transition-colors"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Nature d'Intérieur. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-xs mt-2">Conçu dans le respect de la nature et de la durabilité</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
