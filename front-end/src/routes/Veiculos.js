import axios from "axios";
import { useState, useEffect } from "react";
import CardCarros from "../components/CardCarros";
import { useLocation } from "react-router-dom";

function Veiculos() {
    const [carros, setCarros] = useState([]);
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.carrosFiltrados) {
            setCarros(location.state.carrosFiltrados);
        } else {
            axios.get("https://valentina-veiculos-api.vercel.app/carros")
                .then((response) => {
                    const carros = response.data.map(carro => {
                        return {
                            ...carro, km: carro.km ? formataNum(carro.km) : "Km indisponível",
                            valor: carro.valor ? formatarPreco(carro.valor) : "Valor indisponível" 
                        }
                    });
                    setCarros(carros);
                });
        }
    }, [location]);

    function formatarPreco(valor) {
        return Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    function formataNum(km){
        return parseInt(km).toLocaleString('pt-BR')
    }

    return (
        <div className="size-screen bg-branco grid md:grid-cols-2 lg:grid-cols-3 justify-items-center content-center">
            {carros.map(carro => (
                <CardCarros key={carro._id} id={carro._id} nome={carro.nome} valor={carro.valor} ano={carro.ano} km={carro.km} imagem={carro.imagem} />
            ))}
        </div>
    );
}

export default Veiculos;