import Image from "next/image"
import Logo from "../../public/foto-menor.svg"
import IconMenu from "@/icons/menu";

type props = {
  openSaidebarClick: () => void;
}

export default function Header({ openSaidebarClick }: props){
  return(
    <header className=" z-40 md:hidden fixed bg-color-sidebar w-full">
    <div className=" h-[50px] my-4 mx-4 flex justify-between items-center">
    <div>
      <Image width={45} height={45} src={Logo} alt="Logo menor" />
    </div>
    <div onClick={openSaidebarClick}>
      <IconMenu />
    </div>
    </div>
    <hr className=" border-y-color-border" />
  </header>
  )
}