"use client"
import React, { useState } from 'react';

const CadastroForm = () => {
  
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

  const aoSubmeter = (e) => {
    e.preventDefault();
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