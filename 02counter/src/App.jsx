import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//this project is for learning hooks
function App() {
  let [counter, setCounter] = useState(15)
//  let counter = 15
 const addValue = () =>{
  if(counter+1>20){
    alert("Limit exceed")
  }else{
  setCounter(counter+1)
  }
 }

 const removeValue=() =>{
  if(counter-1<0){
    alert("Value cant be negative")
  }else{
  setCounter(counter-1)
  }

 }

  return (
    <>
      <h1> react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>
       <br />
      <button
      onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
