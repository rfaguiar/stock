import React, {useState} from 'react';
import './App.css';
import Header from "../Header";
import Button from "../../shared/Button";
import Container from "../../shared/Container";
import Input from "../../shared/Input";

function App() {
    
    const [street, setStreet] = useState('')
    
  return (
    <div className="App">
      <Header title={"Stock"} />
      <Container>
          <Button onClick={() => window.alert('UIIU')}>
              Click me
          </Button>   
          <Input 
              label={"Street"}
              placeholder={"E.g: 15th Avenue"}
              onChange={e => setStreet(e.target.value)}
          />
      </Container>
    </div>
  );
}

export default App;
