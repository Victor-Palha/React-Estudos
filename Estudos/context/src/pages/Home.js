//import React from 'react'
import { useContext } from 'react'
//import { CounterContext } from '../context/CounterContext'
//refactoring with hook
import { useCounterContext } from '../hooks/useCounterContext'

const Home = () => {
  //const {counter, setCounter} = useContext(CounterContext)
  const {counter, setCounter} = useCounterContext()
  //alter context functions
  const handleCounter = ()=>{
    setCounter(counter+1)
  }
  const handleClear = ()=>{
    setCounter(0)
  }
  return (
    <div>
      <h1>Home</h1>
      <p>Contador: {counter}</p>
      {/* Alter context */}
      <button onClick={handleCounter}>Aumentar</button>
      <button onClick={handleClear}>Limpar</button>
    </div>
  )
}

export default Home