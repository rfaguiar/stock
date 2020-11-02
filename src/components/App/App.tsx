import React from 'react';
import './App.css';
import Header from "../Header";
import Button from "../Button";

function App() {
  return (
    <div className="App">
      <Header title={"Stock"} />
      <div className={"Container"}>
          <Button onClick={() => window.alert('UIIU')}>
              Click me
          </Button>
      </div>
    </div>
  );
}

export default App;
