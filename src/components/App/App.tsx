import React, {useState} from 'react';
import './App.css';
import Header from "../Header";
import Container from "../../shared/Container";
import Table, {TableHeader} from "../../shared/Table";
import Products, {Product} from "../../shared/Table/Table.mockdata";
import ProductForm, {ProductCreator} from "../Products/ProductsForm";

const headers: TableHeader[] = [
    {key: 'name', value: 'Product'},
    {key: 'price', value: 'Price'},
    {key: 'stock', value: 'Available Stock', right: true}
]

function App() {
    const [products, setProducts] = useState(Products)
    const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(products[0])
    const handleProductSubmit = (product: ProductCreator) => {
        setProducts([
            ...products,
            {
                id: products.length + 1,
                ...product
            }
        ])
    }
    const handleProductUpdate = (newProduct: Product) => {
        setProducts(products.map(product => product.id === newProduct.id ? newProduct : product))
        setUpdatingProduct(undefined)
    }
    
    return (
    <div className="App">
      <Header title={"Stock"} />
      <Container>
          <Table 
              data={products} 
              headers={headers}
              enableActions
              onDelete={() => console.log('del')}
              onDetail={() => console.log('det')}
              onEdit={() => console.log('ed')}
          />
          <ProductForm 
              form={updatingProduct}
              onSubmit={handleProductSubmit}
              onUpdate={handleProductUpdate}
          />
      </Container>
    </div>
  );
}

export default App;
