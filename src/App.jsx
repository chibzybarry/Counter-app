import { useState } from 'react'
import './App.css'

function App() {

  const imgurl = [

  ]
  // const [getter, setter] = useState(default value); 
  const [counter, setCounter] = useState(0);
  const decrement = () => setCounter(counter - 1);
  const increment = () => setCounter(counter + 1);

  return (
    <div>
      <h1>Count: {counter} </h1>

      <div>
      <button onClick ={increment}>increment</button>
      <button onClick = {decrement}>decrement</button>
     </div>
    </div>



  )

  return (
    <>

    </>
  )
}

export default App
