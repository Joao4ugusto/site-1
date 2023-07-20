import IconEmail from "@/icons/email";


export default function Home(){
  return(
    <section className=" w-full h-full m-5 mt-32">
      <div className="">
            <p className=" mb-2 text-lg font-medium text-white">#AboutMe</p>
            <p className=" mb-6 text-base font-medium text-color-font-principal">My name is João Augusto, I m a Brazilian software developer, born in 2002, I like to prototype interfaces, but I m not a designer haha.</p>
            <ul className=" flex gap-6">
              <li className=" text-color-font-principal p-2 bg-color-sidebar border-2 border-color-border">Linkedin</li>
              <li className=" text-color-font-principal flex gap-2 items-center p-2 bg-color-sidebar border-2 border-color-border"> <span> <IconEmail /></span> Email</li>
            </ul>
      </div>

    </section>
  )
}