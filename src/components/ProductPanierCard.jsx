import React from 'react'

const ProductPanierCard = ({product}) => {
  return (
    <div style={{display:"flex", justifyContent:"space-around"}}>
      <h3>{product.title}</h3>


<h4>{product.price}</h4>
    </div>
  )
}

export default ProductPanierCard
