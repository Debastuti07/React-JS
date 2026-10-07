import { useState ,useEffect} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'


function App() {

  const [counter,setCounter]=useState(0);
//  let counter=5;
  const addValue=()=>{
    console.log("clicked",counter);
    // counter+=1;    
    setCounter(counter+1);
  }

  const removeVal=()=>{
    console.log("removed",counter);
    if(counter<=0) {
      alert("can't be negative");
      return;
    }
    setCounter(counter-1);
  }
  return (
    <>
       <h1>Hello counter</h1>
       <h2>Counter val: {counter}</h2>

      <button onClick={addValue}>add val{counter}</button>
      <br/>
      <button onClick={removeVal}>remove val{counter}</button>

      <footer>{counter}</footer>
      </>
  )
}

export default App
