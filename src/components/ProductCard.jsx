import React from 'react'
import { addProducPanier } from '../redux/slices/panierSlice'
import { useDispatch } from 'react-redux'

const ProductCard = ({product}) => {
    const dispatch = useDispatch()
  return (
    <div>

<h3>{product.title}</h3>
<h4>{product.description}</h4>
<img width="20%" src={product.poster} alt="img"/>
<h4>{product.price}</h4>
<button onClick={()=> dispatch(addProducPanier(product))}> Add to card</button>

      
    </div>
  )
}

export default ProductCard
