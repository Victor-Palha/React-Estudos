import React from 'react'
import { useParams } from 'react-router-dom'

const Products = () => {
    const {id} = useParams()
  return (
    <div>
        <p>{id}</p>
    </div>
  )
}

export default Products