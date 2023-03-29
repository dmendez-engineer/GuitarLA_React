import React from 'react'

function ListadoCarrito({producto}) {
  return (
    <div className='producto' key={producto.id}>
    <div>
        <img src={producto.imagen} alt="Imagen del producto"/>         
     </div>
     <div>
        <p className='nombre'>{producto.nombre}</p>
        <p className='precio'>$ <span>{producto.precio}</span></p>
        <p className='subtotal'>Subtotal: $ <span>{producto.precio * producto.cantidad}</span></p>
    </div>
 </div>
  )
}

export default ListadoCarrito