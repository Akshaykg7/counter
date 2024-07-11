import { useState } from 'react'
import './App.css'
import { Counter } from './components/Counter'

function App() {


  
  const [count, setCount] = useState(0)

  const onIncrement = () => {
    if (count<10) {
      setCount((prev)=> prev+1)
    }
  }
  
    const onDecrement = () => {
      if (count>0) {
        setCount((prev)=> prev-1)
      }
  }  

  return (
    <>

<Counter count={count} onIncrement={onIncrement} onDecrement={onDecrement} />      
    </>
  )
}

export default App
