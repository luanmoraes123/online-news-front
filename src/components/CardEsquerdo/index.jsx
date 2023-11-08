'use client'
import './style.css'
import { useState } from 'react'

const CardEsquerdo = (props) => {

  const [isHover, setIsHover] = useState(false);

  return (
    <div className='card-esquerdo'>
      <div style={{position: 'relative'}}
      onMouseEnter={() => {setIsHover(true)}} onMouseLeave={() => {setIsHover(false)}}
      >
        <div style={{opacity: isHover ? '1' : '0'}} className='clique'>Clique aqui</div>     
        <div   className='imagem' style={{backgroundImage: `url(${props.noticia.img})`}}></div>
      </div>
      <h2>{props.noticia.titulo}</h2>
      <button><a href="/home">Ler mais</a></button>
    </div>
  )
}

export default CardEsquerdo;