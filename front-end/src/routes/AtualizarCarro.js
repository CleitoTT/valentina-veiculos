import { useState, useEffect } from "react";
import axios from "axios";

export default function AtualizarCarro() {
    const [carroId, setCarroId] = useState(''); // Id do carro que será atualizado
    const [campo, setCampo] = useState('nome'); // Campo a ser atualizado
    const [valor, setValor] = useState('');
    const [carros, setCarros] = useState([]);

    useEffect(() => {
        async function fetchCarros() {
            try {
                const response = await axios.get('https://valentina-veiculos-api.vercel.app/carros');
                setCarros(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchCarros();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.patch(`https://valentina-veiculos-api.vercel.app/carros/${carroId}`, {
                [campo]: valor,
            });
            alert("Carro atualizado com sucesso");
        } catch (error) {
            console.error(error);
            alert("O carro não foi atualizado, tente novamente");
        }
    };

    return (
        <div className="size-screen flex flex-col justify-center items-center mt-10">
            <h1 className="text-4xl font-bold text-vermelho mb-8">Atualizar Carro</h1>
            <form onSubmit={handleSubmit} className="w-11/12 flex flex-col justify-center">
                <label htmlFor='carroId'>Escolha o carro</label>
                <select id="carroId" onChange={(e) => setCarroId(e.target.value)} value={carroId}>
                    <option value="">Selecione um carro</option>
                    {carros.map(carro => (
                        <option key={carro._id} value={carro._id}>{carro.nome}</option>
                    ))}
                </select>

                <label htmlFor='campo'>O que você gostaria de atualizar?</label>
                <select id="campo" onChange={(e) => setCampo(e.target.value)} value={campo}>
                    <option value="nome">Nome</option>
                    <option value="marca">Marca</option>
                    <option value="ano">Ano</option>
                    <option value="km">Kilometragem</option>
                    <option value="valor">Valor</option>
                    <option value="imagem">Imagem</option>
                </select>

                <label htmlFor='valor'>Novo valor</label>
                <input
                    id="valor"
                    type={campo === 'ano' || campo === 'km' || campo === 'valor' ? 'number' : 'text'}
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                />

                <button type="submit" className="bg-vermelho p-2 rounded-lg text-branco text-xl font-bold mt-5">Atualizar</button>
            </form>
        </div>
    );
}