import { useState } from 'react'
import { evaluate } from 'mathjs'
import 'bootstrap/dist/css/bootstrap.min.css'
import ButtonPad from './ButtonPad.jsx'


function Calculator(props) {
  const [input, setInput] = useState('');
  
  function handleClick(event) {
    if (event.target.value == '=') {
      setInput(evaluate(input));
    }
    else if (event.target.value == 'c') {
      setInput('');
    }
    else {
      const newValue = input + event.target.value;
      setInput(newValue);
    }
  }

  return (
    <>
      <h1>Math Time</h1>
      <div className="well">
          <div className="row">
            <p>{input}</p>
            <ButtonPad onClick={handleClick}/>
          </div>    
      </div>
    </>
  );
}

export default Calculator
