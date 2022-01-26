import React, { createContext, useState } from "react";

export const CartContext =createContext();


const Cart=({children})=>{
const[counter,setConter]=useState(6);

const incrementCounter=()=>{
    setConter((count)=>count+1)
};

return( <CartContext.Provider value={{counter,incrementCounter}}>
    {children}
</CartContext.Provider>
);
};
export default Cart;