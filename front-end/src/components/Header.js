import IconsHeader from "./IconsHeader"
import Logo from "./Logo"
import TextoHeader from "./TextoHeader"

export default function Header({position}){
    return(
        <div className="bg-[#FFF] w-full z-10 flex items-center justify-around">
            <Logo />
            <TextoHeader/>
            <IconsHeader />
        </div>
    )
}