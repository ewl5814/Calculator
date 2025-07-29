import { useState } from 'react'
import { evaluate } from 'mathjs'
import { useNavigate } from "react-router";

import 'bootstrap/dist/css/bootstrap.min.css'
import ButtonPad from './ButtonPad.jsx'


function Calculator(props) {
  const [input, setInput] = useState('');
  
  const url = "http://localhost:5000/history";

  const navigate = useNavigate();

  function handleClick(event) {
    if (event.target.value == '=') {
      setInput(evaluate(input));
      create(input, evaluate(input));
    }
    else if (event.target.value == 'c') {
      setInput('');
    }
    else {
      const newValue = input + event.target.value;
      setInput(newValue);
    }
  }

  async function create(input, answer) {
      const newHistory = input + '=' + answer;
      console.log(newHistory);
      if (answer != undefined) {
        const request = new Request(url, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({equation: newHistory})
        })
        try {
          const response = await fetch(request);
        }
        catch(error) {
          console.error("Error:", error);
        }
      }
    }

  return (
    <>
      <h1>Math Time</h1>
      <div className="well">
          <div className="row">
            <p>{input}</p>
            <ButtonPad onClick={handleClick}/>
            <button onClick={() => navigate("/history")}>H</button>
          </div>    
      </div>
    </>
  );
}

export default Calculator
