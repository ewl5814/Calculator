import { Button } from 'reactstrap';
import { useNavigate } from "react-router";
import './ButtonPad.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function ButtonPad(props) {

  const navigate = useNavigate();

  return (
    <>
    <div>
      <Button className="red" onClick={props.onClick} value="(">&#40;</Button>
      <Button className="red" onClick={props.onClick} value=")">&#41;</Button>
      <Button className="red" onClick={props.onClick} value="/">/</Button>
      <Button className="red right" onClick={props.onClick} value="*">x</Button>
    </div>
    <div>
      <Button className="white" onClick={props.onClick} value="7">7</Button>
      <Button className="white" onClick={props.onClick} value="8">8</Button>
      <Button className="white" onClick={props.onClick} value="9">9</Button>
      <Button className="red right" onClick={props.onClick} value="-">-</Button>
    </div>
    <div>
      <Button className="white" onClick={props.onClick} value="4">4</Button>
      <Button className="white" onClick={props.onClick} value="5">5</Button>
      <Button className="white" onClick={props.onClick} value="6">6</Button>
      <Button className="red right" onClick={props.onClick} value="+">+</Button>
    </div>
    <div>
      <Button className="white" onClick={props.onClick} value="1">1</Button>
      <Button className="white" onClick={props.onClick} value="2">2</Button>
      <Button className="white" onClick={props.onClick} value="3">3</Button>
      <Button className="red right" onClick={props.onClick} value="=">=</Button>
    </div>
    <div>
      <Button className="red" onClick={props.onClick} value="c">ON'C</Button>
      <Button className="white" onClick={props.onClick} value="0">0</Button>
      <Button className="white" onClick={props.onClick} value=".">.</Button>
      <Button className="red right" onClick={() => navigate("/history")}>H</Button>
    </div>
    </>
           
  )
}

export default ButtonPad
