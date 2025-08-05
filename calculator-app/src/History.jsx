import { useNavigate } from "react-router";
import { useEffect, useState } from 'react';
import { Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import { ListGroup, ListGroupItem } from 'reactstrap';
import './History.css'


function History(props) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const url = 'http://localhost:5000/history'

  async function clearHistory() {
    const request = new Request(url, {
      method: "DELETE",
    })
    try {
      const response = await fetch(request);
    }
    catch(error) {
      console.error("Error:", error);
    }    
  }

  function onClearHistory() {
    clearHistory();
    setData([]);
  }

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const response = await fetch(
          url
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let postsData = await response.json();
        setData(postsData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } 
    };

    fetchDataForPosts();
  }, []);

  return (
    <>
      <div className="well" id="well">
        <ListGroup id="history">
          {data.map((entry, i) => (
            <ListGroupItem key={i} className="list-group-item border-0" value={entry}>{entry}</ListGroupItem>
          ))}
        </ListGroup>
        <Button className="white" onClick={onClearHistory}>ON/C</Button>
        <Button className="red" onClick={() => navigate("/")}>Back</Button>
      </div>
    </>       
  )
}

export default History