'use client'
import './style.css'

const CardNoticia = (props) => {

  return (
    <div className='card-noticia'>
      <h2>{props.noticia.titulo}</h2>
      <div className='imagem' style={{backgroundImage: `url(${props.noticia.img})`}}></div>
      <p>{props.noticia.texto}</p>
    </div>
  )
}

export default CardNoticia;