import './layout.css'
import { Inter } from 'next/font/google'
import SiteHeader from '@/components/SiteHeader/SiteHeader'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Thomas William McClean | Portfolio',
  description: 'Welcome to my personal website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
