import React from 'react';
import './App.css';
import Header from "../Header";
import Container from "../../shared/Container";
import Table from "../../shared/Table";
import {TableHeader} from "../../shared/Table";
import Products from "../../shared/Table/Table.mockdata";

const headers: TableHeader[] = [
    {key: 'name', value: 'Product'},
    {key: 'price', value: 'Price'},
    {key: 'stock', value: 'Available Stock', right: true}
]

function App() {
    
    
  return (
    <div className="App">
      <Header title={"Stock"} />
      <Container>
          <Table data={Products} headers={headers}/>
      </Container>
    </div>
  );
}

export default App;
