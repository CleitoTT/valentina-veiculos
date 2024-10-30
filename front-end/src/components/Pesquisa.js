import Button from "./Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Pesquisa() {
    const [carros, setCarros] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [modelos, setModelos] = useState([]);
    const [anos, setAnos] = useState([]);
    const [preco, setPreco] = useState([
        'até R$20.000',
        'até R$40.000',
        'até R$60.000',
        'acima de R$60.000'
    ]);

    const [marcaSelecionada, setMarcaSelecionada] = useState("");
    const [modeloSelecionado, setModeloSelecionado] = useState("");
    const [anoSelecionado, setAnoSelecionado] = useState("");
    const [precoSelecionado, setPrecoSelecionado] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://valentina-veiculos-api.vercel.app/carros')
            .then((response) => {
                const data = response.data;
                setCarros(data);
                setMarcas([...new Set(data.map(item => item.marca))]);
            });
    }, []);

    const handleSelecionar = (tipo, valor) => {
        if (tipo === "marca") {
            setMarcaSelecionada(valor);
            setModeloSelecionado(""); // Resetar modelo quando a marca muda
            setAnos([]);
            setPrecoSelecionado("");
            setModelos([...new Set(carros.filter(car => car.marca === valor).map(item => item.nome))]);
        }
        if (tipo === "modelo") {
            setModeloSelecionado(valor);
            setAnoSelecionado(""); // Resetar ano quando o modelo muda
            setPrecoSelecionado("");
            setAnos([...new Set(carros.filter(car => car.marca === marcaSelecionada && car.nome === valor).map(item => item.ano))]);
        }
        if (tipo === "ano") {
            setAnoSelecionado(valor);
        }
        if (tipo === "preco") {
            setPrecoSelecionado(valor);
        }
    };

    const handleBuscarCarro = () => {
        const formatarPreco = (valor) => {
            return Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        };

        const anoSelecionadoNumero = anoSelecionado ? Number(anoSelecionado) : null;

        const carrosFiltrados = carros.filter(car =>
            (marcaSelecionada ? car.marca === marcaSelecionada : true) &&
            (modeloSelecionado ? car.nome === modeloSelecionado : true) &&
            (anoSelecionadoNumero ? car.ano === anoSelecionadoNumero : true) &&
            (precoSelecionado ? 
                (precoSelecionado === 'acima de R$60.000' ? car.valor > 60000 :
                precoSelecionado === 'até R$20.000' ? car.valor <= 20000 :
                precoSelecionado === 'até R$40.000' ? car.valor <= 40000 :
                precoSelecionado === 'até R$60.000' ? car.valor <= 60000 : true) 
                : true)
        ).map(carro => {
            return {
                ...carro,
                valor: carro.valor ? formatarPreco(carro.valor) : "Valor indisponível"
            };
        });

        if (carrosFiltrados.length === 0) {
            alert("Não existem carros compatíveis com esses filtros");
        } else if (carrosFiltrados.length === 1) {
            navigate(`/veículos/${carrosFiltrados[0]._id}`);
        } else {
            navigate('/veículos', { state: { carrosFiltrados } });
        }
    };

    return (
        <div className="size-full bg-branco flex flex-col items-center justify-center text-left md:w-2/4">
            <div className="w-10/12 text-center md:text-left relative inset-y-0 left-0">
                <h1 className="text-3xl font-bold tracking-wide">Encontre seu próximo <br />carro aqui!!</h1>
                <p className="text-lg tracking-wide">Filtre e encontre seu carro dos sonhos.</p>
            </div>
            <div className="w-11/12 grid grid-cols-2 items-center justify-center ml-12 md:ml-20 mt-10">
                
                <select
                    className="w-4/5 h-16 bg-branco border-2 border-[#5e5e5e] border-solid rounded-lg text-[#5e5e5e] text-xl font-medium mb-10"
                    value={marcaSelecionada}
                    onChange={e => {
                        handleSelecionar("marca", e.target.value);
                    }}
                >
                    <option value="">Todas as Marcas</option>
                    {marcas.map((marca, index) => (
                        <option key={index} value={marca}>{marca}</option>
                    ))}
                </select>

                <select
                    className="w-4/5 h-16 bg-branco border-2 border-[#5e5e5e] border-solid rounded-lg text-[#5e5e5e] text-xl font-medium mb-10"
                    value={modeloSelecionado}
                    onChange={e => {
                        handleSelecionar("modelo", e.target.value);
                    }}
                    disabled={!marcaSelecionada}
                >
                    <option value="">Todos os Modelos</option>
                    {modelos.map((modelo, index) => (
                        <option key={index} value={modelo}>{modelo}</option>
                    ))}
                </select>

                <select
                    className="w-4/5 h-16 bg-branco border-2 border-[#5e5e5e] border-solid rounded-lg text-[#5e5e5e] text-xl font-medium mb-10"
                    value={anoSelecionado}
                    onChange={e => {
                        handleSelecionar("ano", e.target.value);
                    }}
                    disabled={!modeloSelecionado}
                >
                    <option value="">Todos os Anos</option>
                    {anos.map((ano, index) => (
                        <option key={index} value={ano}>{ano}</option>
                    ))}
                </select>

                <select
                    className="w-4/5 h-16 bg-branco border-2 border-[#5e5e5e] border-solid rounded-lg text-[#5e5e5e] text-xl font-medium mb-10"
                    value={precoSelecionado}
                    onChange={e => handleSelecionar("preco", e.target.value)}
                    disabled={!anoSelecionado}
                >
                    <option value="">Todos os Preços</option>
                    {preco.map((valor, index) => (
                        <option key={index} value={valor}>{valor}</option>
                    ))}
                </select>
            </div>
            <Button nome={"Buscar carro!!"} onclick={handleBuscarCarro} />
        </div>
    );
}
