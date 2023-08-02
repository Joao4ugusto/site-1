"use client"
import IconEmail from "@/icons/email";
import IconAtom from "@/icons/atomo";
import IconMundo from "@/icons/mundo";

export default function page(){

  return(
    <>
    <section className=" w-full h-full m-5 mt-32 md:mt-20 ">
      <div className="  md:ml-56 mf:ml-[235px] lg:ml-[450px] lg:w-[600px]">
            <p className=" font-medium text-color-font-secundaria text-lg md:hidden">Intro</p>
            <p className=" mb-4 text-[38px] font-bold text-white">Developer and <span className=" text-zinc-100">student</span></p>
            <p className=" mb-8 text-base font-medium text-white">Pleasure, I m João Augusto, developer and computer science student, passionate about technology, challenges and learning.</p>
            <div className=" flex gap-4">
              <a href="https://www.linkedin.com/in/jo%C3%A3o-augusto-oliveira-15b018238/" className="  hover:bg-color-fundo/80  cursor-pointer rounded-md text-white px-5 py-2 bg-color-fundo border-[1px] border-color-border ">Linkedin</a>
              <a href="mailto:joaoaugusto311016@gmail.com" className="  hover:bg-color-fundo/80 cursor-pointer rounded-md text-white flex gap-2 items-center px-5 py-2 bg-color-fundo border-[1px] border-color-border"> <span> <IconEmail /></span> Email</a>
            </div>
            <div className=" mt-12">
                <h1 className=" font-medium text-lg">Blog</h1>
                <p className=" text-color-font-secundaria text-base mt-2">Check out my articles on dev.to! Short readings with space for your feedback. I sincerely appreciate your opinions.</p>
                
                <div className=" mt-5 flex px-5 gap-4 py-5  border-[1px] rounded border-color-border">
                     <div className=" text-white font-bold p-3 bg-color-sidebar border-[1px] border-color-border rounded ">
                        <IconAtom  />
                     </div>
                     <div className="">
                        <a  className="  text-base font-medium">Constant</a>
                        <h3 className="text-color-font-terceira text-sm font-light">founder</h3>
                     </div>
                     
                     
                     <div className=" text-white font-bold p-3 bg-color-sidebar border-[1px] border-color-border rounded ">
                        <IconAtom  />
                     </div>
                     <div className="">
                        <a  className="  text-base font-medium">Constant</a>
                        <h3 className="text-color-font-terceira text-sm font-light">founder</h3>
                     </div>
                     
                  </div>


            </div>
            <div className="p-5 mt-10 rounded border-[1px]  border-color-border w-full">
              <h1>Experience</h1>
              <p className=" text-color-font-secundaria mt-5">Check here my latest professional experiences</p>
              <div className=" mt-5 flex gap-4">
                     <div className=" text-white font-bold p-3 bg-color-sidebar border-[1px] border-color-border rounded ">
                        <IconAtom  />
                     </div>
                     <div className=" gap-1">
                        <a  className="  text-base font-medium">Constant</a>
                        <h3 className="text-color-font-terceira text-sm font-light">founder</h3>
                     </div>
                  </div>
              <div className=" mt-5 flex gap-4">
                     <div className=" text-white font-bold p-3 bg-color-sidebar border-[1px] border-color-border rounded ">
                      <IconMundo />
                     </div>
                     <div className=" gap-1">
                        <a className=" text-base font-medium">CRVR</a>
                        <h3 className="text-color-font-terceira text-sm font-light">Young apprentice</h3>
                     </div> 
              </div>
              <a href="/sobre" className=" hover:bg-color-fundo/80 cursor-pointer text-center font-medium mt-5 block p-2 rounded-md w-full bg-color-fundo border-[1px] border-color-border">view all</a>
            </div>
      </div>
      <div className=" right-0 mr-5 rounded-md mb-5 fixed mt-5  bg-white text-black  bottom-0">
      {/* <a href="" className=" text-sm flex items-center gap-3 px-4 py-2 font-bold">Contents</a> */}
    </div>

    </section>
    </>
  )
}