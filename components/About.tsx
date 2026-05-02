'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, MapPin, Target, Palette, Trophy, Zap, Monitor, Cpu } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
})

const slideLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
})

const profileItems = [
  { icon: GraduationCap, label: 'KCG College of Technology', color: 'text-accent-violet' },
  { icon: MapPin, label: 'Chennai, Tamil Nadu', color: 'text-accent-sky' },
  { icon: Target, label: 'Software Developer + Hardware Engineer', color: 'text-accent-violet' },
  { icon: Palette, label: 'Certified Sketch Artist', color: 'text-accent-sky' },
  { icon: Trophy, label: 'Active Hackathon Participant', color: 'text-accent-violet' },
  { icon: Zap, label: 'Status: Building & Innovating', color: 'text-green-400' },
]

const interests = [
  { icon: Monitor, label: 'Software Development & Web Technologies', color: 'from-accent-violet/20 to-accent-violet/5', border: 'border-accent-violet/30' },
  { icon: Palette, label: 'UI/UX Design — Figma & design tools', color: 'from-accent-sky/20 to-accent-sky/5', border: 'border-accent-sky/30' },
  { icon: Cpu, label: 'Embedded Systems & IoT — ESP32, Arduino, STM32, Raspberry Pi', color: 'from-accent-violet/20 to-accent-sky/5', border: 'border-white/10' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="relative py-28 overflow-hidden">
      {/* Subtle background orb */}
      <div className="orb w-[400px] h-[400px] bg-accent-violet/8 top-1/2 -translate-y-1/2 -left-48" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT */}
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} className="flex flex-col gap-8">
          <motion.div variants={slideLeft(0)}>
            <span className="section-label">// ABOUT ME</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-text-primary leading-tight mt-2">
              Passionate about turning{' '}
              <span className="gradient-text">ideas into impactful</span>{' '}
              digital products
            </h2>
          </motion.div>

          <motion.div variants={slideLeft(0.1)} className="flex flex-col gap-5 text-text-muted leading-relaxed text-base">
            <p>
              I&apos;m an Electronics and Communication Engineering student at KCG College of
              Technology, with a deep passion for software development and building user-centric
              digital solutions that combine technology, design, and innovation.
            </p>
            <p>
              My primary focus is developing scalable applications — turning ideas into real-world
              products through clean, efficient code. I also bring strong hardware knowledge,
              enabling me to build end-to-end solutions bridging software and embedded technologies.
            </p>
            <p>
              Beyond tech, I&apos;m a <span className="text-accent-violet font-medium">Certified Sketch Artist</span>,
              which fuels my creativity and brings a unique design perspective to everything I build.
            </p>
          </motion.div>

          {/* Area of Interest Pills */}
          <motion.div variants={fadeUp(0.2)} className="flex flex-col gap-3">
            <p className="text-sm font-mono text-text-muted tracking-wide">// AREAS OF INTEREST</p>
            {interests.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r ${item.color} border ${item.border} card-hover`}
              >
                <item.icon size={18} className="text-accent-violet flex-shrink-0" />
                <span className="text-sm text-text-primary font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Glassmorphism Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="lg:sticky lg:top-28"
        >
          <div className="glass rounded-2xl p-8 border border-white/10 shadow-card relative overflow-hidden">
            {/* Card glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-violet-cyan opacity-60" />
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-accent-violet/10 blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-text-muted tracking-widest uppercase">Profile Snapshot</span>
              </div>

              <div className="flex flex-col gap-5">
                {profileItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-violet/10 transition-colors border border-white/5">
                      <item.icon size={18} className={item.color} />
                    </div>
                    <span className="text-text-primary text-sm font-medium">{item.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex items-center justify-between text-xs font-mono text-text-muted">
                  <span>sgkhari2006@gmail.com</span>
                  <span className="text-accent-violet">ECE Student</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
