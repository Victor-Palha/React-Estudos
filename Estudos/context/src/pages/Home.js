//import React from 'react'
//import { useContext } from 'react'
//import { CounterContext } from '../context/CounterContext'
//refactoring with hook
import { useCounterContext } from '../hooks/useCounterContext'

import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Home = () => {
  //const {counter, setCounter} = useContext(CounterContext)
  const {counter, setCounter} = useCounterContext()

  const {color, dispatch} = useTitleColorContext()

  //alter complex context
  const setTitleColor = (color)=>{
    dispatch({type: color})
  }

  //alter context functions
  const handleCounter = ()=>{
    setCounter(counter+1)
  }
  const handleClear = ()=>{
    setCounter(0)
  }
  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Contador: {counter}</p>
      {/* Alter context */}
      <button onClick={handleCounter}>Aumentar</button>
      <button onClick={handleClear}>Limpar</button>
      <div>
        <button onClick={()=>setTitleColor("RED")}>Crimson</button>
        <button onClick={()=>setTitleColor("BLACK")}>Black</button>
      </div>
    </div>
  )
}

export default Home