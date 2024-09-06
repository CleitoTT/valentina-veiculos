import IconsHeader from "./IconsHeader"
import Logo from "./Logo"
import TextoHeader from "./TextoHeader"

export default function Header(){
    return(
        <div className="bg-[#FFF] w-full z-10 flex flex-col items-center justify-around lg:flex-row">
            <Logo />
            <TextoHeader/>
            <IconsHeader />
        </div>
    )
}