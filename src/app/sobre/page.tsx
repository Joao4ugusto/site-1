"use client"
import {useState} from 'react'
import IconEmail from "@/icons/email";
import Iconlink from "@/icons/link";
import IconAtom from "@/icons/atomo";
import IconMundo from "@/icons/mundo";
import Sidebar from "@/components/Sidebar";
import Header from '@/components/Header';

export default function page(){

  const [sidebarOpened, setSidebarOpened] =  useState(false);

  const openSaidebar = () => setSidebarOpened(true)
  const clouseSaidebar = () => setSidebarOpened(false)

  return(
    <>
    <div className=" md:absolute md:w-full md:border-b-[1px] md:border-color-border "></div>
    <Header openSaidebarClick={openSaidebar}  />
    <Sidebar open={sidebarOpened} onClose={clouseSaidebar} />
    <section className=" w-full h-full m-5 mt-32 md:mt-32">
      <div className=" md:mt-12 md:ml-56 mf:ml-[235px] lg:ml-[450px] lg:w-[600px]">
            <p className=" mb-4 text-4xl font-bold text-white">About Me</p>
            <p className=" mb-8 text-base font-normal text-white">I m a Brazilian software developer, born in 2002, I like to prototype interfaces, but I m not a designer haha.</p>
            <div className=" flex gap-6">
              <a href="https://www.linkedin.com/in/jo%C3%A3o-augusto-oliveira-15b018238/" className=" hover:bg-color-sidebar/60  cursor-pointer rounded text-white px-5 py-2 bg-color-sidebar border-[1px] border-color-border ">Linkedin</a>
              <a href="mailto:joaoaugusto311016@gmail.com" className=" hover:bg-color-sidebar/60 cursor-pointer rounded text-white flex gap-2 items-center px-5 py-2 bg-color-sidebar border-[1px] border-color-border"> <span> <IconEmail /></span> Email</a>
            </div>
            <p className=" mb-2 mt-10 font-light text-color-font-terceira">Hello! I m João Augusto, a Computer Science student, passionate about turning solutions into code and creating immersive and minimalist interfaces.</p>
            <p className=" mb-2 mt-5 font-light text-color-font-terceira">At the age of 18, I founded a marketing and online ad management and website creation agency with a friend. This experience provided me with valuable learning and prepared me to fulfill my big dream of having my own business in the future.</p>
            <p className=" mb-10 mt-5 font-light text-color-font-terceira">In my free time, music is an essential part of my life, and being with my friends and family brings joy and balance. Furthermore, the connection with nature inspires me to seek creative solutions in my journey of personal and professional growth.</p>
            <p className=" mb-10 mt-5 font-light text-color-font-terceira">I am looking to the future and confident that I can achieve great things, leaving my mark in the digital world and positively impacting the lives of those who cross my path.</p>
            <div className=" rounded border-[1px]  border-color-border w-full h-[500px] md:h-[420px]">
                <div className=" p-5 border-b-[1px] border-color-border">
                  <h1>Experience</h1>
                </div>
                <div className=" p-5 w-full h-52 md:h-44 border-b-[1px] border-color-border">
                  <div className=" flex gap-4">
                     <div className=" text-white font-bold p-3 bg-color-sidebar border-[1px] border-color-border rounded ">
                      {/* <h3 className=" text-green-400 text-base font-bold">crvr</h3> */}
                      {/* <Image width={45} height={45} src={crvr} alt="Logo da empresa crvr"/> */}
                      <IconMundo />
                     </div>
                     <div className=" gap-1">
                        <a href="https://crvr.com.br/" className=" md:hover:text-color-font-roxo text-base font-medium">CRVR</a>
                        <h3 className="text-color-font-terceira text-sm font-light">Young apprentice</h3>
                     </div>
                  </div>
                 <p className=" text-color-font-secundaria text-sm font-light mt-4">I worked as a Young Apprentice in the administrative sector in Giruá-RS, helping to manage the company s expenses. I developed my communication and grew a lot with the experience.</p>
                </div>
                
                <div className=" p-5 w-full">
                  <div className=" flex gap-4">
                     <div className=" text-white font-bold p-3 bg-color-sidebar border-[1px] border-color-border rounded ">
                      {/* <h3 className=" text-base font-bold">Constant</h3> */}
                        <IconAtom  />
                     </div>
                     <div className=" gap-1">
                        <a href="https://site-1-kappa.vercel.app/" className=" md:hover:text-color-font-roxo text-base font-medium">Constant</a>
                        <h3 className="text-color-font-terceira text-sm font-light">founder</h3>
                     </div>
                  </div>
                 <p className="text-color-font-secundaria text-sm font-light mt-4">I worked on freelance projects with a friend, creating websites and managing online ads. It was a great opportunity, where I could learn to be responsible and meet deadlines to deliver quality material.</p>
                </div>
            </div>
      </div>
      <div className=" right-0 mr-5 rounded-md mb-5 fixed mt-5  bg-white text-black  bottom-0">
      <a className=" text-sm flex items-center gap-3 px-4 py-2 font-bold">Contents</a>
    </div>

    </section>
    </>
  )
}