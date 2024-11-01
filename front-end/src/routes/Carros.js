import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ReactComponent as WppIcon } from '../images/icons/whatsapp-icon-branco.svg';

export default function Carros() {
    const { id } = useParams();
    const [car, setCar] = useState({}); // Inicializando com um objeto vazio

    useEffect(() => {
        axios.get(`https://valentina-veiculos-api.vercel.app/carros/${id}`)
            .then(response => {
                console.log(response.data); // Verifica o que está sendo retornado pela API
                const carro = response.data; // Certifique-se de que a chave é essa
                if (carro) {
                    carro.km = carro.km ? formataNum(carro.km) : "Km indisponível";
                    carro.valor = carro.valor ? formatarPreco(carro.valor) : "Valor indisponível";
                    setCar(carro);
                } else {
                    console.error("Carro não encontrado na resposta da API");
                }
            })
            .catch(error => {
                console.error("Houve um erro ao buscar os dados do carro:", error);
            });
    }, [id]);

    function formatarPreco(valor) {
        return Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    function formataNum(km){
        return parseInt(km).toLocaleString('pt-BR')
    }

    if (!car || !car.nome) return <p>Carregando...</p>; // Verificação de se os dados do carro estão corretos

    return (
        <div className="h-screen flex items-center">
            <div className="size-full bg-branco flex flex-col items-center justify-center text-left lg:w-2/4 lg:mt-0 mt-14">
                <div className="md:relative w-8/12 md:inset-y-0 md:right-6 mb-5">
                    <h1 className="text-4xl font-bold tracking-wide">{car.nome}</h1>
                    <h1 className="text-4xl font-bold tracking-wide text-vermelho">{car.valor}</h1>
                </div>
                <div className="w-9/12 flex justify-between mb-20 text-lg md:relative md:w-6/12 md:inset-y-0 md:right-20">
                    <p><b>Ano:</b> {car.ano}</p>
                    <p><b>Kilometragem:</b> {car.km}</p>
                </div>
                <img src={`https://valentina-veiculos-api.vercel.app/uploads/${car.imagem}`} alt='imagem carro' className='w-11/12 max-w-[520px] relative visible lg:absolute lg:invisible' />
                <div className="w-8/12 h-64 bg-[#FFF] flex flex-col justify-center items-center text-center border-t-8 border-[#25D366] rounded-xl">
                    <p className="text-lg font-bold">Fale agora mesmo com um de nossos<br/> especialistas e tire todas suas dúvidas</p>
                    <button onClick={() => window.open('https://wa.link/2sw6uw', '_blank')} className="relative inset-x-0 top-10 lg:top-14 h-14 w-11/12 lg:h-12 lg:w-10/12 bg-[#25D366] rounded-xl text-xl text-[#FFF] font-black text-center hover:bg-[#1DA650] duration-300 flex items-center justify-center">
                        <WppIcon className="h-6 w-6 mr-2 md:mr-2"/>
                        Negocie pelo whatsapp
                    </button>
                </div>
            </div>
            <div className='inset-y-0 right-0 bg-vermelho w-2/4 h-full z-0 hidden md:flex items-center justify-center lg:static lg:visible absolute invisible'>
                <img src={`https://valentina-veiculos-api.vercel.app/uploads/${car.imagem}`} alt='imagem carro' className='w-11/12' />
            </div>
        </div>
    );
}