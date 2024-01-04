import './globals.css'
import { Footer, Navbar } from '@/components'

export const metadata = {
  title: 'Rent your car',
  description: 'Find the best car for you at a lower price',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
