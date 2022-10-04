import './App.css';
import {useState, useEffect} from "react"

function App() {
  const [products, setProducts] = useState([])
  const [name, setName] = useState()
  const [price, setPrice] = useState()

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
  //Adicionando datas
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const product = {
      name,
      price
    }
    const res = await fetch(url,{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(product)
    })

    //Carregamento dinamico
    const addedProduct = await res.json()
    setProducts((prevProducts) => [...prevProducts, addedProduct])

    setName("")
    setPrice("")
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product)=>(
          <li key={product.id}>{product.name} - R$: {product.price}</li>
        ))}
      </ul>
      <div className='add-product'>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Nome:</span>
              <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
            </label>
            <label>
              <span>Preço:</span>
              <input type="number" value={price} onChange={(e)=> setPrice(e.target.value)}/>
            </label>
            <input type="submit" value="Criar"/>
          </form>
      </div>
    </div>
  );
}

export default App;
