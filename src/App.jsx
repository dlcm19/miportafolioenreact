import { useState } from 'react'
import './App.css'
import Principal from './componentes/header/Principal'
import Nav from './componentes/nav/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Nav />
     <Principal />
    </div>
  )
}

export default App
