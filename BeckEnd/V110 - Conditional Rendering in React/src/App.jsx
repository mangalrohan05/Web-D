import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false);
  const [todos] = useState([
    {
      title: "T1",
      desc: "Working this todo"
    },
    {
      title: "T2",
      desc: "Working this todo"
    },
    {
      title: "T3",
      desc: "Working this todo"
    },
  ])

  const Todo = ({ todo }) => {
    return (
      <>
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
      </>
    )
  }

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
      {showbtn ? <button> Showbtn is true </button> : <button> Showbtn is false </button>}
      {/* {showbtn && <button> Show when other button clicked! </button>} */}
      <div className="card">
        <button onClick={() => { setCount((count) => count + 1); setshowbtn(!showbtn) }}>
          count is {count}
        </button>

        {todos.map(todo =>{
          return <Todo todo = {todo}/>
        })}

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
