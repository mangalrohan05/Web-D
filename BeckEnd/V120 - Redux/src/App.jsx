import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/counter/counterSlice'


function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()

  return (
    <>
    <button onClick={() => dispatch(decrement())}>-</button>
      {count}
    <button onClick={() => dispatch(increment())}>+</button>
    </>
  )
}

export default App
