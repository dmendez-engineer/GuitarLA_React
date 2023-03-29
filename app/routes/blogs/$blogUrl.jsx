import React from 'react'
import {useLoaderData} from '@remix-run/react'
import { getPost } from '../../models/blog.server';
 import styles from '../../styles/guitarras.css'
import { formatearFecha } from '../../utils/helpers';

 export async function loader({request,params}){
    const {blogUrl}=params;
   
    const blog=await getPost(blogUrl);
    
    if(blog.data.length===0){
        throw new Response('',{
            status:404,
            statusText:'Blog no encontrada'
        });
    }

    return blog;
}
export function meta({data}){
    if(!data){
        return{
            title:'GuitarLA - Blog no encontrada',
            description:'Guitarras, venta de guitarras, blog no encontrada'
        }
    }
    return {
            title:`GuitarLA - Nuestro Blog`,
            description:`Guitarras, blog de música y venta de guitarras`
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


function BlogUrl() {
    
    const blogUrl=useLoaderData();
    console.log(blogUrl);
    
    const {titulo,contenido,imagen,publishedAt}=blogUrl?.data[0]?.attributes;  
 
    return (
    <article className='contenido post'>
        <img className='imagen' src={imagen?.data?.attributes.url} alt={`imagen blog ${titulo}`} />
        <div className='contenido'>
            <h2>{titulo}</h2>
            <p className='fecha'>{formatearFecha(publishedAt)}</p>
            <p className='texto'>{contenido}</p>
            
        </div>
    </article>
  )
}

export default BlogUrl