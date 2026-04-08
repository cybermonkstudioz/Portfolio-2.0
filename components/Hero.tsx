'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowRight, Mail, ChevronDown } from 'lucide-react'
import Image from 'next/image'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' } },
})

export default function Hero() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Gradient orbs */}
      <div className="orb w-[600px] h-[600px] bg-accent-violet/20 top-[-200px] left-[-200px]" />
      <div className="orb w-[400px] h-[400px] bg-accent-sky/15 bottom-[-100px] right-[-100px]" />
      <div className="orb w-[300px] h-[300px] bg-accent-violet/10 top-[40%] right-[20%]" />

      <div className="max-w-7xl mx-auto px-6 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.div variants={fadeUp(0.1)}>
            <span className="section-label">// HELLO WORLD</span>
          </motion.div>

          <motion.div variants={fadeUp(0.2)}>
            <p className="text-text-muted text-lg font-medium mb-2">Hi, I&apos;m</p>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-tight">
              <span className="gradient-text">Srihariharan G</span>
            </h1>
          </motion.div>

          <motion.div variants={fadeUp(0.35)} className="flex items-center gap-2 text-xl text-text-primary font-medium min-h-[2rem]">
            <span className="text-accent-violet">›</span>
            <TypeAnimation
              sequence={[
                'Software Developer', 2000,
                'UI/UX Designer', 2000,
                'Embedded Systems & IoT Builder', 2500,
                'Hackathon Innovator', 2000,
                'Certified Sketch Artist', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-text-primary"
            />
          </motion.div>

          <motion.p variants={fadeUp(0.45)} className="text-text-muted text-base leading-relaxed max-w-lg">
            ECE student at KCG College of Technology, building scalable apps, intuitive designs,
            and smart embedded systems — end to end.
          </motion.p>

          <motion.p
            variants={fadeUp(0.5)}
            className="font-mono text-sm text-accent-violet/80 italic"
          >
            &ldquo;Bridging Software, Design &amp; Hardware — Building What Others Only Imagine.&rdquo;
          </motion.p>

          <motion.div variants={fadeUp(0.55)} className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() => scrollToSection('#projects')}
              className="btn-primary flex items-center gap-2"
            >
              <span>View My Work</span>
              <ArrowRight size={16} className="relative z-10" />
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-ghost flex items-center gap-2"
            >
              <Mail size={16} />
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT — Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="flex justify-center items-center relative"
        >
          {/* Pulse rings */}
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-accent-violet/30 animate-pulse-ring" />
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-accent-violet/20 animate-pulse-ring [animation-delay:0.7s]" />

          {/* Rotating gradient border */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72">
            <div className="absolute inset-0 rounded-full bg-gradient-violet-cyan p-[3px] animate-float">
              <div className="w-full h-full rounded-full bg-bg overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Srihariharan G"
                  fill
                  className="object-cover object-top rounded-full"
                  priority
                  onError={(e) => {
                    // Fallback: show initials avatar
                    const parent = (e.target as HTMLImageElement).parentElement
                    if (parent) {
                      parent.innerHTML = `<div class="w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br from-accent-violet/30 to-accent-sky/30 text-5xl font-display font-bold gradient-text">SGK</div>`
                    }
                  }}
                />
              </div>
            </div>

            {/* Glow behind image */}
            <div className="absolute inset-4 rounded-full bg-accent-violet/20 blur-2xl -z-10" />

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: 'spring', stiffness: 200 }}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-1.5 flex items-center gap-2 border border-white/10 shadow-glow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono text-text-muted">Available for opportunities</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted hover:text-accent-violet transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <ChevronDown size={20} className="animate-scroll-down" />
      </motion.button>
    </section>
  )
}
