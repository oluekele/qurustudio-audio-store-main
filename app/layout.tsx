import NavBar from '@/components/nav/NavBar'
import Footer from '@/components/footer/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quru Studio',
  description: 'Quru Studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <div className='flex flex-col w-[100%] min-h-screen bg-[#0d0d0d] text-slate-50'>
          <NavBar />
          <main className='flex-grow'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
