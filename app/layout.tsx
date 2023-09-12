import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'


const raleway = localFont({
  src: [
    {
      path: '../public/fonts/Raleway-VariableFont_wght.ttf',
    }
  ],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'To Do App',
  description: 'Fantastic to do app!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className + ' bg-zinc-50 '}>{children}</body>
    </html>
  )
}
