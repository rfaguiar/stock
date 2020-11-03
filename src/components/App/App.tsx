import React, {useState} from 'react';
import './App.css';
import Header from "../Header";
import Container from "../../shared/Container";
import Table, {TableHeader} from "../../shared/Table";
import Products from "../../shared/Table/Table.mockdata";
import ProductForm, {ProductCreator} from "../Products/ProductsForm";

const headers: TableHeader[] = [
    {key: 'name', value: 'Product'},
    {key: 'price', value: 'Price'},
    {key: 'stock', value: 'Available Stock', right: true}
]

function App() {
    const [products, setProducts] = useState(Products)
    const handleProductSubmit = (product: ProductCreator) => {
        setProducts([
            ...products,
            {
                id: products.length + 1,
                ...product
            }
        ])
    }
    
    return (
    <div className="App">
      <Header title={"Stock"} />
      <Container>
          <Table data={products} headers={headers}/>
          <ProductForm onSubmit={handleProductSubmit}/>
      </Container>
    </div>
  );
}

export default App;
