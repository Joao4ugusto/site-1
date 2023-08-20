import './globals.css'
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
    <html lang="" className={space.className}>
      <body className=" bg-color-black text-white">{children}
      </body>

      
    </html>
  )
}
