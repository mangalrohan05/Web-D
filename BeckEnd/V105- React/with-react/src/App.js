import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className='App'>
    <Navbar logoText = "Rohan"></Navbar>

      <div className="value">{value}</div>
      <button onClick={()=>{setValue(value+1)}}>Click here</button>

      <Footer></Footer>
    </div>
  );
}

export default App;
