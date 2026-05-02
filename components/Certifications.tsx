'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Calendar } from 'lucide-react'

const certifications = [
  {
    title: 'Arduino Fundamentals',
    issuer: 'GUVI HCL',
    year: '2024',
    icon: '🔧',
    color: 'from-accent-violet/20 to-transparent',
    border: 'border-accent-violet/30',
    accent: 'text-accent-violet',
  },
  {
    title: 'Prompt Engineering Basics',
    issuer: 'GUVI HCL',
    year: '2024',
    icon: '🤖',
    color: 'from-violet-500/20 to-transparent',
    border: 'border-violet-500/30',
    accent: 'text-violet-400',
  },
  {
    title: 'Linguistic Skills CFER Level B1',
    issuer: 'Cambridge English',
    year: '2024',
    icon: '🎓',
    color: 'from-accent-violet/20 to-transparent',
    border: 'border-accent-violet/30',
    accent: 'text-accent-violet',
  },
  {
    title: 'IoT Bootcamp Recognition',
    issuer: 'KCG College of Technology',
    year: '2025',
    icon: '📡',
    color: 'from-accent-sky/20 to-transparent',
    border: 'border-accent-sky/30',
    accent: 'text-accent-sky',
  },
  {
    title: 'Introduction to IoT',
    issuer: 'NPTEL',
    year: '2025',
    icon: '🌐',
    color: 'from-cyan-500/20 to-transparent',
    border: 'border-cyan-500/30',
    accent: 'text-cyan-400',
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" ref={ref} className="relative py-28 overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-accent-sky/8 top-0 right-0" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">// CERTIFICATIONS</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-text-primary mt-2">
            Credentials &amp;{' '}
            <span className="gradient-text">Learning</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-violet via-accent-sky to-transparent hidden md:block" />

          <div className="flex flex-col gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full items-center justify-center glass border border-white/10 text-xl shadow-glow-sm group-hover:border-accent-violet/40 transition-colors">
                  {cert.icon}
                </div>

                {/* Card */}
                <div className={`glass rounded-2xl p-6 border ${cert.border} bg-gradient-to-r ${cert.color} card-hover transition-all duration-300 group-hover:shadow-glow-sm`}>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex flex-col gap-1.5">
                      {/* Mobile icon */}
                      <span className="md:hidden text-2xl mb-1">{cert.icon}</span>
                      <h3 className="font-display font-bold text-lg text-text-primary group-hover:text-white transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Award size={14} className={cert.accent} />
                        <span className={`text-sm font-medium ${cert.accent}`}>{cert.issuer}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <Calendar size={14} className="text-text-muted" />
                      <span className="font-mono text-sm text-text-muted">{cert.year}</span>

                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
