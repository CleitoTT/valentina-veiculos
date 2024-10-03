import Button from "./Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Pesquisa() {
    const [carros, setCarros] = useState([]);
    const [modelos, setModelos] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [anos, setAnos] = useState([]);
    const [preco, setPreco] = useState([
        'até R$20.000',
        'até R$40.000',
        'até R$60.000',
        'acima de R$60.000'
    ]);

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
            });
    }, []);

    const handleSelecionar = (tipo, valor) => {
        if (tipo === "modelo") setModeloSelecionado(valor);
        if (tipo === "marca") setMarcaSelecionada(valor);
        if (tipo === "ano") setAnoSelecionado(valor);
        if (tipo === "preco") setPrecoSelecionado(valor);
    };

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

    const filtrarValores = (tipo) => {
        let carrosFiltrados = carros;

        if (modeloSelecionado) {
            carrosFiltrados = carrosFiltrados.filter(car => car.nome === modeloSelecionado);
        }

        if (marcaSelecionada) {
            carrosFiltrados = carrosFiltrados.filter(car => car.marca === marcaSelecionada);
        }

        if (anoSelecionado) {
            carrosFiltrados = carrosFiltrados.filter(car => car.ano === Number(anoSelecionado));
        }

        if (tipo === "modelo") {
            setMarcas([...new Set(carrosFiltrados.map(item => item.marca))]);
            setAnos([...new Set(carrosFiltrados.map(item => item.ano))]);
        } else if (tipo === "marca") {
            setModelos([...new Set(carrosFiltrados.map(item => item.nome))]);
            setAnos([...new Set(carrosFiltrados.map(item => item.ano))]);
        } else if (tipo === "ano") {
            setModelos([...new Set(carrosFiltrados.map(item => item.nome))]);
            setMarcas([...new Set(carrosFiltrados.map(item => item.marca))]);
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
                    defaultValue={modeloSelecionado}
                    onChange={e => {
                        handleSelecionar("modelo", e.target.value);
                        filtrarValores("modelo");
                    }}
                >
                    <option value="">Todos os Modelos</option>
                    {modelos.map((modelo, index) => (
                        <option key={index} value={modelo}>{modelo}</option>
                    ))}
                </select>
                
                <select
                    className="w-4/5 h-16 bg-branco border-2 border-[#5e5e5e] border-solid rounded-lg text-[#5e5e5e] text-xl font-medium mb-10"
                    defaultValue={marcaSelecionada}
                    onChange={e => {
                        handleSelecionar("marca", e.target.value);
                        filtrarValores("marca");
                    }}
                >
                    <option value="">Todas as Marcas</option>
                    {marcas.map((marca, index) => (
                        <option key={index} value={marca}>{marca}</option>
                    ))}
                </select>

                <select
                    className="w-4/5 h-16 bg-branco border-2 border-[#5e5e5e] border-solid rounded-lg text-[#5e5e5e] text-xl font-medium mb-10"
                    defaultValue={anoSelecionado}
                    onChange={e => {
                        handleSelecionar("ano", e.target.value);
                        filtrarValores("ano");
                    }}
                >
                    <option value="">Todos os Anos</option>
                    {anos.map((ano, index) => (
                        <option key={index} value={ano}>{ano}</option>
                    ))}
                </select>

                <select
                    className="w-4/5 h-16 bg-branco border-2 border-[#5e5e5e] border-solid rounded-lg text-[#5e5e5e] text-xl font-medium mb-10"
                    defaultValue={precoSelecionado}
                    onChange={e => handleSelecionar("preco", e.target.value)}
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