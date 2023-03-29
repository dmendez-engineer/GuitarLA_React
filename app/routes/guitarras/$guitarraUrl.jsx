import {React,useState} from 'react'
import {useLoaderData,useOutletContext} from '@remix-run/react'
import { getGuitarra } from '../../models/guitarras.server';
 import styles from '../../styles/guitarras.css'

 export async function loader({request,params}){
    const {guitarraUrl}=params;
   
    const guitarra=await getGuitarra(guitarraUrl);
    
    if(guitarra.data.length===0){
        throw new Response('',{
            status:404,
            statusText:'Guitarra no encontrada'
        });
    }

    return guitarra;
}


export function meta({data}){
    if(!data){
        return{
            title:'GuitarLA - Guitarra no encontrada',
            description:'Guitarras, venta de guitarras, guitarra no encontrada'
        }
    }
    return {
            title:`GuitarLA - ${data.data[0].attributes.nombre}`,
            description:`Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`
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

function GuitarraUrl() {
  
    const data=useOutletContext();
    
    
   const[cantidad,setCantidad]=useState(0);
   
  const guitarralUrl=useLoaderData();
  const {nombre,descripcion,imagen,precio}=guitarralUrl.data[0].attributes;  

  const handleSubmit=(e)=>{
        e.preventDefault();

        if(cantidad<1){
            alert("Debes seleccionar una cantidad");
            return;
        }
        const guitarraSeleccionada={
            id:guitarralUrl.data[0].id,
            imagen:imagen.data.attributes.url,
            nombre:nombre,
            precio:precio,
            cantidad:cantidad
        }
       data.agregarCarrito(guitarraSeleccionada);
  }

    return (
    <div className='guitarra'>
        <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />
        <div className='contenido'>
            <h3>
                {nombre}
            </h3>
            <p className='texto'>
                {descripcion}
            </p>
            <p className='precio'>
                ${precio}
            </p>

            <form onSubmit={handleSubmit} className='formulario'>
                <label htmlFor='cantidad'>Cantidad: </label>

                <select  onChange={e=>setCantidad(parseInt(e.target.value))}>
                    <option value="0" id="cantidad">Seleccione</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <input 
                type="submit"
                value="Agregar al carrito"
                />
            </form>

        </div>    
    </div>
  )
}

export default GuitarraUrl