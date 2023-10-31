'use client'
import { useState } from 'react';

const CadastroNoticiaForm = () => {

  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [text, setText] = useState('');

  const aoSubmeter =(e) => {
    e.preventDefault();
    console.log('submeteu', title, img, text);
  }

  const aoAlterarValores = (e) => {
      const {name, value} = e.target;

      switch(name){
        case 'title':
          setTitle(value);
          break;
        case 'img':
          setImg(value);
          break;
        case 'text':
          setText(value);
          break;
      }
  }


  return (
    <form onSubmit={aoSubmeter}>
      <div>
        <label htmlFor="title">Titulo</label>
        <input type="text" onChange={aoAlterarValores} name="title"/>
      </div>
      <div>
        <label htmlFor="img">Imagem</label>
        <input type="text" onChange={aoAlterarValores} name="img"/>

      </div>
      <div>

        <label htmlFor="text">Texto</label>
        <textarea onChange={aoAlterarValores} name="text"/>
      </div>
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default CadastroNoticiaForm;