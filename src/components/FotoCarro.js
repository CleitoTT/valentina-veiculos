import carro from '../images/pictures/image-removebg-preview.png'

export default function FotoCarro(){
    return(
      <div className='absolute inset-y-0 right-0 bg-vermelho w-2/4 h-full z-0 flex items-center justify-center'>
        <img src={carro} alt='imagem carro'/>
      </div>
    )
}