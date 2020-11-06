import React from 'react';
import './App.css';
import Header from "../Header";
import Container from "../../shared/Container";
import ProductsCRUD from "../Products/ProductsCRUD";


function App() {
        
    return (
        <div className="App">
          <Header title={"Stock"} />
          <Container>
              <ProductsCRUD />
          </Container>
        </div>
      );
}

export default App;
