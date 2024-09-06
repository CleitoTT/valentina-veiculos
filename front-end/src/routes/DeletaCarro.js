import { useState, useEffect } from "react";
import axios from "axios";

export default function DeletaCarros() {
    const [carros, setCarros] = useState([]);
    const [carrosSelecionados, setCarrosSelecionados] = useState([]);

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

    const handleCheckboxChange = (e, id) => {
        if (e.target.checked) {
            setCarrosSelecionados([...carrosSelecionados, id]);
        } else {
            setCarrosSelecionados(carrosSelecionados.filter(carroId => carroId !== id));
        }
    };

    const handleDelete = async () => {
        try {
            await Promise.all(carrosSelecionados.map(async (id) => {
                await axios.delete(`https://valentina-veiculos-api.vercel.app/carros/${id}`);
            }));
            alert("Carros excluídos com sucesso");
            setCarros(carros.filter(carro => !carrosSelecionados.includes(carro._id)));
            setCarrosSelecionados([]);
        } catch (error) {
            console.error(error);
            alert("Erro ao excluir carros, tente novamente");
        }
    };

    return (
        <div className="size-screen flex flex-col justify-center items-center mt-10">
            <h1 className="text-4xl font-bold text-vermelho mb-8">Excluir Carros</h1>
            <ul className="w-9/12">
                {carros.map(carro => (
                    <li key={carro._id} className="flex justify-between items-center border-b py-2">
                        <span>{carro.nome} - {carro.marca} - {carro.ano}</span>
                        <input
                            type="checkbox"
                            onChange={(e) => handleCheckboxChange(e, carro._id)}
                            checked={carrosSelecionados.includes(carro._id)}
                        />
                    </li>
                ))}
            </ul>
            <button
                onClick={handleDelete}
                className="bg-vermelho text-white p-2 rounded-lg mt-4"
                disabled={carrosSelecionados.length === 0}
            >
                Excluir Selecionados
            </button>
        </div>
    );
}
