'use client'
import CardEsquerdo from '../CardEsquerdo';
import './style.css'

const noticia = {
  titulo: 'A blitz da tecnologia para ajudar na vacinação',
  img: 'https://thenewscc.com.br/wp-content/uploads/2021/04/TECNOLOGIA.jpg',
  texto: 'texto noticia 1',
  createdAt:'21/07/1997'
}

const LateralEsquerdo = () => {
  return(
    <div className='lateral-esquerdo'>
      <div className='popular'>
        Mais popular
      </div>
      <CardEsquerdo noticia={noticia}/>
    </div>
  )
}

export default LateralEsquerdo;