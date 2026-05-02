'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Star, Cpu, Globe, Palette, BookOpen } from 'lucide-react'

const achievements = [
  {
    icon: Trophy,
    title: 'Sakthi Hackathon 2025',
    subtitle: 'IoT Solution for Smart Industries',
    description: 'Developed an end-to-end IoT solution for smart industrial monitoring and automation at Sakthi Hackathon 2025.',
    color: 'from-yellow-500/15 to-transparent',
    border: 'border-yellow-500/30',
    iconColor: 'text-yellow-400',
    iconBg: 'bg-yellow-500/10',
    badge: 'Hackathon',
  },
  {
    icon: Cpu,
    title: 'Innothon 2025',
    subtitle: 'Embedded System Prototype for Environmental Monitoring',
    description: 'Built an embedded system prototype for real-time environmental monitoring and analytics at Innothon 2025.',
    color: 'from-accent-violet/15 to-transparent',
    border: 'border-accent-violet/30',
    iconColor: 'text-accent-violet',
    iconBg: 'bg-accent-violet/10',
    badge: 'Innovation',
  },
  {
    icon: Globe,
    title: 'Smart City Challenge 2025',
    subtitle: 'IoT-Based Smart Traffic System',
    description: 'Designed and presented an IoT-powered smart traffic management system optimizing urban traffic flow.',
    color: 'from-accent-sky/15 to-transparent',
    border: 'border-accent-sky/30',
    iconColor: 'text-accent-sky',
    iconBg: 'bg-accent-sky/10',
    badge: 'Challenge',
  },
  {
    icon: Palette,
    title: 'Grade 7 Certified Sketch Artist',
    subtitle: 'Fine Arts Certification',
    description: 'Achieved Grade 7 certification in sketching, bringing a unique creative perspective that elevates UI/UX design work.',
    color: 'from-pink-500/15 to-transparent',
    border: 'border-pink-500/30',
    iconColor: 'text-pink-400',
    iconBg: 'bg-pink-500/10',
    badge: 'Arts',
  },
  {
    icon: Star,
    title: 'CFER Level B1',
    subtitle: 'Cambridge English Certification',
    description: 'Internationally recognised Cambridge English CFER Level B1 linguistic skills certification.',
    color: 'from-blue-500/15 to-transparent',
    border: 'border-blue-500/30',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    badge: 'Language',
  },
  {
    icon: BookOpen,
    title: 'Elite Achievement — NPTEL',
    subtitle: "Introduction to IoT",
    description: "Achieved 'Elite' distinction in NPTEL's Introduction to IoT course, recognising top academic performance.",
    color: 'from-green-500/15 to-transparent',
    border: 'border-green-500/30',
    iconColor: 'text-green-400',
    iconBg: 'bg-green-500/10',
    badge: 'Elite',
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" ref={ref} className="relative py-28 overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-accent-violet/8 -bottom-24 -left-32" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">// HONORS &amp; ACHIEVEMENTS</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-text-primary mt-2">
            Milestones &amp;{' '}
            <span className="gradient-text">Recognition</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group glass rounded-2xl p-7 border ${item.border} bg-gradient-to-br ${item.color} card-hover relative overflow-hidden`}
            >
              {/* Background number watermark */}
              <span className="absolute bottom-3 right-4 text-5xl font-display font-extrabold text-white/10 select-none pointer-events-none">
                {i + 1 < 10 ? `0${i + 1}` : i + 1}
              </span>

              <div className="relative z-10 flex flex-col gap-4">
                {/* Icon + Badge */}
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center border border-white/10`}>
                    <item.icon size={22} className={item.iconColor} />
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-mono border ${item.border} ${item.iconColor} bg-transparent`}>
                    {item.badge}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-display font-bold text-lg text-text-primary group-hover:text-white transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className={`text-sm font-medium mt-1 ${item.iconColor}`}>{item.subtitle}</p>
                </div>

                <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
