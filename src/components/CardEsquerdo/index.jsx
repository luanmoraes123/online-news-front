'use client'
import './style.css'

const CardEsquerdo = (props) => {

  return (
    <div className='card-esquerdo'>
      <div className='imagem' style={{backgroundImage: `url(${props.noticia.img})`}}></div>
      <h2>{props.noticia.titulo}</h2>
      <button><a href="/home">Ler mais</a></button>
    </div>
  )
}

export default CardEsquerdo;