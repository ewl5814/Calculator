import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ButtonPad from './ButtonPad.jsx'


function Calculator(props) {
  const [input, setInput] = useState('');
  
  function handleClick(event) {
    const newValue = input + event.target.value;
    setInput(newValue);
    console.log("current input");
    console.log(newValue);
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
