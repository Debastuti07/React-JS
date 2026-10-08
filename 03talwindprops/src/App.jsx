import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Card from './Components/Card';

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name:"tuti",
    age:21
  }
  return (
  <>
 <h1 className="bg-green-500 text-black p-4 rounded-xl">
      Tailwind test
    </h1>
   <Card message="hello" btnText="click me"/>
   <Card message="tuti" />
</>
  )
}

export default App
