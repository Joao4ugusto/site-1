import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import Image from 'next/image'
import  fundo  from "../../public/fundo.svg"
import IconMenu from "@/icons/menu";
import IconLogo from "@/icons/logo";
import IconHome from "@/icons/home";
import IconNotas from "@/icons/notas";
import IconProject from "@/icons/project";
import IconGit from "@/icons/github";
import IconTwitter from "@/icons/twitter";
import IconSun from "@/icons/sun";
import IconMoon from "@/icons/moon";


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
      <Image src={fundo} alt='' className=' absolute z-[-1] top-0  w-screen h-screen left-0 object-cover' />
      <body className=" bg-color-black text-black">{children}

    <header className=" top-0 py-6 px-6 md:px-36 sy:px-32 lg:px-36 lg:py-4 xl:px-[385px] xl:py-4 2xl:px-[435px] 2xl:py-4 fixed w-full bg-color-black/95">
    <Image src={fundo} alt='' layout="fill" objectFit="cover" className=' absolute z-[-1] top-0  w-screen h-screen object-cover' />
    <div className=" flex justify-between items-center">
    <div className=" sy:hidden" >
      <IconMenu />
    </div>
    <div className="  gap-1 md:hidden sy:flex">
    <div className=" hidden md:flex sy:p-3 sy:hover:bg-gradient-to-r from-green-200/20 via-green-300/20 to-blue-500/20 hover:rounded ">
      <div className="transform-gpu">
        <IconHome />
      </div>
    </div>
    <div className=" hidden md:flex sy:p-3 sy:hover:bg-gradient-to-r from-green-200/20 via-green-300/20 to-blue-500/20 hover:rounded ">
      <div className="transform-gpu">
        <IconNotas />
      </div>
    </div>
    <div className=" hidden md:flex sy:p-3 sy:hover:bg-gradient-to-r from-green-200/20 via-green-300/20 to-blue-500/20 hover:rounded">
      <div className="transform-gpu">
        <IconProject />
      </div>
    </div>
    <p className=" hidden md:flex p-2 text-color-font-secundaria">|</p>
    <div className=" hidden md:flex sy:p-3 sy:hover:bg-gradient-to-r from-green-200/20 via-green-300/20 to-blue-500/20 hover:rounded ">
      <div className="transform-gpu">
        <IconGit />
      </div>
    </div>
    <div className=" hidden md:flex sy:p-3 sy:hover:bg-gradient-to-r from-green-200/20 via-green-300/20 to-blue-500/20 hover:rounded">
      <div className="transform-gpu">
        <IconTwitter />
      </div>
    </div>
    <p className=" hidden md:flex p-2 text-color-font-secundaria">|</p>
    <div className=" flex sy:bg-white/5 rounded">
    <div className=" hidden md:flex sy:p-3 sy:hover:bg-gradient-to-r from-green-200/20 via-green-300/20 to-blue-500/20 hover:rounded ">
      <div className="transform-gpu">
        <IconSun />
      </div>
    </div>
    <div className=" hidden md:flex sy:p-3 sy:hover:bg-gradient-to-r from-green-200/20 via-green-300/20 to-blue-500/20 hover:rounded ">
      <div className="transform-gpu">
        <IconMoon />
      </div>
    </div>
    </div>
    </div>
    <div className=" sy:p-3 sy:hover:bg-gradient-to-r from-green-200/20 via-green-300/20 to-blue-500/20 hover:rounded inline-block">
    <div className="transform-gpu ">
    <IconLogo />
    </div>
   </div>
    </div>
    </header>      
      </body>
    </html>
  )
}
