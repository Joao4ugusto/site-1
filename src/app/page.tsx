"use client"
import IconMenu from "@/icons/menu";
import IconLogo from "@/icons/logo";

export default function Page() {

  return (
    <div>
    <header className=" top-0 z-40 py-6 px-6 md:px-36 lg:px-36 lg:py-5 xl:px-[385px] xl:py-5 2xl:px-[435px] 2xl:py-5 fixed w-full bg-color-black/95">
    <div className=" flex justify-between items-center">
    <div className=" md:hidden" >
      <IconMenu />
    </div>
    <div className=" lg:p-3 lg:hover:bg-white/10 hover:rounded inline-block">
  <div className="transform-gpu ">
    <IconLogo />
  </div>
</div>
    </div>
    </header>

    <div className=" px-6 mt-28 md:px-36 lg:px-40 lg:mt-36 xl:px-[400px] 2xl:px-[450px]">
      <h1 className="text-color-font-principal mb-8 text-base font-bold">João Augusto</h1>
      <p className=" text-color-font-secundaria  mb-10 font-semibold text-base leading-5">I m a UI developer based in Barcelona. I m interested in dev rel, design systems, web3, user/dev experience and under engineering.</p>
      <p className=" text-color-font-secundaria  mb-10 font-semibold text-base leading-5">I m currently working at Raycast as a DX Engineer to grow its developer community.</p>
      <p className=" text-color-font-secundaria  mb-10 font-semibold text-base leading-5">Previously, I worked at Rainbow, where I focused on RainbowKit. Before that, I co-created Radix, designed the Stitches API and led their developer community.</p>
    </div>
    

  </div>
  );
}
