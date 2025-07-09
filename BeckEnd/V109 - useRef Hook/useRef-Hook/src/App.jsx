import { useState, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // let a = 0;
  // const a = useRef(0) //Prevents re-rendering of this component

  // useEffect(() => { //re-renders entire doc
  //   a.current = a.current+1;
  //   console.log(`re-rendering and value of a is ${a.current}`);
  // })

  const ref = useRef();
  const i = useRef(255);
  const j = useRef(200);
  const k = useRef(150);

  useEffect(()=>{
    console.log(`Rendering and changing color to rgb(${i.current}, ${j.current}, ${k.current})`);
    ref.current.style.backgroundColor = `rgb(${i.current  }, ${j.current  }, ${k.current  })`;
    i.current = Math.floor(Math.random()*255)
    j.current = Math.floor(Math.random()*255)
    k.current = Math.floor(Math.random()*255)
  })
  
  useEffect(() => {
      ref.current.style.backgroundColor = `red`;
  }, [])
  

  return (
    <>
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
        <button ref={ref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
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
