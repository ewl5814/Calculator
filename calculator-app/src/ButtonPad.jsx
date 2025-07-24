import { Button } from 'reactstrap';
import { useNavigate } from "react-router";

import 'bootstrap/dist/css/bootstrap.min.css'

function ButtonPad(props) {


  return (
    <>
    <div>
      <button className="btn btn-default target" onClick={props.onClick} value="(">&#40;</button>
      <button className="btn btn-default target" onClick={props.onClick} value=")">&#41;</button>
      <button className="btn btn-default target" onClick={props.onClick} value="/">/</button>
      <button className="btn btn-default target" onClick={props.onClick} value="*">x</button>
    </div>
    <div>
      <button className="btn btn-default target" onClick={props.onClick} value="7">7</button>
      <button className="btn btn-default target" onClick={props.onClick} value="8">8</button>
      <button className="btn btn-default target" onClick={props.onClick} value="9">9</button>
      <button className="btn btn-default target" onClick={props.onClick} value="-">-</button>
    </div>
    <div>
      <button className="btn btn-default target" onClick={props.onClick} value="4">4</button>
      <button className="btn btn-default target" onClick={props.onClick} value="5">5</button>
      <button className="btn btn-default target" onClick={props.onClick} value="6">6</button>
      <button className="btn btn-default target" onClick={props.onClick} value="+">+</button>
    </div>
    <div>
      <button className="btn btn-default target" onClick={props.onClick} value="1">1</button>
      <button className="btn btn-default target" onClick={props.onClick} value="2">2</button>
      <button className="btn btn-default target" onClick={props.onClick} value="3">3</button>
      <button className="btn btn-default target" onClick={props.onClick} value="=">=</button>
    </div>
    <div>
      <button className="btn btn-default target" onClick={props.onClick} value="c">ON'C</button>
      <button className="btn btn-default target" onClick={props.onClick} value="0">0</button>
      <button className="btn btn-default target" onClick={props.onClick} value=".">.</button>
    </div>
    </>
           
  )
}

export default ButtonPad
