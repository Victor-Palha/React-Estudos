import './App.css';
import {useState, useEffect} from "react"

function App() {
  const [products, setProducts] = useState([])

  const url = "http://localhost:3000/products"

  //Resgatando dados
  useEffect(()=>{
    async function getData(url){

      const res = await fetch(url)
      const data = await res.json()

      setProducts(data)
    }

    getData(url)

  },[])

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product)=>(
          <li key={product.id}>{product.name} - R$: {product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
