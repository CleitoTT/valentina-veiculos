import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { ReactComponent as WppIcon } from '../images/icons/whatsapp-icon-branco.svg';

export default function Carros(){

    const { id } = useParams()
    const [car, setCar] = useState(null)

    useEffect(() => {
        axios.get(`https://valentina-veiculos-api.vercel.app/carros/${id}`)
            .then(response => {
                const carro = response.data.carroEncontrado;
                carro.valor = carro.valor ? formatarPreco(carro.valor) : "Valor indisponível";
                setCar(carro)
                })
            .catch(error => {
                console.error("Houve um erro ao buscar os dados do carro:", error);
            });
    }, [id]);

    function formatarPreco(valor) {
        return Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    if(!car) return <p>Carregando...</p>

    return(
        <div className="h-full flex">
            <div className="size-full bg-branco flex flex-col items-center justify-center text-left md:w-2/4">
                <div className="md:relative w-8/12 md:inset-y-0 md:right-6 mb-5">
                    <h1 className="text-4xl font-bold tracking-wide">{car.nome}</h1>
                    <h1 className="text-4xl font-bold tracking-wide text-vermelho">{car.valor}</h1>
                </div>
                <div className="w-8/12 flex justify-between mb-20 text-lg md:relative md:w-6/12 md:inset-y-0 md:right-20">
                    <p><b>Ano:</b>    {car.ano}</p>
                    <p><b>Kilometragem:</b>    {car.km}</p>
                </div>
                <img src={`http://localhost:8000/uploads/${car.imagem}`} alt='imagem carro' className='w-11/12 relative visible md:absolute md:invisible' />
                <div className="w-8/12 h-64 bg-[#FFF] flex flex-col justify-center items-center text-center border-t-8 border-[#25D366] rounded-xl">
                    <p className="text-lg font-bold">Fale agora mesmo com um de nossos<br/> especialistas e tire todas suas dúvidas</p>
                        <button onClick={() => window.open( 'https://wa.link/2sw6uw', '_blank')} className="relative inset-x-0 top-10 lg:top-14 h-14 w-11/12 lg:h-12 lg:w-10/12 bg-[#25D366] rounded-xl text-xl text-[#FFF] font-black text-center hover:bg-[#1DA650] duration-300 flex items-center justify-center">
                        <WppIcon className="h-6 w-6 mr-2 md:mr-2"/>
                            Negocie pelo whatsapp
                        </button>
                </div>
            </div>
            <div className='inset-y-0 right-0 bg-vermelho w-2/4 h-full z-0 flex items-center justify-center md:relative md:visible absolute invisible'>
                <img src={`http://localhost:8000/uploads/${car.imagem}`} alt='imagem carro' className='w-11/12' />
            </div>
        </div>
    )
}