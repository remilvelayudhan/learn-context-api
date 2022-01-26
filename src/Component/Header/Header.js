import React, { useContext } from 'react'
import  { CartContext } from '../../Context/Cart/cartContext'
import './Header.css'
const Header = () => {
  const {counter}= useContext(CartContext)
  return (

    <header>
      <div>{counter}</div>
      <img src='data:image/png;base64,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'
alt=''/>   
 </header>
  );
}

export default Header
