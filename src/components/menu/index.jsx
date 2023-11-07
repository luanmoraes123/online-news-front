'use client'
import './style.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation' 
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Menu = () =>{
  const [menuLateral, setMenuLateral] = useState(false);
  const router = useRouter();
  return (
    <>
    <nav className='menu'>
      <button onClick={() => setMenuLateral(!menuLateral)}>
      <FontAwesomeIcon icon={faBars} size='2x' />
      </button>
      <div className='logo'>Online-News</div>
      <button className='login' onClick={() => router.push('./login')}>Login</button>
    </nav>
    {
      menuLateral &&
      <div className="menu_lateral">
        <div className='fechar'>
          <button onClick={() => setMenuLateral(!menuLateral)}>
          <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <ul>
          <li><Link href="/home">Inicio</Link></li>
          <li><Link href="/noticias/produto">Produto</Link></li>
          <li><Link href="/noticias/tecnologia">Tecnologia</Link></li>
          <li><Link href="/noticias/rh">RH</Link></li>
          <li><Link href="/noticias/vendas">Vendas</Link></li>
        </ul>
      </div>
      
    }
    
    </>
  );
}

export default Menu;