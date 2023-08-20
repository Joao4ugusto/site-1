"use client"
import IconMenu from "@/icons/menu";
import IconLogo from "@/icons/logo";
import IconHome from "@/icons/home";
import IconNotas from "@/icons/notas";
import IconProject from "@/icons/project";
import IconGit from "@/icons/github";
import IconTwitter from "@/icons/twitter";
import IconSun from "@/icons/sun";
import IconMoon from "@/icons/moon";

export default function Page() {

  return (
    <div>
    <header className=" top-0 z-40 py-6 px-6 md:px-36 lg:px-36 lg:py-5 xl:px-[385px] xl:py-5 2xl:px-[435px] 2xl:py-5 fixed w-full bg-color-black/95">
    <div className=" flex justify-between items-center">
    <div className=" md:hidden" >
      <IconMenu />
    </div>
    <div className=" flex gap-1">
    <div className=" hidden md:flex lg:p-4 lg:hover:bg-white/10 hover:rounded ">
      <div className="transform-gpu">
        <IconHome />
      </div>
    </div>
    <div className=" hidden md:flex lg:p-4 lg:hover:bg-white/10 hover:rounded ">
      <div className="transform-gpu">
        <IconNotas />
      </div>
    </div>
    <div className=" hidden md:flex lg:p-4 lg:hover:bg-white/10 hover:rounded ">
      <div className="transform-gpu">
        <IconProject />
      </div>
    </div>
    <p className=" hidden md:flex p-3 text-color-font-secundaria">|</p>
    <div className=" hidden md:flex lg:p-4 lg:hover:bg-white/10 hover:rounded ">
      <div className="transform-gpu">
        <IconGit />
      </div>
    </div>
    <div className=" hidden md:flex lg:p-4 lg:hover:bg-white/10 hover:rounded ">
      <div className="transform-gpu">
        <IconTwitter />
      </div>
    </div>
    <p className=" hidden md:flex p-3 text-color-font-secundaria">|</p>
    <div className=" hidden md:flex lg:p-4 lg:hover:bg-white/10 hover:rounded ">
      <div className="transform-gpu">
        <IconSun />
      </div>
    </div>
    <div className=" hidden md:flex lg:p-4 lg:hover:bg-white/10 hover:rounded ">
      <div className="transform-gpu">
        <IconMoon />
      </div>
    </div>
    </div>
    <div className=" lg:p-4 lg:hover:bg-white/10 hover:rounded inline-block">
    <div className="transform-gpu ">
    <IconLogo />
    </div>
   </div>
    </div>
    </header>

    <div className=" px-6 mt-28 md:px-36 lg:px-40 lg:mt-36 xl:px-[400px] 2xl:px-[450px]">
      <h1 className="text-color-font-principal mb-8 text-base font-bold">João Augusto</h1>
      <p className=" text-color-font-secundaria  mb-10 font-medium text-base leading-6">I m a UI developer based in Barcelona. I m interested in dev rel, design systems, web3, user/dev experience and under engineering.</p>
      <p className=" text-color-font-secundaria  mb-10 font-medium text-base leading-6">I m currently working at Raycast as a DX Engineer to grow its developer community.</p>
      <p className=" text-color-font-secundaria  mb-10 font-medium text-base leading-6">Previously, I worked at Rainbow, where I focused on RainbowKit. Before that, I co-created Radix, designed the Stitches API and led their developer community.</p>
    </div>
    

  </div>
  );
}
