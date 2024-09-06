import logo from "../images/pictures/logo-valentina.png"

export default function Empresa(){
    return(
        <div className="size-screen md:size-full bg-branco flex flex-col md:flex-row justify-evenly items-center">
            <div className="w-5/12 flex flex-col justify-center items-center mr-8 lg:mr-10">
                <h1 className="text-center text-5xl text-vermelho font-bold">Sobre nós</h1>
                <p className="text-center md:text-left text-2xl font-bold mt-8">Há quatro anos, temos o compromisso de oferecer um negócio justo e transparente para nossos clientes. Priorizamos a satisfação em cada etapa, desde a avaliação justa do seu veículo usado na troca até um pós-venda confiável e com garantia. Nossa dedicação à qualidade e ao atendimento nos rendeu uma excelente reputação. Venha fazer parte dessa experiência de excelência e descubra por que tantos clientes confiam em nós!</p>
            </div>
            <img src={logo} alt="Logo valentina veículos" className="w-96"/>
        </div>
    )
}