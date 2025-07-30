import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'

function App() {

  return (
    <>
      <Navbar />  
      <Manager/>
      <div className='text-2xl text-amber-200'>
        My Ui
      </div>
    </>
  )
}

export default App
