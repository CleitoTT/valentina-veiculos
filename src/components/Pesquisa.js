import Button from "./Button";
import Inputs from "./Inputs";

export default function Pesquisa(){
    return(
        <div className="w-2/4 h-full bg-branco flex flex-col items-center justify-center text-left">
            <div className="mr-56">
                <h1 className="text-3xl font-bold tracking-wide">Encontre seu próximo <br/>carro aqui!!</h1>
                <p className="text-lg tracking-wide">Filtre e encontre seu carro dos sonhos.</p>
            </div>
            <div className="w-11/12 grid grid-cols-2 items-center justify-center ml-20">
                <Inputs padrao={"Modelo"}/>
                <Inputs padrao={"Marca"}/>
                <Inputs padrao={"Ano"}/>
                <Inputs padrao={"Preço"}/>
            </div>
            <Button nome={"Buscar carro!!"} />
        </div>
    )
}