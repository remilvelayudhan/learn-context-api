import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { CartContext } from '../../Context/Cart/cartContext'
import './AddToCart.css'

const AddToCart = () => {
    const {incrementCounter} =useContext(CartContext)
  return (
    <div>
      <button className='add-to-cart' onClick={incrementCounter}>Add To Cart</button>
    </div>
  )
}

export default AddToCart
