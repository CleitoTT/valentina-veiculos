import FotoCarro from "./components/FotoCarro";
import Header from "./components/Header";
import Pesquisa from "./components/Pesquisa";

function App() {
  return (
    <div className='w-full h-screen'>
      <Header />
      <Pesquisa />
      <FotoCarro />
    </div>
  );
}

export default App;
