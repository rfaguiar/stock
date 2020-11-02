import React from 'react';
import './App.css';
import Header from "../Header";
import Button from "../../shared/Button";
import Container from "../../shared/Container";

function App() {
  return (
    <div className="App">
      <Header title={"Stock"} />
      <Container>
          <Button onClick={() => window.alert('UIIU')}>
              Click me
          </Button>          
      </Container>
    </div>
  );
}

export default App;
