import whatsapp from "../images/icons/whatsapp-icon.svg"
import maps from "../images/icons/maps-icon.svg"

export default function IconsHeader(){

    return(
        <div className="flex my-4">
            <a href="https://maps.app.goo.gl/hVncEgeN8r1o73tY8" target="_blank" rel="noreferrer"><img src={maps} className="size-8 hover:scale-110 duration-500 cursor-pointer" alt="Icone de mapa"/></a>
            <a href="https://wa.link/2sw6uw" target="_blank" rel="noreferrer"><img src={whatsapp} className="size-8 ml-3 hover:scale-110 duration-500 cursor-pointer" alt="Icone whatsapp"/></a>
        </div>
    )
}