export default function FotoCarro({ imagem }) {
  console.log('Imagem recebida:', imagem);
  return (
    <div className='inset-y-0 right-0 bg-vermelho w-2/4 h-full z-0 hidden md:flex items-center justify-center md:relative md:visible absolute invisible'>
      <img src={imagem} alt='imagem carro' className='w-11/12' />
    </div>
  );
}

