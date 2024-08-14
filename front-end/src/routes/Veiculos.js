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
            axios.get("http://localhost:8000/carros")
                .then((response) => {
                    const carros = response.data.map(carro => {
                        return { ...carro, valor: carro.valor ? formatarPreco(carro.valor) : "Valor indisponível" }
                    });
                    setCarros(carros);
                });
        }
    }, [location]);

    function formatarPreco(valor) {
        return Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
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