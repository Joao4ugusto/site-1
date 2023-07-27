import IconMenu from "@/icons/menu";
import IconLogo from "@/icons/logo";

type props = {
  openSaidebarClick: () => void;
}

export default function Header({ openSaidebarClick }: props){
  return(
    <header className=" z-40 md:hidden fixed  bg-color-black  w-full">
    <div className=" h-[45px] my-4 mx-4 flex justify-between items-center">
    <div>
      <h1 className=" font-bold text-lg text-color-font-roxo">J4</h1>
    </div>
    <div onClick={openSaidebarClick} className=" p-2.5 bg-color-fundo rounded">
      <IconMenu />
    </div>
    </div>
    <hr className=" border-y-color-border" />
  </header>
  )
}