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
    <section className={`z-50 transition-all duration-500 fixed right-0  md:left-0 top-0 bottom-0 md:border-r-2 md:border-color-border ${open ? ' w-screen bg-color-sidebar' : 'w-0'} md:w-[250px]  md:bg-color-sidebar`} >
    <div className={`${open ? 'mr-0' : ' -mr-10'}`}>
      <div className={`flex items-center justify-between transition-all duration-500`}>
      <div className=" pt-3 px-8 py-8 md:py-10">
      <h1 className=" font-bold text-lg md:text-xl  text-color-font-roxo">J4</h1>
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
        <h2 className=" text-sm font-medium text-color-font-secundaria">STACK</h2>
        <ul className=' space-y-3'>
          <li className=" hover:text-color-hover cursor-pointer">FrontEnd</li>
          <li className=" hover:text-color-hover cursor-pointer">BackEnd</li>
          <li className=" hover:text-color-hover cursor-pointer">Devops</li>
        </ul>
        </div>
        <div className=" space-y-4 mt-20">
        <h2 className=" text-sm font-medium text-color-font-secundar">LINKS</h2>
        <ul className='space-y-3 mb-3'>
          <li  className=" hover:text-color-hover cursor-pointer flex gap-x-2 items-center"><span> <Iconlink /></span>Twitter</li>
          <li className=" hover:text-color-hover cursor-pointer flex gap-x-2 items-center"><span> <Iconlink /></span>Github</li>
          <li className=" hover:text-color-hover cursor-pointer flex gap-x-2 items-center"><span> <Iconlink /></span>Linkedin</li>
          <li className=" hover:text-color-hover cursor-pointer flex gap-x-2 items-center"><span> <Iconlink /></span>Discord</li>
          <li className=" hover:text-color-hover cursor-pointer flex gap-x-2 items-center"><span> <Iconlink /></span>Twitch</li>
        </ul>
        </div>
      </div>

    </div>
  </section>
  );
}
