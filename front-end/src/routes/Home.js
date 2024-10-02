import FotoCarro from "../components/FotoCarro";
import Pesquisa from "../components/Pesquisa";
import carro from "../images/pictures/image-removebg-preview.png"

function Home() {
  return (
    <div className='h-screen flex items-center'>
      <Pesquisa />
      <FotoCarro imagem={carro}/>
    </div>
  );
}

export default Home;
