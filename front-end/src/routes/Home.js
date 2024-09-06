import FotoCarro from "../components/FotoCarro";
import Pesquisa from "../components/Pesquisa";
import carro from "../images/pictures/image-removebg-preview.png"

function Home() {
  return (
    <div className='size-full flex'>
      <Pesquisa />
      <FotoCarro imagem={carro}/>
    </div>
  );
}

export default Home;
