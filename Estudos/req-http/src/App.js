import './App.css';
import {useState} from "react"

import { useFetch } from './hooks/useFetch';
const url = "http://localhost:3000/products"

function App() {
  //const [products, setProducts] = useState([])

  const {data:items, httpConfig, loading} = useFetch(url)
  const [name, setName] = useState()
  const [price, setPrice] = useState()
  

  //Resgatando dados
  /*
  useEffect(()=>{
    async function getData(url){

      const res = await fetch(url)
      const data = await res.json()

      setProducts(data)
    }

    getData(url)

  },[])
  */
  //Adicionando datas
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const product = {
      name,
      price
    }
    /*
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
*/
    //refatorando post
    httpConfig(product, "POST")
    setName("")
    setPrice("")
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/*Loading */}
      {loading && <p>Carregando dados...</p>}
      {!loading && (
        <ul>
          {items && items.map((product)=>(
            <li key={product.id}>{product.name} - R$: {product.price}</li>
          ))}
        </ul>
      )}
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
