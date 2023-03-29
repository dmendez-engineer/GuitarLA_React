import React from 'react'
import Guitarra from './guitarras'

function ListadoGuitarras({guitarras}) {
  return (
    <div>
        <h2 className='heading'>Nuestra colección</h2>
        {guitarras.length && (
            <div className='guitarras-grid'>
            {guitarras?.map(g=>(
            <Guitarra
            key={g?.id}
            guitarra={g?.attributes}
            />
            ))}
            </div>
        )}
    </div>
  )
}     
export default ListadoGuitarras