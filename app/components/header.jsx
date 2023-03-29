import React from 'react'
import {Link,useLocation} from '@remix-run/react'
import Logo from '../../public/img/logo.svg'
import Navegacion from './navegacion'

const Header = () => {
  
  const location=useLocation();
  
    return (
    <header className='header'>
        <div className='contendor barra'>
            <Link className='logo' to="/">
                <img className='logo' src={Logo} alt="imagen logo"/>
            </Link>
            <Navegacion/>
        </div>
    </header>
  )
}

export default Header