import React, {useState} from 'react';
import './App.css';
import Header from "../Header";
import Container from "../../shared/Container";
import Table, {TableHeader} from "../../shared/Table";
import Products, {Product} from "../../shared/Table/Table.mockdata";
import ProductForm, {ProductCreator} from "../Products/ProductsForm";
import Swal from 'sweetalert2';

const headers: TableHeader[] = [
    { key: 'id', value: '#' },
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
    const handleProductEdit = (product: Product) => {
        console.log(product)
        setUpdatingProduct(product)
    }
    const handleProductDetail = (product: Product) => {
        Swal.fire(
            'Product details',
            `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
            'info'
        )
    }
    const deleteProduct = (id: number) => {
        setProducts(products.filter(product => product.id !== id))
    }
    const handleProductDelete = (product: Product) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won1t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#09f',
            cancelButtonColor: '#d33',
            confirmButtonText: `Yes, delete ${product.name}!`
        }).then(result => {
            if (result.value) {
                deleteProduct(product.id)
                Swal.fire('Deleted!', 'Your product has been deleted', 'success')
            }
        })
    }
    
    return (
    <div className="App">
      <Header title={"Stock"} />
      <Container>
          <Table 
              data={products} 
              headers={headers}
              enableActions
              onDelete={handleProductDelete}
              onDetail={handleProductDetail}
              onEdit={handleProductEdit}
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
