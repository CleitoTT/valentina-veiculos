import { Link } from "react-router-dom";
import Button from "./Button";

export default function CardCarros({ nome, valor, ano, km, id, imagem }) {
    const imageUrl = `https://valentina-veiculos-api.vercel.app/uploads/${imagem}`;

    return (
        <div className="w-7/12 lg:w-6/12 h-96 bg-[#FFF] rounded-xl flex flex-col items-center justify-center mt-8">
            <img src={imageUrl} alt="imagem carro" className="w-8/12 lg:w-8/12 lg:max-h-[200px]" />
            <div className="w-9/12 flex flex-col">
                <h1 className="text-2xl font-bold">{nome}</h1>
                <h1 className="text-2xl font-bold text-vermelho">{valor}</h1>
            </div>
            <div className="w-9/12 flex justify-between mb-5">
                <p>{ano}</p>
                <p>{km}</p>
            </div>
            <Link to={`/veículos/${id}`} className="flex justify-center items-center mb-5 lg:m-0">
                <Button nome={"Estou interessado"} />
            </Link>
        </div>
    );
}
