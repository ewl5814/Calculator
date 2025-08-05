import { useState } from 'react'
import { evaluate } from 'mathjs'
import { useNavigate } from "react-router"
import './Calculator.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ButtonPad from './ButtonPad.jsx'


function Calculator(props) {
  const [input, setInput] = useState('');
  const [text, setText] = useState('');
  const [sliceIndex, setSliceIndex] = useState(0);

  
  const url = "http://localhost:5000/history";

  const navigate = useNavigate();

  function handleClick(event) {
    if (event.target.value == '=') {
      const answer = evaluate(input);
      setInput('');
      setText(answer);
      setSliceIndex(0);
      create(input, evaluate(input));
    }
    else if (event.target.value == 'c') {
      setInput('');
      setText('');
    }
    else {
      const newInput = input + event.target.value;
      if (input.length + 1 <= 12) {
        if (event.target.value == '-' || event.target.value == '+' || event.target.value == '*' || event.target.value == '/') {
          setSliceIndex(newInput.length);
          setText(event.target.value);
        }
        else {
          setText(newInput.substring(sliceIndex));
          console.log(newInput.substring(sliceIndex));
        }
        setInput(newInput);
      }
      console.log(text);

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
      <div className="well" id="outer">
        <div className="row">
          <div className="well" id="display"> 
              <p id="input">{text}</p>
          </div>        
        </div>
        <p>TI-108</p>
        <div className="well inner">
          <div className="well inner" id="smallWell">
              <div className="row">
                <ButtonPad onClick={handleClick}/>
              </div>    
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator
