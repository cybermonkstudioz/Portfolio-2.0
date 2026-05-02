'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'Hardware-Integrated Antivirus System',
    description: 'A next-gen antivirus solution combining software detection algorithms with hardware-level threat interruption, providing multi-layer endpoint security beyond traditional software-only approaches.',
    tech: ['C++', 'Embedded C', 'Python', 'Hardware Integration'],
    image: '/images/projects/antivirus.png',
    outcome: 'Multi-layer security with hardware threat interruption',
    category: 'Hardware & Security',
  },
  {
    title: 'IoT-Based Industrial Water Monitoring System',
    description: 'Real-time water quality and flow monitoring using ESP32 sensors, MQTT protocol, and a live dashboard with automated alerts for industrial environments.',
    tech: ['ESP32', 'MQTT', 'Python', 'Node.js', 'Firebase'],
    image: '/images/projects/water-monitor.png',
    outcome: 'Real-time monitoring with automated industrial alerts',
    category: 'IoT',
  },
  {
    title: 'Wi-Fi Threat Detection System',
    description: 'Network security tool that passively scans Wi-Fi environments to detect rogue access points, deauthentication attacks, and anomalous traffic using ESP32.',
    tech: ['ESP32', 'Embedded C', 'Python', 'Network Security'],
    image: '/images/projects/wifi-threat.png',
    outcome: 'Passive rogue AP & deauth attack detection',
    category: 'Cybersecurity',
  },
  {
    title: 'End Point Detection System',
    description: 'Lightweight endpoint detection and response (EDR) system that monitors process behavior, file system changes, and network activity to flag suspicious events.',
    tech: ['Python', 'C++', 'Machine Learning', 'System Programming'],
    image: '/images/projects/endpoint.png',
    outcome: 'Behavioral threat detection across endpoints',
    category: 'Security',
  },
  {
    title: 'IoT Bootcamp Project',
    description: 'Comprehensive IoT project developed during KCG College of Technology bootcamp — integrating sensor data acquisition, cloud sync, and a responsive monitoring dashboard.',
    tech: ['ESP32', 'MicroPython', 'Firebase', 'React'],
    image: '/images/projects/iot-bootcamp.png',
    outcome: 'Recognition from KCG College of Technology (2025)',
    category: 'IoT',
  },
  {
    title: 'Circuit Design & Simulation',
    description: 'Advanced circuit design and simulation project using NI Multisim, covering analog/digital filter design, amplifier circuits, and signal processing systems.',
    tech: ['NI Multisim', 'Circuit Theory', 'Signal Processing'],
    image: '/images/projects/circuit.png',
    outcome: 'Functional analog & digital circuit simulations',
    category: 'Electronics',
  },
  {
    title: 'Deepfake & Morphing Detector',
    description: 'AI-powered deepfake detection system using CNN and transfer learning to classify real vs. manipulated media with high accuracy across diverse datasets.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'CNN', 'Transfer Learning'],
    image: '/images/projects/deepfake.png',
    outcome: 'High-accuracy deepfake classification model',
    category: 'AI/ML',
  },
  {
    title: 'Dog Eye Image Segmentation',
    description: 'Computer vision model that performs pixel-level segmentation of dog eye regions for veterinary diagnostic assistance, enabling automated health indicator detection.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'U-Net', 'Image Processing'],
    image: '/images/projects/dog-eye.png',
    outcome: 'Pixel-level eye region segmentation for vet diagnostics',
    category: 'AI/ML',
  },
  {
    title: 'Skill Swap — Skill Exchange Platform',
    description: 'A peer-to-peer skill exchange platform where users can offer and request skills, schedule sessions, and build collaborative learning communities — no money required.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Socket.io'],
    image: '/images/projects/skillswap.png',
    outcome: 'Full-stack P2P skill exchange with real-time messaging',
    category: 'Full Stack',
  },
  {
    title: 'Web Interfaces for IoT Dashboards',
    description: 'Responsive, real-time web dashboards for various IoT devices — featuring live sensor data visualization, device control panels, and historical analytics.',
    tech: ['React', 'Node.js', 'WebSocket', 'Chart.js', 'MQTT'],
    image: '/images/projects/iot-dashboard.png',
    outcome: 'Real-time IoT dashboards with live sensor visualization',
    category: 'IoT & Web',
  },
]

const categoryColors: Record<string, string> = {
  'Hardware & Security': 'bg-violet-500/15 text-violet-300 border-violet-500/30',
  IoT: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
  Cybersecurity: 'bg-red-500/15 text-red-300 border-red-500/30',
  Security: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
  Electronics: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30',
  'AI/ML': 'bg-accent-sky/15 text-sky-300 border-sky-500/30',
  'Full Stack': 'bg-accent-violet/15 text-violet-300 border-accent-violet/30',
  'IoT & Web': 'bg-teal-500/15 text-teal-300 border-teal-500/30',
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" ref={ref} className="relative py-28 overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-accent-violet/8 bottom-0 left-0" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">// PROJECTS</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-text-primary mt-2">
            Things I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="text-text-muted mt-3 max-w-xl">
            From embedded hardware to full-stack apps and AI models — a cross-disciplinary project portfolio.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group glass rounded-2xl overflow-hidden border border-white/8 card-hover flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-surface-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement
                    t.style.display = 'none'
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                {/* Category badge */}
                <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-mono border ${categoryColors[project.category] || 'bg-white/10 text-text-muted border-white/10'}`}>
                  {project.category}
                </span>
                {/* Placeholder when image fails */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <span className="text-5xl font-display font-bold gradient-text">{i + 1 < 10 ? `0${i + 1}` : i + 1}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="font-display font-bold text-lg text-text-primary group-hover:text-accent-violet transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed flex-1">{project.description}</p>

                {/* Outcome */}
                <div className="flex items-start gap-2 text-xs text-accent-sky font-mono bg-accent-sky/5 border border-accent-sky/15 rounded-lg px-3 py-2">
                  <span className="mt-0.5">→</span>
                  <span>{project.outcome}</span>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tech.map((t, ti) => (
                    <span
                      key={ti}
                      className="px-2.5 py-1 rounded-full text-xs font-mono bg-accent-violet/10 text-accent-violet border border-accent-violet/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>


              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
