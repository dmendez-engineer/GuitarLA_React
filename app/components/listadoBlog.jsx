import React from 'react'
import Posts from './posts'

function ListadoBlog({posts}) {
  return (
    <div>
    <h2>
        Blog
      </h2>
      <div className='blog'>
        {posts.map(p=>(
          <Posts
            key={p.id}
            post={p.attributes}
          />
        ))}
      </div>
    </div>
  )
}

export default ListadoBlog