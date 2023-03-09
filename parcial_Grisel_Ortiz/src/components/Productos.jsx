import React from 'react'
import './styles.css'

const Productos = ({producto}) => {

  return (
   
    <tr>  
        <th>{producto.name}</th>
        <th>{producto.category}</th>
        <th>{producto.price}</th>
        <th>{producto.amount}</th>
        <th>{producto.price * producto.amount}</th>
    </tr>
    
    )
    
}

export default Productos