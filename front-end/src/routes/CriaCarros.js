import { useState } from "react";
import Button from "../components/Button";
import axios from "axios";

export default function CriaCarros() {

    const [nome, setNome] = useState('');
    const [marca, setMarca] = useState('');
    const [ano, setAno] = useState('');
    const [km, setKm] = useState('');
    const [valor, setValor] = useState('');
    const [imagem, setImagem] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('marca', marca);
        formData.append('ano', ano);
        formData.append('km', km);
        formData.append('valor', valor);
        formData.append('imagem', imagem);
        
        try {
            const response = await axios.post('https://valentina-veiculos-api.vercel.app/carros', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response);
            alert("Carro criado com sucesso");
        } catch (error) {
            console.error(error);
            alert("O carro não foi criado, tente novamente");
        }
    };

    return (
        <div className="size-screen flex flex-col justify-center items-center mt-10">
            <h1 className="text-4xl font-bold text-vermelho mb-8">Criar um novo carro</h1>  
            <div className="bg-[#FFF] w-9/12 h-[450px] flex flex-col justify-evenly items-center shadow-2xl rounded-xl">
                <form onSubmit={handleSubmit} className="w-11/12 flex flex-col justify-center">
                    <label htmlFor='nome'>Nome</label>
                    <input id="nome" type="text" placeholder="Nome" className="bg-transparent h-8 border-vermelho border-2 rounded-lg" onChange={(e)=>setNome(e.target.value)}/>
                    
                    <label htmlFor='marca'>Marca</label>
                    <input id="marca" type="text" placeholder="Marca" className="bg-transparent h-8 border-vermelho border-2 rounded-lg" onChange={(e)=>setMarca(e.target.value)}/>
                    
                    <label htmlFor='ano'>Ano</label>
                    <input id="ano" type="Number" placeholder="Ano" className="bg-transparent h-8 border-vermelho border-2 rounded-lg" onChange={(e)=>setAno(e.target.value)}/>
                    
                    <label htmlFor='km'>Kilometragem</label>
                    <input id="km" type="number" placeholder="Kilometragem" className="bg-transparent h-8 border-vermelho border-2 rounded-lg" onChange={(e)=>setKm(e.target.value)}/>
                    
                    <label htmlFor='valor'>Valor</label>
                    <input id="valor" type="number" placeholder="Valor" className="bg-transparent h-8 border-vermelho border-2 rounded-lg" onChange={(e)=>setValor(e.target.value)}/>
                    
                    <label htmlFor='imagem'>Imagem</label>
                    <input id="imagem" type="file" name="imagem" onChange={(e) => { setImagem(e.target.files[0]) }} />
                    
                    <Button nome={"Criar carro!!"} />
                </form>   
            </div>
        </div>
    );
}