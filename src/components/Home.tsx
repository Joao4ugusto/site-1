import IconEmail from "@/icons/email";


export default function Home(){
  return(
    <section className=" w-full h-full m-5 mt-32">
      <div className="">
            <p className=" mb-2 text-3xl font-bold text-white">About Me</p>
            <p className=" mb-8 text-base font-ligh text-white">I m a Brazilian software developer, born in 2002, I like to prototype interfaces, but I m not a designer haha.</p>
            <ul className=" flex gap-6">
              <li className=" rounded text-white px-4 py-2 bg-color-sidebar border-[1px] border-color-border ">Linkedin</li>
              <li className=" rounded text-white flex gap-2 items-center px-4 py-2 bg-color-sidebar border-[1px] border-color-border"> <span> <IconEmail /></span> Email</li>
            </ul>
            <p className=" mb-2 mt-10 font-light text-color-font-terceira">Hello! I m João Augusto, a developer passionate about prototyping interactive and minimalist interfaces. Since I entered the world of programming, I have found immense pleasure in combining elegant aesthetics with fluid operation, creating unique experiences for users.</p>
            <p className=" mb-2 mt-5 font-light text-color-font-terceira">Hello! I m João Augusto, a developer passionate about prototyping interactive and minimalist interfaces. Since I entered the world of programming, I have found immense pleasure in combining elegant aesthetics with fluid operation, creating unique experiences for users.</p>
            <p className=" mb-10 mt-5 font-light text-color-font-terceira">Hello! I m João Augusto, a developer passionate about prototyping interactive and minimalist interfaces. Since I entered the world of programming, I have found immense pleasure in combining elegant aesthetics with fluid operation, creating unique experiences for users.</p>
            <div className=" rounded border-[1px] border-color-border w-full h-96">
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
  )
}