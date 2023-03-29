import React from 'react'
import {useLoaderData,Outlet} from '@remix-run/react'
import styles from '../../styles/guitarras.css'
import { getGuitarras } from '../../models/guitarras.server';
import Guitarra from '../../components/guitarras';
import ListadoGuitarras from '../../components/listadoGuitarras';

export function meta(){
  return{
    title:'GuitarLA - Tienda de Guitarras',
    description:'GuitarLA - Nuestra colección de guitarras'
  }
}

export function links(){
  return [
    {
      rel:'stylesheet',
      href:styles
    }
  ]
}

export async function loader(){
      const guitarras= await getGuitarras();
  return guitarras.data;
}

function Tienda() {
  
 const guitarras=useLoaderData();


  return (
    
      <ListadoGuitarras
      guitarras={guitarras}
      />
    
  )
}

export default Tienda