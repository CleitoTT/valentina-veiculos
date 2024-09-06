import { Link } from "react-router-dom"

export default function Dados(){
    return(
        <div className="size-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold my-8">O que deseja fazer hoje?</h1>
            <Link to={"/criar"}>
                <button className="w-11/12 bg-vermelho p-2 rounded-lg text-branco text-xl font-bold mt-5 hover:bg-[#841A1F] duration-300">Criar carro</button>
            </Link>
            <Link to={"/atualizar"}>
                <button className="w-11/12 bg-vermelho p-2 rounded-lg text-branco text-xl font-bold mt-5 hover:bg-[#841A1F] duration-300">Atualizar carro</button>
            </Link>
            <Link to={"/deletar"}>
                <button className="w-11/12 bg-vermelho p-2 rounded-lg text-branco text-xl font-bold mt-5 hover:bg-[#841A1F] duration-300">Excluir carro</button>
            </Link>
        </div>
    )
}