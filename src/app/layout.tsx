import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/molecules/Navigation'
import Footer from '@/components/organisms/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NASA - Elite Full-Stack Developer & Cybersecurity Specialist',
  description: 'Allotey Samuel Nii Adotei (NASA) - Elite Full-Stack Developer, Cybersecurity Specialist, and Creative Technologist. Specializing in ethical hacking, penetration testing, and modern web development.',
  keywords: ['cybersecurity', 'ethical hacking', 'full-stack developer', 'penetration testing', 'Kali Linux', 'FastAPI', 'React', 'Next.js'],
  authors: [{ name: 'Allotey Samuel Nii Adotei' }],
  creator: 'NASA',
  publisher: 'NASA Portfolio',
  robots: 'index, follow',
  openGraph: {
    title: 'NASA - Elite Full-Stack Developer & Cybersecurity Specialist',
    description: 'Allotey Samuel Nii Adotei (NASA) - Elite Full-Stack Developer, Cybersecurity Specialist, and Creative Technologist.',
    url: 'https://nasa-cyber.dev',
    siteName: 'NASA Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NASA Portfolio - Cybersecurity Specialist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NASA - Elite Full-Stack Developer & Cybersecurity Specialist',
    description: 'Allotey Samuel Nii Adotei (NASA) - Elite Full-Stack Developer, Cybersecurity Specialist, and Creative Technologist.',
    images: ['/images/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0B1426',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#0B1426" />
        <meta name="theme-color" content="#0B1426" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}