import React, { useState } from 'react'
import Productos from "./Productos";
import './styles.css'

const ListComponent = () => {
  
  const [valueInputText, setValueInputText] = useState('');
  const [valueInputCate, setValueInputCate] = useState('');
  const [valueInputAmount, setValueInputAmount] = useState(0);
  const [valueInputPrice, setValueInputPrice] = useState(0);
  const [valueError, setValueError] = useState('')
  const [products, setProducts] = useState([]);
 
  
    const addInputAmount = (e) => {
      setValueInputAmount(Number(e.target.value))
    }

    const addInputPrice = (e) => {
      setValueInputPrice(Number(e.target.value))
   }

  const AddProduct = (e) => {
    e.preventDefault();
    if (valueInputText.length > 6) {
      setValueError('No pueden ser mas de seis caracteres');
      return;
    } else if (valueInputCate.length > 6) {
      setValueError('No pueden ser mas de seis caracteres');
      return;
    }
    
    const newProduct = {
      name: valueInputText, 
      category: valueInputCate,
      price: Number(valueInputPrice), 
      amount: Number(valueInputAmount)
    };
  
    setProducts(prevState => [...prevState, newProduct]);
    setValueInputText('');
    setValueInputCate('');
    setValueInputAmount(0);
    setValueInputPrice(0);
    setValueError('');
  };

  return (
   
    <>
    <h1>Inventario</h1>
    <div className='container'>
    <table className='table'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Valor Total</th>
          </tr>
        </thead>
        <tbody>
    {products.map((newProduct, index) =>
      <Productos key={index} producto={newProduct} />
    )}
  </tbody>
</table>

    <form className='form'  onSubmit={(e) => AddProduct(e)}>
    <label>Ingrese el nombre del producto</label>
    <input type='text' onChange={(e) => setValueInputText(e.target.value)} required/>
    <label>Ingrese la categoría del producto</label>
    <input type='text'  onChange= {(e) => setValueInputCate(e.target.value)} required/> 
    <label>Ingrese la cantidad</label>
    <input type='number' value={valueInputAmount} onChange={addInputAmount} required/>
    <label>Ingrese el precio</label>
    <input type='number' value={valueInputPrice} onChange={addInputPrice} required/>

    <button >Agregar producto</button>
    <div>{valueError}</div>
    </form>
    </div>
    </>
  )
}

export default ListComponent