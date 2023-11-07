'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const CadastroNoticiaForm = () => {

  const router = useRouter();

  const [titulo, setTitulo] = useState('');
  const [img, setImg] = useState('');
  const [texto, setTexto] = useState('');
  const [categoria, setCategoria] = useState('');

  const aoSubmeter = async (e) => {
    e.preventDefault();

    try {
      
      const formulario = {
        titulo,
        img,
        texto,
        categoria
      }
      const result = await axios.post('http://localhost:8080/news', formulario);
      router.push('/home');
    } catch (error) {
      alert(error);
    }
  }

  const aoAlterarValores = (e) => {
      const {name, value} = e.target;

      switch(name){
        case 'titulo':
          setTitulo(value);
          break;
        case 'img':
          setImg(value);
          break;
        case 'texto':
          setTexto(value);
          break;
        case 'categoria':
          setCategoria(value);
          break;
      }
  }


  return (
    <form onSubmit={aoSubmeter}>
      <div>
        <label htmlFor="titulo">Titulo</label>
        <input type="text" onChange={aoAlterarValores} name="titulo"/>
      </div>
      <div>
        <label htmlFor="img">Imagem</label>
        <input type="text" onChange={aoAlterarValores} name="img"/>

      </div>
      <div>

        <label htmlFor="texto">Texto</label>
        <textarea onChange={aoAlterarValores} name="texto"/>
      </div>
      <div>

        <label htmlFor="categoria">Categoria</label>
        <select onChange={aoAlterarValores} name="categoria" >
          <option value="produto">Produto</option>
          <option value="tecnologia">Tecnologia</option>
          <option value="rh">RH</option>
          <option value="vendas">Vendas</option>
        </select>
      </div>
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default CadastroNoticiaForm;