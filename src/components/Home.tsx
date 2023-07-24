import IconEmail from "@/icons/email";


export default function Home(){
  return(
    <div>
       <div className=" md:absolute md:w-full md:h-20 md:border-b-[1px] md:border-color-border "></div>
       <section className=" w-full h-full m-5 mt-32 md:mt-20">
         <div className="md:mt-12 md:ml-96 lg:ml-[450px] lg:w-[600px]">
         <p className=" mb-4 text-4xl font-bold text-white">About Me</p>
            <p className=" mb-8 text-base font-normal text-white">I m a Brazilian software developer, born in 2002, I like to prototype interfaces, but I m not a designer haha.</p>
            <div className=" flex gap-6">
              <a href="https://www.linkedin.com/in/jo%C3%A3o-augusto-oliveira-15b018238/" className=" hover:bg-color-sidebar/60  cursor-pointer rounded text-white px-5 py-2 bg-color-sidebar border-[1px] border-color-border ">Linkedin</a>
              <a href="mailto:joaoaugusto311016@gmail.com" className=" hover:bg-color-sidebar/60 cursor-pointer rounded text-white flex gap-2 items-center px-5 py-2 bg-color-sidebar border-[1px] border-color-border"> <span> <IconEmail /></span> Email</a>
            </div>
         </div>
       </section>
    </div>
  )
}