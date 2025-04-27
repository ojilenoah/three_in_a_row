import './globals.css'
import { GeistMono } from 'geist/font/mono'

export const metadata = {
  title: 'three in a row',
  description: 'a simple tic-tac-toe game built with next.js',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistMono.className}>
      <body className="bg-black">{children}</body>
    </html>
  )
}
