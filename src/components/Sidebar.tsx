import { useState } from "react";
import Image from "next/image";
import Iconlink from "@/icons/link";
import foto from "../../public/foto.svg"
import Logo from "../../public/foto-menor.svg"
import IconClose from "@/icons/arroyClose";
 
type props = {
  children: never[],
  open: boolean;
  onClose: () => void;
}



export default function Sidebar({open, onClose, children}: props){
  return (
    <section className={`z-50 transition-all duration-500 fixed right-0  md:left-0 top-0 bottom-0 md:border-r-[1px] md:border-color-border ${open ? ' w-screen bg-black' : 'w-0'} md:w-[200px]  md:bg-color-sidebar`} >
    <div className={`${open ? 'mr-0' : ' -mr-10'}`}>
      <div className={`flex items-center justify-between transition-all duration-500`}>
      <div className=" pt-5 px-8 py-8 md:py-10 ">
      <h1 className=" font-bold text-lg md:text-2xl  text-color-font-roxo">J4</h1>
       {/* <Image src={foto} alt="Logo" className=" hidden md:block" />
       <Image src={Logo} alt="Logo" className=" md:hidden" /> */}
      </div>
      <div onClick={onClose} className=' pt-5 px-8 py-8 md:hidden'>
        <span className={`${open ? ' block' : ' hidden'}`}>
           <IconClose />
        </span>
       </div>
      </div>
      <div className=' p-8 text-color-font-principal'>
        <div className="space-y-4">
        <h2 className=" text-sm font-medium text-white">STACK</h2>
        <div className=' space-y-3'>
          <a className="  hover:text-color-hover cursor-pointer flex gap-x-2 items-center"><span><Iconlink /></span>Home</a>
          <a className="  hover:text-color-hover cursor-pointer flex gap-x-2 items-center"><span><Iconlink /></span>About</a>
          <a className="  hover:text-color-hover cursor-pointer flex gap-x-2 items-center"><span><Iconlink /></span>Content</a>
        </div>
        </div>
        <div className=" space-y-4 mt-20">
        <h2 className=" text-sm font-medium text-white">LINKS</h2>
        <div className='space-y-3 mb-3'>
          <a href="https://twitter.com/Joao4ugusto" className=" hover:text-color-hover cursor-pointer flex gap-x-2 items-center"><span> <Iconlink /></span>Twitter</a>
          <a href="https://github.com/Joao4ugusto" className=" hover:text-color-hover cursor-pointer flex gap-x-2 items-center"><span> <Iconlink /></span>Github</a>
          <a href="https://www.linkedin.com/in/jo%C3%A3o-augusto-oliveira-15b018238/" className=" hover:text-color-hover cursor-pointer flex gap-x-2 items-center"><span> <Iconlink /></span>Linkedin</a>
          <a href="https://www.twitch.tv/joao4uguxto" className=" hover:text-color-hover cursor-pointer flex gap-x-2 items-center"><span> <Iconlink /></span>Twitch</a>
        </div>
        </div>
      </div>

    </div>
  </section>
  );
}
