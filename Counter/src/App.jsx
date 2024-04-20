import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

 
  const [counter, setCounter] = useState(0);

const decreaseHandler = () => {
  setCounter(counter - 1);
}

const increaseHandler = () => {
  setCounter(counter + 1);
}

const resetHandler = () => {
  setCounter(0);
}
return (
  <div className=" container ">
    <div className="text">Increment && Decrement</div>
    <div className="con">

      <button onClick={decreaseHandler} className="border pos1">
        -
      </button>

      <div className="font-bold gap-12 text-5xl">
        {counter}
      </div>

      <button onClick={increaseHandler} className="border pos2">
        +
      </button>
    </div>
    <button onClick={resetHandler} className="bg">reset</button>
  </div>


);
  
  
}

export default App
