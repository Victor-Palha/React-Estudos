import React from 'react'
import { useCounterContext } from '../hooks/useCounterContext'
import { useTitleColorContext } from '../hooks/useTitleColorContext'
const About = () => {
  const {color} = useTitleColorContext()
  const {counter} = useCounterContext()
  return (
    <div>
        <h1 style={{color: color}}>Sobre</h1>
        <p>Contador: {counter}</p>
    </div>
  )
}

export default About