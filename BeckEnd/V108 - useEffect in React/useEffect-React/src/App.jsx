import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(2);
  const [power, setPower] = useState(4);

  useEffect(() =>{
    alert("I run on every render");
  })
  
  useEffect(() => {
    alert("This runs for the first time only (setup after every render)")
  }, [])

  useEffect(() => {
    alert("Running when count or power changed");
  }, [count, power])
  
  return (
    <>
       <Navbar color = {"Navy Blue"}></Navbar>
      <div>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setPower((power) => power**2)}>
          square = {power}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
