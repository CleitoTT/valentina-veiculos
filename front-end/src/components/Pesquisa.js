import Button from "./Button";
import Inputs from "./Inputs";

function a(){
    console.log("deu");
}

export default function Pesquisa(){
    const modelos = ["teste", "teste1", "teste3"]
    const marca = ["teste", "teste1", "teste3"]
    const ano = ["teste", "teste1", "teste3"]
    const preco = ["teste", "teste1", "teste3"]

    return(
        <div className="w-2/4 h-full bg-branco flex flex-col items-center justify-center text-left">
            <div className="relative w-10/12 inset-y-0 left-0">
                <h1 className="text-3xl font-bold tracking-wide">Encontre seu próximo <br/>carro aqui!!</h1>
                <p className="text-lg tracking-wide">Filtre e encontre seu carro dos sonhos.</p>
            </div>
            <div className="w-11/12 grid grid-cols-2 items-center justify-center ml-20 mt-10">
                <Inputs padrao={"Modelo"} valores={modelos}/>
                <Inputs padrao={"Marca"} valores={marca}/>
                <Inputs padrao={"Ano"} valores={ano}/>
                <Inputs padrao={"Preço"} valores={preco}/>
            </div>
            <Button nome={"Buscar carro!!"} onclick={a}/>
        </div>
    )
}