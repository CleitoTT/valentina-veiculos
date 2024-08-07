import Button from "./Button"
import carro from "../images/pictures/image-removebg-preview.png"

export default function CardCarros(){
    return(
        <div className="w-6/12 h-96 bg-[#FFF] rounded-xl flex flex-col items-center justify-center mt-8">
            <img src={carro} alt="imagem carro" />
            <div className="w-9/12 flex flex-col">
                <h1 className="text-2xl font-bold">Fiat Mobi</h1>
                <h1 className="text-2xl font-bold text-vermelho">R$35.000</h1>
            </div>
            <div className="w-9/12 flex justify-between mb-5">
                <p>2024/2025</p>
                <p>45.000km</p>
            </div>
            <Button nome={"Estou interessado"} />
        </div>
    )
}