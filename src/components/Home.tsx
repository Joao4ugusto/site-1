import IconEmail from "@/icons/email";


export default function Home(){
  return(
    <>
    <div className=" md:absolute md:w-full md:h-20 md:border-b-[1px] md:border-color-border "></div>
    <section className=" w-full h-full m-5 mt-32 md:mt-20">
      <div className=" md:mt-12 md:ml-96 lg:ml-[450px] lg:w-[600px]">
            <p className=" mb-4 text-4xl font-bold text-white">About Me</p>
            <p className=" mb-8 text-base font-normal text-white">I m a Brazilian software developer, born in 2002, I like to prototype interfaces, but I m not a designer haha.</p>
            <ul className=" flex gap-6">
              <li className=" cursor-pointer rounded text-white px-5 py-2 bg-color-sidebar border-[1px] border-color-border ">Linkedin</li>
              <li className=" cursor-pointer rounded text-white flex gap-2 items-center px-5 py-2 bg-color-sidebar border-[1px] border-color-border"> <span> <IconEmail /></span> Email</li>
            </ul>
            <p className=" mb-2 mt-10 font-light text-color-font-terceira">Hello! I m João Augusto, a Computer Science student, passionate about turning solutions into code and creating immersive and minimalist interfaces.</p>
            <p className=" mb-2 mt-5 font-light text-color-font-terceira">At the age of 18, I founded a marketing and online ad management and website creation agency with a friend. This experience provided me with valuable learning and prepared me to fulfill my big dream of having my own business in the future.</p>
            <p className=" mb-10 mt-5 font-light text-color-font-terceira">In my free time, music is an essential part of my life, and being with my friends and family brings joy and balance. Furthermore, the connection with nature inspires me to seek creative solutions in my journey of personal and professional growth.</p>
            <p className=" mb-10 mt-5 font-light text-color-font-terceira">I am looking to the future and confident that I can achieve great things, leaving my mark in the digital world and positively impacting the lives of those who cross my path.</p>
            <div className=" rounded border-[1px]  border-color-border w-full h-96">
                <div className=" p-5 border-b-[1px] border-color-border">
                  <h1>Experience</h1>
                </div>
                <div className=" w-full h-44 border-b-[1px] border-color-border">
                    <div>

                    </div>
                </div>
            </div>
      </div>

    </section>
    </>
  )
}