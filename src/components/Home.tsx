"use client"
import IconEmail from "@/icons/email";
import IconAtom from "@/icons/atomo";
import IconMundo from "@/icons/mundo";

export default function page(){

  return(
    <>
    <section className=" w-full h-full m-5 mt-32 md:mt-24 ">
      <div className="  md:ml-56 mf:ml-[235px] lg:ml-[450px] lg:w-[600px]">
            <p className=" mb-4 text-[42px] font-bold text-white">Developer and student</p>
            <p className=" mb-8 text-base font-normal text-white">Pleasure, I m João Augusto, developer and computer science student, passionate about technology, challenges and learning.</p>
            <div className=" flex gap-6">
              <a href="/sobre" className=" font-medium hover:bg-color-fundo/80  cursor-pointer rounded-md text-white px-5 py-2 bg-color-fundo border-[1px] border-color-border ">About Me</a>
              <a href="mailto:joaoaugusto311016@gmail.com" className=" font-medium hover:bg-color-fundo/80 cursor-pointer rounded-md text-white flex gap-2 items-center px-5 py-2 bg-color-fundo border-[1px] border-color-border"> <span> <IconEmail /></span> Email</a>
            </div>
            <div className=" mt-10 rounded border-[1px]  border-color-border w-full h-[500px] md:h-[420px]">
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