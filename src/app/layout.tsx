import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import Image from 'next/image'
import  fundo  from "../../public/fundo1.svg"
import { TextAlignLeftIcon, HomeIcon, FileTextIcon, CodeIcon, GitHubLogoIcon, TwitterLogoIcon, SunIcon, MoonIcon, AvatarIcon } from '@radix-ui/react-icons'

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
      <Image src={fundo} alt='' className=' absolute z-[-1] top-0 w-screen h-screen left-0 object-cover' />
      <body className=" bg-white text-color-black  dark:bg-color-black dark:text-white ">{children}

    <header className=" top-0 py-6 px-6 md:px-36 sy:px-32 lg:px-36 lg:py-4 xl:px-[385px] xl:py-4 2xl:px-[435px] 2xl:py-4 fixed w-full bg-white dark:bg-color-black/95">
    <Image src={fundo} alt='' layout="fill" objectFit="cover" className=' absolute z-[-1] top-0  w-screen h-screen object-cover' />
    <div className=" flex justify-between items-center">
    <div className=" sy:hidden" >
      <TextAlignLeftIcon width={19} className=' text-black dark:text-white' />
    </div>
    <div className="  gap-1 md:hidden sy:flex">
    <div className=" hidden md:flex sy:p-3 sy:hover:bg-gradient-to-r from-green-200/20  via-green-300/20  to-blue-500/20  hover:rounded ">
      <div className="transform-gpu">
        <HomeIcon width={18} className=' text-black dark:text-white' />
      </div>
    </div>
    <div className=" hidden md:flex sy:p-3 sy:hover:bg-gradient-to-r from-green-200/20 via-green-300/20 to-blue-500/20 hover:rounded ">
      <div className="transform-gpu">
        <FileTextIcon width={18} className=' text-black dark:text-white' />
      </div>
    </div>
    <div className=" hidden md:flex sy:p-3 sy:hover:bg-gradient-to-r from-green-200/20 via-green-300/20 to-blue-500/20 hover:rounded">
      <div className="transform-gpu">
        <CodeIcon width={18} className=' text-black dark:text-white' />
      </div>
    </div>
    <p className=" hidden md:flex p-2 text-color-font-secundaria">|</p>
    <div className=" hidden md:flex sy:p-3 sy:hover:bg-gradient-to-r from-green-200/20 via-green-300/20 to-blue-500/20 hover:rounded ">
      <div className="transform-gpu">
        <GitHubLogoIcon width={18} className=' text-black dark:text-white' />
      </div>
    </div>
    <div className=" hidden md:flex sy:p-3 sy:hover:bg-gradient-to-r from-green-200/20 via-green-300/20 to-blue-500/20 hover:rounded">
      <div className="transform-gpu">
        <TwitterLogoIcon width={18} className=' text-black dark:text-white' />
      </div>
    </div>
    <p className=" hidden md:flex p-2 text-color-font-secundaria">|</p>
    <div className=" flex dark:sy:bg-white/5 sy:bg-black/5 rounded">
    <div className=" hidden md:flex sy:p-3 sy:hover:bg-gradient-to-r from-green-200/20 via-green-300/20 to-blue-500/20 hover:rounded ">
      <div className="transform-gpu">
        <SunIcon width={18} className=' text-black dark:text-white' />
      </div>
    </div>
    <div className=" hidden md:flex sy:p-3 sy:hover:bg-gradient-to-r from-green-200/20 via-green-300/20 to-blue-500/20 hover:rounded ">
      <div className="transform-gpu">
        <MoonIcon width={18} className=' text-black dark:text-white' />
      </div>
    </div>
    </div>
    </div>
    <div className=" sy:p-3 sy:hover:bg-gradient-to-r from-green-200/20 via-green-300/20 to-blue-500/20 hover:rounded inline-block">
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
