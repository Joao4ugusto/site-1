import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import Image from 'next/image'
import  fundo  from "../../public/fundo.png"
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
      <Image src={fundo} alt='' className=' absolute z-[-1] top-0 opacity-20 w-screen h-screen object-cover' />
      <body className=" bg-color-black text-white">{children}

    <header className=" top-0 py-6 px-6 md:px-36 lg:px-36 lg:py-5 xl:px-[385px] xl:py-5 2xl:px-[435px] 2xl:py-5 fixed w-full bg-color-black/40 bg-opacity-100">
    <div className=" flex justify-between items-center">
    <div className=" md:hidden" >
      <IconMenu />
    </div>
    <div className=" flex gap-1">
    <div className=" hidden md:flex lg:p-3 lg:hover:bg-gradient-to-r from-green-200/10 via-green-300/10 to-blue-500/10 hover:rounded ">
      <div className="transform-gpu">
        <IconHome />
      </div>
    </div>
    <div className=" hidden md:flex lg:p-3 lg:hover:bg-gradient-to-r lg:hover:from-green-200/10 lg:hover:via-green-300/10 lg:hover:to-blue-500/10 hover:rounded ">
      <div className="transform-gpu">
        <IconNotas />
      </div>
    </div>
    <div className=" z-40 hidden md:flex lg:p-3 lg:hover:bg-gradient-to-r from-green-200/10 via-green-300/10 to-blue-500/10 hover:rounded ">
      <div className="transform-gpu">
        <IconProject />
      </div>
    </div>
    <p className=" hidden md:flex p-2 text-color-font-secundaria">|</p>
    <div className=" hidden md:flex lg:p-3 lg:hover:bg-gradient-to-r from-green-200/10 via-green-300/10 to-blue-500/10 hover:rounded ">
      <div className="transform-gpu">
        <IconGit />
      </div>
    </div>
    <div className=" hidden md:flex lg:p-3 lg:hover:bg-gradient-to-r from-green-200/10 via-green-300/10 to-blue-500/10 hover:rounded ">
      <div className="transform-gpu">
        <IconTwitter />
      </div>
    </div>
    <p className=" hidden md:flex p-2 text-color-font-secundaria">|</p>
    <div className=" flex lg:bg-white/5 rounded">
    <div className=" hidden md:flex lg:p-3 lg:hover:bg-gradient-to-r from-green-200/10 via-green-300/10 to-blue-500/10 hover:rounded ">
      <div className="transform-gpu">
        <IconSun />
      </div>
    </div>
    <div className=" hidden md:flex lg:p-3 lg:hover:bg-gradient-to-r from-green-200/10 via-green-300/10 to-blue-500/10 hover:rounded ">
      <div className="transform-gpu">
        <IconMoon />
      </div>
    </div>
    </div>
    </div>
    <div className=" lg:p-3 lg:hover:bg-gradient-to-r from-green-200/10 via-green-300/10 to-blue-500/10 hover:rounded inline-block">
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
