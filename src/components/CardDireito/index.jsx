'use client'
import './style.css'

const CardDireito = (props) => {

  return (
    <div className='card-direito'>
      <div className='imagem' style={{backgroundImage: `url(${props.noticia.img})`}}></div>
      <h2>{props.noticia.titulo}</h2>
      <p className='data'>{props.noticia.createdAt}</p>
    </div>
  )
}

export default CardDireito;