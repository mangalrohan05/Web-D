import { useState } from "react"

function App() {
  const [count, setCount] = useState(2);
  return (
    <>
      <div>square of {count} is {(count**2)}</div>
      <button onClick={()=>setCount(count**2)}>Click</button> 
    </>
  )
}

export default App