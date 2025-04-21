import React from 'react'
import {  useSelector } from 'react-redux'
import ProductPanierCard from './ProductPanierCard'


const Panier = () => {
    const {products} = useSelector((state)=> state.panier)
    
  return (
    <div >
        {products.map((product)=> <ProductPanierCard product={product}/>)}
       
    </div>
    
  )
}

export default Panier
