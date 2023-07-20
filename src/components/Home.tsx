

export default function Home(){
  return(
    <section className=" w-full h-full m-5  mt-28">
      <div className="">
            <p className=" mb-2 text-sm text-color-font-secundaria">#AboutMe</p>
            <h1 className=" text-white font-semibold mb-2">MY NAME IS JOÃO AUGUSTO</h1>
            <p className=" mb-6 text-sm text-color-font-secundaria">I m a Brazilian software developer, born in 2002, I like to prototype interfaces, but I m not a designer haha</p>
            <ul className=" flex gap-6">
              <li className=" p-2 bg-color-sidebar border-2 border-color-border">Linkedin</li>
              <li className=" p-2 bg-color-sidebar border-2 border-color-border">Email</li>
            </ul>
      </div>

    </section>
  )
}