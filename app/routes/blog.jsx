import React from 'react'
import {useLoaderData} from '@remix-run/react'
import { getPosts } from '../models/blog.server'
import Posts from '../components/posts';
import styles from '../styles/blog.css'
import ListadoBlog from '../components/listadoBlog';


export async function loader(){

  const posts=await getPosts();
 // console.log(blog);

  return posts.data;

}
export function links(){
  return [
    {
      rel:'stylesheet',
      href:styles
    }
  ]
}

function Blog() {
  
  const posts=useLoaderData();
  
  return (
    <main className='contenedor'>
      <ListadoBlog
        posts={posts}
      />
    </main>
  )
}

export default Blog