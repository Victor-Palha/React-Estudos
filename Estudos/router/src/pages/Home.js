import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import {useFetch} from '../hooks/useFetch'

const Home = () => {
    const url = "http://localhost:3000/products"
    const {data:items, loading, error} = useFetch(url)
  return (
    <div>
        <h1>PRODUTOS</h1>
        {error && <p>{error}</p>}
        {loading && <p>Carregando...</p>}
        <ul className='products'>
            {items && items.map(item => (
                <Link to={"/products/"+item.id}>
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>R$ {item.price}</p>
                        <span>Ver mais +</span>
                    </li>
                </Link>
            ))}
        </ul>
    </div>
  )
}

export default Home