import { useState } from 'react'
import './App.css'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Calculator from './Calculator.jsx'
import History from './History.jsx'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


function App() {
  const [input, setInput] = useState('Testing');
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Calculator input={input} onCounterClick={() => handleCounterClick(0)}/>}
          />
          <Route
            path="/history"
            element={<History />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
