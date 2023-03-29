import { getPosts } from "../models/blog.server";
import { getGuitarras } from "../models/guitarras.server";
import {useLoaderData} from '@remix-run/react'
import Guitarra from "../components/guitarras";
import ListadoGuitarras from "../components/listadoGuitarras";
import stylesGuitarras from '../styles/guitarras.css'
import ListadoBlog from "../components/listadoBlog";
import stylesPosts from '../styles/blog.css'
import { getCurso } from "../models/curso.server";
import Curso from "../components/curso";
import stylesCurso from "../styles/curso.css"
export function meta(){

}
export function links(){
  return [
    {
      rel:'stylesheet',
      href:stylesGuitarras
    },
    {
      
        rel:'stylesheet',
        href:stylesPosts
      
    },
    {
      
      rel:'stylesheet',
      href:stylesCurso
    
  }
  ]
}
export async function loader(){
  const [guitarras,posts,curso]=await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ]);
 
  return {
    guitarras:guitarras.data,
    posts:posts.data,
    curso:curso.data
  }
}

export default function Index() {
  
  const{guitarras,posts,curso}=useLoaderData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras}
        />
      </main>

    <Curso
    curso={curso.attributes}
    />
      
      <section className="contenedor">
        <ListadoBlog
        posts={posts}
        />
      </section>
      
    </div>
  );
}
