import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProducts } from '../redux/slices/productSlice'
import ProductList from '../components/ProductList'
import Panier from "../components/Panier"

const Home = () => {
    const {isLoading,products}= useSelector(state=> state.products)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(GetProducts())
    },[dispatch])
  return (
    <div>

        {isLoading && <p> isLoading...</p>}
        <ProductList products={products}/>
        <Panier/>
      
    </div>
  )
}

export default Home
