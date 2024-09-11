import Button from "./Button";
import Inputs from "./Inputs";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Pesquisa() {
    const [modelos, setModelos] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [anos, setAnos] = useState([]);
    const [preco, setPreco] = useState([]);
    const [carros, setCarros] = useState([]);

    const [modeloSelecionado, setModeloSelecionado] = useState("");
    const [marcaSelecionada, setMarcaSelecionada] = useState("");
    const [anoSelecionado, setAnoSelecionado] = useState("");
    const [precoSelecionado, setPrecoSelecionado] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://valentina-veiculos-api.vercel.app/carros')
            .then((response) => {
                const data = response.data;
                setCarros(data);
                setModelos([...new Set(data.map(item => item.nome))]);
                setMarcas([...new Set(data.map(item => item.marca))]);
                setAnos([...new Set(data.map(item => item.ano))]);
                setPreco([
                    'até R$20.000',
                    'até R$40.000',
                    'até R$60.000',
                    'acima de R$60.000'
                ]);
            });
    }, []);

    const handleBuscarCarro = () => {
        const formatarPreco = (valor) => {
            return Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        };
    
        const anoSelecionadoNumero = anoSelecionado ? Number(anoSelecionado) : null;
    
        const carrosFiltrados = carros.filter(car => 
            (modeloSelecionado ? car.nome === modeloSelecionado : true) &&
            (marcaSelecionada ? car.marca === marcaSelecionada : true) &&
            (anoSelecionadoNumero ? car.ano === anoSelecionadoNumero : true) &&
            (precoSelecionado ? 
                (precoSelecionado === 'acima de R$60.000' ? car.valor > 60000 :
                precoSelecionado === 'até R$1.000' ? car.valor <= 20000 :
                precoSelecionado === 'até R$3.000' ? car.valor <= 40000 :
                precoSelecionado === 'até R$6.000' ? car.valor <= 60000 : true) 
                : true)
        ).map(carro => {
            return {
                ...carro,
                valor: carro.valor ? formatarPreco(carro.valor) : "Valor indisponível"
            };
        });
    
        if(carrosFiltrados.length === 0){
            alert("Não existem carros compatíveis com esses filtros")
        }else if (carrosFiltrados.length === 1) {
            navigate(`/veículos/${carrosFiltrados[0]._id}`);
        } else {
            navigate('/veículos', { state: { carrosFiltrados } });
        }
    };
    

    return (
        <div className="size-full bg-branco flex flex-col items-center justify-center text-left md:w-2/4">
            <div className="w-10/12 text-center md:text-left relative inset-y-0 left-0">
                <h1 className="text-3xl font-bold tracking-wide">Encontre seu próximo <br/>carro aqui!!</h1>
                <p className="text-lg tracking-wide">Filtre e encontre seu carro dos sonhos.</p>
            </div>
            <div className="w-11/12 grid grid-cols-2 items-center justify-center ml-12 md:ml-20 mt-10">
                <Inputs padrao={"Modelo"} valores={modelos} onChange={e => setModeloSelecionado(e.target.value)} />
                <Inputs padrao={"Marca"} valores={marcas} onChange={e => setMarcaSelecionada(e.target.value)} />
                <Inputs padrao={"Ano"} valores={anos.sort()} onChange={e => setAnoSelecionado(e.target.value)} />
                <Inputs padrao={"Preço"} valores={preco} onChange={e => setPrecoSelecionado(e.target.value)} />
            </div>
            <Button nome={"Buscar carro!!"} onclick={handleBuscarCarro} />
        </div>
    );
}
