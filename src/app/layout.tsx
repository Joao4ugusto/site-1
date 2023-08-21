"use client"
import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import Image from 'next/image'
import  fundo  from "../../public/fundo1.svg"
import { TextAlignLeftIcon, HomeIcon, FileTextIcon, CodeIcon, GitHubLogoIcon, TwitterLogoIcon, SunIcon, MoonIcon, AvatarIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
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
 
  const [tema, setTema ] = useState(true);
  const [tema2 , setTema2 ] = useState(false);
  const on1 = () => {
    setTema(!tema);
    setTema2(false);
  };
  const on2 = () => {
    setTema2(!tema2);
    setTema(false)
  };

  useEffect(() => {
    const body = document.body;
    if (tema) {
      body.classList.add('light');
      body.classList.remove('dark');
    } else {
      body.classList.add('dark');
      body.classList.remove('light');
    }
  }, [tema]);

  return (
    <html lang="" className={space.className}>
      <body className={` ${tema ? " bg-white": "bg-color-black"}`}>{children}
      <Image src={fundo} alt='' className=' absolute z-[-1] top-0 w-screen h-screen left-0 object-cover' />
    <header className=" top-0 py-6 px-6 md:px-36 sy:px-32 lg:px-36 lg:py-4 xl:px-[385px] xl:py-4 2xl:px-[435px] 2xl:py-4 fixed w-full bg-white dark:bg-color-black/95">
    <Image src={fundo} alt='' layout="fill" objectFit="cover" className=' absolute z-[-1] top-0  w-screen h-screen object-cover' />
    <div className=" flex justify-between items-center">
    <div className=" sy:hidden" >
      <TextAlignLeftIcon width={19} className=' text-black dark:text-white' />
    </div>
    <div className="  gap-1 md:hidden sy:flex">
    <div className=" hidden sy:flex sy:p-3 dark:sy:hover:bg-gradient-to-r dark:from-green-200/20  dark:via-green-300/20  dark:to-blue-500/20  sy:hover:bg-gradient-to-r from-green-200/40 via-green-300/40 to-blue-500/40   hover:rounded ">
      <div className="transform-gpu">
        <HomeIcon width={18} className=' text-black dark:text-white' />
      </div>
    </div>
    <div className=" hidden sy:flex sy:p-3 dark:sy:hover:bg-gradient-to-r dark:from-green-200/20  dark:via-green-300/20  dark:to-blue-500/20  sy:hover:bg-gradient-to-r from-green-200/40 via-green-300/40 to-blue-500/40   hover:rounded ">
      <div className="transform-gpu">
        <FileTextIcon width={18} className=' text-black dark:text-white' />
      </div>
    </div>
    <div className=" hidden sy:flex sy:p-3 dark:sy:hover:bg-gradient-to-r dark:from-green-200/20  dark:via-green-300/20  dark:to-blue-500/20  sy:hover:bg-gradient-to-r from-green-200/40 via-green-300/40 to-blue-500/40   hover:rounded">
      <div className="transform-gpu">
        <CodeIcon width={18} className=' text-black dark:text-white' />
      </div>
    </div>
    <p className=" hidden md:flex p-2 text-color-font-secundaria">|</p>
    <div className=" hidden sy:flex sy:p-3 dark:sy:hover:bg-gradient-to-r dark:from-green-200/20  dark:via-green-300/20  dark:to-blue-500/20  sy:hover:bg-gradient-to-r from-green-200/40 via-green-300/40 to-blue-500/40   hover:rounded ">
      <div className="transform-gpu">
        <GitHubLogoIcon width={18} className=' text-black dark:text-white' />
      </div>
    </div>
    <div className=" hidden sy:flex sy:p-3 dark:sy:hover:bg-gradient-to-r dark:from-green-200/20  dark:via-green-300/20  dark:to-blue-500/20  sy:hover:bg-gradient-to-r from-green-200/40 via-green-300/40 to-blue-500/40   hover:rounded">
      <div className="transform-gpu">
        <TwitterLogoIcon width={18} className=' text-black dark:text-white' />
      </div>
    </div>
    <p className=" hidden md:flex p-2 text-color-font-secundaria">|</p>
    
    <div className=" flex dark:sy:bg-white/5 sy:bg-black/5 rounded">
      <button onClick={on1} className={`sy:flex sy:p-3 ${tema? 'dark:sy:bg-gradient-to-r dark:from-green-200/20  dark:via-green-300/20  dark:to-blue-500/20  sy:bg-gradient-to-r from-green-200/60 via-green-300/60 to-blue-500/60 rounded' : ' bg-none'} `}>
           <SunIcon  width={18} className=' text-black dark:text-white' />
      </button>
      <button onClick={on2} className={`sy:flex sy:p-3 ${tema2? 'dark:sy:bg-gradient-to-r dark:from-green-200/20  dark:via-green-300/20  dark:to-blue-500/20  sy:bg-gradient-to-r from-green-200/60 via-green-300/60 to-blue-500/60 rounded' : ' bg-none'} `}>
        <MoonIcon name='MoonIcon' width={18} className=' text-black dark:text-white' />
      </button>
    </div>

    </div>
    <div className="  sy:flex sy:p-3 dark:sy:hover:bg-gradient-to-r dark:from-green-200/20  dark:via-green-300/20  dark:to-blue-500/20  sy:hover:bg-gradient-to-r from-green-200/40 via-green-300/40 to-blue-500/40  hover:rounded inline-block">
    <div className="transform-gpu ">
    <AvatarIcon width={18} className=' text-black dark:text-white' />
    </div>
   </div>
    </div>
    </header>    
      </body>
    </html>
  )
}
