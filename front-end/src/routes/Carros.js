import CardCarros from "../components/CardCarros";

function Carros(){
    return(
        <div className="size-screen bg-branco grid grid-cols-3 justify-items-center content-center">
            <CardCarros />
            <CardCarros />
            <CardCarros />
            <CardCarros />
            <CardCarros />
            <CardCarros />
            <CardCarros />
        </div>
    )
}

export default Carros