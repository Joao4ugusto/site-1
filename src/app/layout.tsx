import './globals.css'
// import { Inter } from 'next/font/google'
import { Space_Grotesk } from 'next/font/google'

const space = Space_Grotesk({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'] })


export const metadata = {
  title: 'João 4ugusto',
  description: 'Meu portfólio pessoal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={space.className}>
      <body className=" bg-black md:bg-color-black text-white">{children}</body>
    </html>
  )
}
