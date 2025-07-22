import { useState } from 'react'
import './App.css'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Calculator from './Calculator.jsx'


function App() {
  const [input, setInput] = useState('Testing');
  return (
    <>
      <Calculator input={input} onCounterClick={() => handleCounterClick(0)}/>
    </>
  )
}

export default App
