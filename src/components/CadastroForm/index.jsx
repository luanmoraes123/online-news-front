"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const CadastroForm = () => {

  const router = useRouter();
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const aoAlterarValores = (e) => {
    const {name, value} = e.target;
    switch(name){
      case 'nome': 
        setNome(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'senha':
        setSenha(value);
        break
    }
  }

  const aoSubmeter = async (e) => {
    e.preventDefault();
    try {
      const formulario = {
        name: nome,
        email,
        password: senha
      }
      const result = await axios.post('http://localhost:8080/users', formulario);
        router.push('/admin/noticia/criar');
    } catch (error) {
      alert(error.response.data.message);  
    }
    console.log('submetido', nome, email, senha);
  }

  return (
    <form onSubmit={aoSubmeter}>
      <div>
        <label htmlFor="nome">Nome</label>
        <input type="text" onChange={aoAlterarValores} name="nome"/>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" onChange={aoAlterarValores} name="email"/>

      </div>
      <div>

        <label htmlFor="senha">Senha</label>
        <input type="password" onChange={aoAlterarValores} name="senha"/>
      </div>
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default CadastroForm;