'use client'
import GridNoticias from '../../../../components/GridNoticia/index'
import axios from 'axios'
import { useState, useEffect } from 'react'




const NoticiasPage = ({params}) => {


  const [noticias, setNoticias] = useState([]);

  const getNoticias = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/news?categoria=${params.categoria}`);
      setNoticias(result.data);
    } catch (error) {
      alert(error.response.data.mensage);
    }
  }

  useEffect(() => {
    getNoticias();
  }, [])


  return(
    <div>
      <h1>{params.categoria.toUpperCase()}</h1>
      <GridNoticias noticias={noticias}/>
    </div>
  )
}

export default NoticiasPage;