import logo from "../images/pictures/logo-valentina.png"
import { Link } from "react-router-dom"

export default function Logo(){
    return(
        <Link to={'/'}>
            <div className="flex items-center justify-center">
                <img src={logo} alt='Logo' className="rounded-full w-16"/>
                <div className="text-center">
                    <p className="text-2xl font-bold tracking-wide">Valentina</p>
                    <p className="text-vermelho text-lg mt-[-10px]">veículos</p>
                </div>
            </div>  
        </Link>   
    )
}