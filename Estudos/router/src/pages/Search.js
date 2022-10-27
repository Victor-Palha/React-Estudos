import React from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Search = () => {
    const [searchParams] = useSearchParams()
    const url = "http://localhost:3000/products?"+searchParams

    const {data:items, loading, error} = useFetch(url)
    return (
        <div>
            <h1>Resultados</h1>
            {error && <p>{error}</p>}
            {loading && <p>Carregando...</p>}
            <ul className='products'>
                {items && items.map(item => (
                    <Link to={"/products/"+item.id}  key={item.id}>
                        <li>
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

export default Search