import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'

const Products = () => {
    const {id} = useParams()

    const url = "http://localhost:3000/products/"+id
    const {data: product, loading, error} = useFetch(url)
    console.log(product)
  return (
    <div>
        {error && <p>{error}</p>}
        {loading && <p>Carregando...</p>}
        {product && (
            <div className='product'>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                {/* Nasted routes */}
                <Link to={`/products/${product.id}/info`}>Mais informações</Link>
            </div>
        )}
    </div>
  )
}

export default Products