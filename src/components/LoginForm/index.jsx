"use client"
import React, {useState} from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const aoSubmeter = (e) => {
    e.preventDefault();
    console.log(email, senha);
  }

  const aoAlterarValores = (e) => {
    const {name, value} = e.target;
    switch(name){
      case 'email':
        setEmail(value);
        break;
      case 'senha':
        setSenha(value);
        break;
    }
  }

  return (
    <form onSubmit={aoSubmeter}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" onChange={aoAlterarValores} name='email' />
      </div>
      <div>
        <label htmlFor="senha">Senha</label>
        <input type="password" onChange={aoAlterarValores} name='senha' />
      </div>
      <button type='submit'> Enviar </button>
    </form>
  )
}

export default LoginForm;