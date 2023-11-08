'use client'
import CardDireito from '../CardDireito';
import './style.css'

const noticia = {
  titulo: 'A blitz da tecnologia para ajudar na vacinação',
  img: 'https://thenewscc.com.br/wp-content/uploads/2021/04/TECNOLOGIA.jpg',
  texto: 'texto noticia 1',
  createdAt:'21/07/1997'
}

const LateralDireito = () => {
  return(
    <div className='lateral-direito'>
      <div className='ultimas'>
        Ultimas noticias
      </div>
      <CardDireito noticia={noticia}/>
      <CardDireito noticia={noticia}/>
      <CardDireito noticia={noticia}/>
    </div>
  )
}

export default LateralDireito;