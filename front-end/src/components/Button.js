export default function Button({nome, onclick}){
    return(
        <button className="h-14 w-10/12 bg-vermelho rounded-xl text-xl text-branco font-black text-center hover:bg-[#841A1F] duration-300" onClick={onclick}>{nome}</button>
    )
}