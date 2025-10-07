"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Smile, Leaf, Zap } from 'lucide-react';

const RSESection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const commitments = [
    {
      icon: Smile,
      title: 'Qualité de Vie au Travail',
      subtitle: 'Excellence QVT',
      points: [
        {
          label: 'Chez nous',
          description: 'Un espace de travail lumineux, vert et accueillant pour notre équipe'
        },
        {
          label: 'Chez vous',
          description: 'Aménagements végétaux sur mesure améliorant le bien-être au travail'
        }
      ],
      color: '#6B8E23'
    },
    {
      icon: Leaf,
      title: 'Engagement Environnemental',
      subtitle: 'Pratiques Durables',
      points: [
        {
          label: 'Recyclage avec ELISE',
          description: 'Inclusion par l\'emploi à travers la gestion responsable des déchets'
        },
        {
          label: 'Catalogue Durable',
          description: 'Matériaux recyclés, locaux et de seconde vie'
        }
      ],
      color: '#8B4513'
    },
    {
      icon: Zap,
      title: 'Mobilité Durable',
      subtitle: 'Transport Vert',
      points: [
        {
          label: 'Flotte Électrique',
          description: 'Véhicules Renault R5 et Kangoo E-Tech 100% électriques'
        },
        {
          label: 'Zéro Émission',
          description: 'Engagés dans la réduction de notre empreinte carbone'
        }
      ],
      color: '#6B8E23'
    }
  ];

  return (
    <section id="rse" ref={ref} className="py-20 bg-gradient-to-br from-[#F5F5DC] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-4">
            Notre Démarche RSE
          </h2>
          <p className="text-xl text-[#555555] max-w-2xl mx-auto">
            Engagés pour la durabilité, le bien-être et la responsabilité environnementale
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {commitments.map((commitment, index) => (
            <motion.div
              key={commitment.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${commitment.color}20` }}
                >
                  <commitment.icon
                    size={32}
                    style={{ color: commitment.color }}
                    strokeWidth={2}
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#333333] mb-2">
                  {commitment.title}
                </h3>
                <p className="text-[#6B8E23] font-semibold mb-6">
                  {commitment.subtitle}
                </p>

                <div className="space-y-4">
                  {commitment.points.map((point, idx) => (
                    <div key={idx} className="border-l-4 border-[#6B8E23] pl-4">
                      <h4 className="font-semibold text-[#333333] mb-1">
                        {point.label}
                      </h4>
                      <p className="text-[#555555] text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RSESection;
