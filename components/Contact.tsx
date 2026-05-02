'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, Linkedin, Github, Send, CheckCircle } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    label: 'sgkhari2006@gmail.com',
    href: 'mailto:sgkhari2006@gmail.com',
    color: 'hover:border-accent-violet/50 hover:text-accent-violet hover:bg-accent-violet/5',
    iconColor: 'text-accent-violet',
  },
  {
    icon: Phone,
    label: '+91 6374316014',
    href: 'tel:+916374316014',
    color: 'hover:border-accent-sky/50 hover:text-accent-sky hover:bg-accent-sky/5',
    iconColor: 'text-accent-sky',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/srihariharan-g-4bb2132bb/',
    color: 'hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/5',
    iconColor: 'text-blue-400',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/srihariharan-g',
    color: 'hover:border-white/30 hover:text-white hover:bg-white/5',
    iconColor: 'text-white',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" ref={ref} className="relative py-28 overflow-hidden">
      <div className="orb w-[600px] h-[600px] bg-accent-violet/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">// CONTACT</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-text-primary mt-2">
            Let&apos;s Build Something{' '}
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-lg mx-auto leading-relaxed">
            Open to collaborations, projects, internships, and innovative ideas.
            Let&apos;s connect and create something remarkable.
          </p>
        </motion.div>

        {/* Contact Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
        >
          {contactLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.08, type: 'spring', stiffness: 200 }}
              className={`flex items-center gap-4 px-5 py-4 rounded-2xl glass border border-white/8 transition-all duration-300 ${link.color} group`}
            >
              <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center flex-shrink-0 border border-white/5 group-hover:scale-110 transition-transform">
                <link.icon size={18} className={link.iconColor} />
              </div>
              <span className="text-sm font-medium text-text-muted group-hover:text-inherit transition-colors">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-white/5" />
          <span className="text-text-muted text-xs font-mono">OR SEND A MESSAGE</span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass rounded-2xl p-8 border border-white/8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-violet-cyan opacity-50" />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 gap-5 text-center"
            >
              <CheckCircle size={52} className="text-green-400" />
              <div>
                <h3 className="font-display font-bold text-2xl text-text-primary">Message Sent!</h3>
                <p className="text-text-muted mt-2">Thanks for reaching out. I&apos;ll get back to you soon.</p>
              </div>
              <button
                onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', message: '' }) }}
                className="btn-ghost text-sm"
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-text-muted">Your Name</label>
                  <input
                    required
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="John Doe"
                    className="bg-surface-2 border border-white/8 rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/40 outline-none focus:border-accent-violet/50 focus:ring-1 focus:ring-accent-violet/20 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-text-muted">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="you@example.com"
                    className="bg-surface-2 border border-white/8 rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/40 outline-none focus:border-accent-violet/50 focus:ring-1 focus:ring-accent-violet/20 transition-all"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-text-muted">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Hi Srihariharan, I'd love to collaborate on..."
                  className="bg-surface-2 border border-white/8 rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/40 outline-none focus:border-accent-violet/50 focus:ring-1 focus:ring-accent-violet/20 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary flex items-center justify-center gap-2 self-end px-8"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={15} className="relative z-10" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
