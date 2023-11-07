"use client"
import React, {useState} from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter();
  const [formulario, setFormulario] = useState({
    email:'',
    password: ''
  });

  const aoSubmeter = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:8080/login', formulario);
      alert(result.data.mensage);
      router.push('/admin/noticia/criar');
    } catch (error) {
      alert(error.response.data.mensage);
    }

  }

  const aoAlterarValores = (e) => {
    const {name, value} = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    })
  }

  return (
    <form onSubmit={aoSubmeter}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" onChange={aoAlterarValores} name='email' />
      </div>
      <div>
        <label htmlFor="password">Senha</label>
        <input type="password" onChange={aoAlterarValores} name='password' />
      </div>
      <button type='submit'> Enviar </button>
    </form>
  )
}

export default LoginForm;