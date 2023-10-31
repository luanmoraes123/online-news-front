import Image from 'next/image'

const Noticia = (props) => {
 return (
      <div>
        <div>{props.noticia.title}</div>
        <img src={ props.noticia.img } alt="noticia" />
        <div dangerouslySetInnerHTML={{__html: props.noticia.text}}/>
      </div>
 )
}

export default Noticia;