import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../public/trello-icon.png'
import './globals.css'
import Header from './ui/Header'

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trello-Copy',
  description: 'Created for practice purposes'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
