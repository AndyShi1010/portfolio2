import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Loader from './components/Loader'
import ThreeCanvas from './components/ThreeCanvas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Loader></Loader> */}
      <ThreeCanvas></ThreeCanvas>
    </div>
  )
}

export default App
