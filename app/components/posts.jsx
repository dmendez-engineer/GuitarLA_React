import React from 'react'
import {Link} from '@remix-run/react'
import { formatearFecha } from '../utils/helpers';

function Posts({post}) {

    const {contenido,imagen,titulo,url,publishedAt}=post;
    return (
        <article className='post'>
            <img className='imagen' src={imagen.data.attributes.formats.medium.url} alt={`imagen blog ${titulo}`} />
            <div className='contenido'>
                <h2>{titulo}</h2>
                <p className='fecha'>{formatearFecha(publishedAt)}</p>
                <p className='resumen'>{contenido}</p>
                <Link className='enlace' to={`/blogs/${url}`}>Ver contenido</Link>
            </div>
        </article>
  )
}

export default Posts