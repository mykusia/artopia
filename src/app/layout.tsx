import './globals.css'
import { Inter } from 'next/font/google'
import { Barlow } from 'next/font/google'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  weight: ["400", "700"],
  subsets: ['latin'] 
})

const barlow = Barlow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow"
})

const pjs = Plus_Jakarta_Sans({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
})

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${barlow.className} ${inter.className} ${pjs.className} flex flex-col justify-between h-full relative`}>
        <Header />
        <main className='flex-auto '>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
