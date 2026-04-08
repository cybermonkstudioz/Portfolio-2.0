'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Palette, Cpu, Brain } from 'lucide-react'

// Icon imports
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiJavascript, SiTypescript, 
  SiMongodb, SiFirebase, SiSupabase, SiFigma, SiHtml5, SiCss, SiTailwindcss, 
  SiBootstrap, SiEspressif, SiArduino, SiRaspberrypi, SiCplusplus, 
  SiPython, SiTensorflow, SiOpencv, SiGit, SiGithub,
  SiMicropython, SiMqtt, SiStmicroelectronics, SiArm, SiBluetooth
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { MdOutlineDevices } from 'react-icons/md'
import { LuLayoutTemplate, LuCircuitBoard } from 'react-icons/lu'
import { VscCircuitBoard } from 'react-icons/vsc'

const skillCategories = [
  {
    icon: Globe,
    title: 'Software & Web Development',
    color: 'from-accent-violet to-violet-400',
    borderColor: 'border-accent-violet/40',
    glowColor: 'hover:shadow-glow-violet',
    skills: [
      { name: 'React.js', icon: SiReact, color: 'group-hover:text-[#61DAFB]' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'group-hover:text-white' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'group-hover:text-[#339933]' },
      { name: 'Express', icon: SiExpress, color: 'group-hover:text-white' },
      { name: 'JavaScript', icon: SiJavascript, color: 'group-hover:text-[#F7DF1E]' },
      { name: 'TypeScript', icon: SiTypescript, color: 'group-hover:text-[#3178C6]' },
      { name: 'MongoDB', icon: SiMongodb, color: 'group-hover:text-[#47A248]' },
      { name: 'Firebase', icon: SiFirebase, color: 'group-hover:text-[#FFCA28]' },
      { name: 'Supabase', icon: SiSupabase, color: 'group-hover:text-[#3ECF8E]' },
      { name: 'REST APIs', icon: TbApi, color: 'group-hover:text-accent-violet' },
    ],
  },
  {
    icon: Palette,
    title: 'UI/UX & Design',
    color: 'from-accent-sky to-cyan-400',
    borderColor: 'border-accent-sky/40',
    glowColor: 'hover:shadow-glow-sky',
    skills: [
      { name: 'Figma', icon: SiFigma, color: 'group-hover:text-[#F24E1E]' },
      { name: 'Responsive Design', icon: MdOutlineDevices, color: 'group-hover:text-accent-sky' },
      { name: 'Prototyping', icon: LuLayoutTemplate, color: 'group-hover:text-pink-400' },
      { name: 'HTML5', icon: SiHtml5, color: 'group-hover:text-[#E34F26]' },
      { name: 'CSS3', icon: SiCss, color: 'group-hover:text-[#1572B6]' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'group-hover:text-[#06B6D4]' },
      { name: 'Bootstrap', icon: SiBootstrap, color: 'group-hover:text-[#7952B3]' },
    ],
  },
  {
    icon: Cpu,
    title: 'Embedded Systems & IoT',
    color: 'from-violet-500 to-accent-violet',
    borderColor: 'border-violet-500/40',
    glowColor: 'hover:shadow-glow-violet',
    skills: [
      { name: 'ESP32 / ESP8266', icon: SiEspressif, color: 'group-hover:text-[#E7352C]' },
      { name: 'Arduino', icon: SiArduino, color: 'group-hover:text-[#00979D]' },
      { name: 'STM32', icon: SiStmicroelectronics, color: 'group-hover:text-[#03234B]' },
      { name: 'Raspberry Pi', icon: SiRaspberrypi, color: 'group-hover:text-[#A22846]' },
      { name: 'ARM Cortex-M', icon: SiArm, color: 'group-hover:text-[#0091BD]' },
      { name: 'Embedded C / C++', icon: SiCplusplus, color: 'group-hover:text-[#00599C]' },
      { name: 'MicroPython', icon: SiMicropython, color: 'group-hover:text-[#2B5B84]' },
      { name: 'MQTT', icon: SiMqtt, color: 'group-hover:text-[#3C155E]' },
      { name: 'I2C / SPI / UART', icon: LuCircuitBoard, color: 'group-hover:text-yellow-400' },
      { name: 'BLE', icon: SiBluetooth, color: 'group-hover:text-[#0082FC]' },
    ],
  },
  {
    icon: Brain,
    title: 'AI/ML & Tools',
    color: 'from-accent-sky to-accent-violet',
    borderColor: 'border-accent-sky/40',
    glowColor: 'hover:shadow-glow-sky',
    skills: [
      { name: 'Python', icon: SiPython, color: 'group-hover:text-[#3776AB]' },
      { name: 'TensorFlow', icon: SiTensorflow, color: 'group-hover:text-[#FF6F00]' },
      { name: 'OpenCV', icon: SiOpencv, color: 'group-hover:text-[#5C3EE8]' },
      { name: 'Git', icon: SiGit, color: 'group-hover:text-[#F05032]' },
      { name: 'GitHub', icon: SiGithub, color: 'group-hover:text-white' },
      { name: 'NI Multisim', icon: VscCircuitBoard, color: 'group-hover:text-green-500' },
    ],
  },
]

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.04, type: 'spring', stiffness: 300, damping: 20 },
  }),
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="relative py-28 overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-accent-sky/8 -top-20 -right-40" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">// TECHNICAL STACK</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-text-primary mt-2 max-w-2xl">
            A full-spectrum toolkit —{' '}
            <span className="gradient-text">from pixels to processors</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.12 }}
              className={`relative glass rounded-2xl p-7 border ${cat.borderColor} card-hover transition-all duration-300 ${cat.glowColor} overflow-hidden flex flex-col`}
            >
              {/* Top violet accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${cat.color}`} />

              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cat.color} p-0.5`}>
                  <div className="w-full h-full rounded-xl bg-surface flex items-center justify-center">
                    <cat.icon size={20} className="text-white" />
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg text-text-primary">{cat.title}</h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    custom={skillIdx + catIdx * 3}
                    variants={tagVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-text-muted bg-surface-2 border border-white/8 hover:border-accent-violet/40 hover:text-text-primary transition-all duration-300 cursor-default"
                  >
                    <skill.icon size={14} className={`transition-colors duration-300 ${skill.color}`} />
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
