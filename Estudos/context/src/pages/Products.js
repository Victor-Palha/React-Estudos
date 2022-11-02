import React from 'react'
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Products = () => {
  const {color} = useTitleColorContext()
  return (
    <div>
        <h1 style={{color: color}}>Produtos</h1>
    </div>
  )
}

export default Products