import Noticia from '../../../components/Noticia/index'

const noticias = [
  {
    id:1,
    title: 'noticia 1',
    img: 'https://salto.sp.gov.br/wp-content/uploads/2020/03/Not%C3%ADcia-Falsa-%C3%A9-crime-300x158.jpeg',
    text: 'texto da <b> noticia 1 </b>'
  },
  {
    id:2,
    title: 'noticia 2',
    img: 'https://salto.sp.gov.br/wp-content/uploads/2020/03/Not%C3%ADcia-Falsa-%C3%A9-crime-300x158.jpeg',
    text: 'texto da <b> noticia 2 </b>'
  },
  {
    id:3,
    title: 'noticia 3',
    img: 'https://salto.sp.gov.br/wp-content/uploads/2020/03/Not%C3%ADcia-Falsa-%C3%A9-crime-300x158.jpeg',
    text: 'texto da <b> noticia 3 </b>'
  }
]
const HomePage = () => {
  return(
    <div>
      <h1>Home</h1>
      {noticias.map(noticia => <Noticia noticia={noticia} key={noticia.id} />)}
    </div>
  )
}

export default HomePage;