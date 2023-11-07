'use client'
import Noticia from '../../../components/Noticia'
import LateralEsquerdo from '../../../components/LateralEsquerdo'
import LateralDireito from '../../../components/LateralDireito'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'


const HomePage = () => {

  const [noticias, setNoticias] = useState([]);

  const getNoticias = async () => {
    try {
      const result = await axios.get('http://localhost:8080/news');
      setNoticias(result.data);
    } catch (error) {
      alert(error.response.data.mensage);
    }
  }

  useEffect(() => {
    getNoticias();
  }, [])
  
  return(
    <div className='home'>
      <LateralEsquerdo />
      <div>
      {noticias.map(noticia => <Noticia noticia={noticia} key={noticia._id} />)}
      </div>
      <LateralDireito />
    </div>
  )
}

export default HomePage;