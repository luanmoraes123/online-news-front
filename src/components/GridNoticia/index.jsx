import CardNoticia from '../CardNoticia/index'
import './style.css'

const GridNoticia = ({noticias}) => {
  return (
    <div className='grid-noticia'>
      {noticias.map( noticia => <CardNoticia noticia = {noticia} key={ noticia._id } />)}
      {noticias.map( noticia => <CardNoticia noticia = {noticia} key={ noticia._id } />)}
      {noticias.map( noticia => <CardNoticia noticia = {noticia} key={ noticia._id } />)}
    </div>
  )
}

export default GridNoticia;