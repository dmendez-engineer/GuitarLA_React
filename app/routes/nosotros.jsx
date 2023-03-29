import React from 'react'
import { hasRestParameter } from 'typescript'
import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'
import {useOutletContext} from '@remix-run/react'
export function meta(){
  return{
    title:'GuiltarLA - Sobre Nosotros',
    description:'Venta de guitarras, blog de música y mas...'
  }
}
export function links(){
  return[
    {
        rel:'stylesheet',
        href:styles
    },
    {
      rel:'preload',
      href:imagen,
      as:'image'
    }
  ]
}

function Nosotros() {
  
  const data=useOutletContext();
  console.log(data);

  return (
    <main className='contenedor nosotros'>
       <h2 className='heading'>Nosotros</h2>

       <div className='contenido'>
          <img src={imagen} alt="Imagen sobre nosotros"/>

          <div>
            <p>las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente 
            con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>

            <p>las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente 
            con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
          </div>
       </div>
    </main> 
  )
}

export default Nosotros