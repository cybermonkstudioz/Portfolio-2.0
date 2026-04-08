import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0F',
        surface: '#111118',
        'surface-2': '#1A1A28',
        'accent-violet': '#6C63FF',
        'accent-sky': '#38BDF8',
        'text-primary': '#F1F1F5',
        'text-muted': '#8888A4',
        border: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-violet-cyan': 'linear-gradient(135deg, #6C63FF 0%, #38BDF8 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'scroll-down': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(8px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        shimmer: 'shimmer 3s linear infinite',
        blink: 'blink 1s step-end infinite',
        'scroll-down': 'scroll-down 1.5s ease-in-out infinite',
      },
      boxShadow: {
        'glow-violet': '0 0 32px rgba(108, 99, 255, 0.35)',
        'glow-sky': '0 0 32px rgba(56, 189, 248, 0.35)',
        'glow-sm': '0 0 16px rgba(108, 99, 255, 0.2)',
        card: '0 4px 32px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}

export default config
