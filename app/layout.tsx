import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MineAI - Intelligent Mining Solutions',
  description: 'Revolutionary AI-powered mining operations platform for the future of resource extraction',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
