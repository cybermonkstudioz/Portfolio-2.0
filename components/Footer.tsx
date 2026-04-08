'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const socials = [
  { icon: Github, href: 'https://github.com/srihariharan-g', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/srihariharan-g-4bb2132bb/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:sgkhari2006@gmail.com', label: 'Email' },
]

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      <div className="orb w-[400px] h-[200px] bg-accent-violet/5 bottom-0 left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 py-14 relative z-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-2xl font-bold">
              <span className="text-accent-violet">{'<'}</span>
              <span className="text-text-primary">SGK</span>
              <span className="text-accent-violet">{' />'}</span>
            </span>
            <p className="text-text-muted text-sm max-w-xs leading-relaxed">
              Bridging Software, Design &amp; Hardware — Building What Others Only Imagine.
            </p>
          </div>

          {/* Nav links */}
          <nav>
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-text-muted hover:text-accent-violet transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
            <span>© 2026 Srihariharan G.</span>
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-xl glass border border-white/8 flex items-center justify-center text-text-muted hover:text-accent-violet hover:border-accent-violet/30 transition-all duration-200"
              >
                <s.icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
