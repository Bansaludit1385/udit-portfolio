import './globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat, Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Udit Bansal | Web Developer & Problem Solver',
  description: 'Personal portfolio website showcasing my skills, projects, and journey in web development, Laravel, and software engineering.',
  keywords: ['Udit Bansal', 'developer', 'web developer', 'portfolio', 'Laravel', 'PHP', 'JavaScript', 'projects'],
  authors: [{ name: 'Udit Bansal' }],
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${montserrat.variable} ${firaCode.variable}`}>
      <body className={`${inter.className} overflow-x-hidden min-h-screen font-sans bg-fixed`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}