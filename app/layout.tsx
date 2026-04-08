import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Srihariharan G — Portfolio',
  description:
    'ECE student at KCG College of Technology. Software Developer, UI/UX Designer & Embedded Systems Enthusiast. Building scalable apps, intuitive designs, and smart embedded systems.',
  keywords: [
    'Srihariharan G',
    'SGK',
    'Portfolio',
    'Software Developer',
    'UI/UX Designer',
    'Embedded Systems',
    'IoT',
    'KCG College of Technology',
    'Next.js Developer',
    'React Developer',
  ],
  authors: [{ name: 'Srihariharan G' }],
  openGraph: {
    title: 'Srihariharan G — Portfolio',
    description: 'ECE student building scalable apps, intuitive designs, and smart embedded systems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-bg text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
