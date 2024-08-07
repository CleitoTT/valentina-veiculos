import FotoCarro from "../components/FotoCarro";
import Pesquisa from "../components/Pesquisa";

function Home() {
  return (
    <div className='size-full flex'>
      <Pesquisa />
      <FotoCarro />
    </div>
  );
}

export default Home;
