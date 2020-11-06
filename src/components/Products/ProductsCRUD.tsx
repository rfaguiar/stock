import React, {useEffect, useState} from "react";
import Table, {TableHeader} from "../../shared/Table";
import {Product} from "../../shared/Table/Table.mockdata";
import ProductForm, {ProductCreator} from "./ProductsForm";
import Swal from "sweetalert2";
import {connect, useDispatch} from "react-redux";
import * as ProductAction from "../../redux/Products/Product.actions";
import {RootState} from "../../redux";

const headers: TableHeader[] = [
    { key: 'id', value: '#' },
    { key: 'name', value: 'Product' },
    { key: 'price', value: 'Price' },
    { key: 'stock', value: 'Available Stock', right: true }
]

declare interface ProductsCRUDProps {
    products: Product[]
}

const ProductsCRUD: React.FC<ProductsCRUDProps> = (props) => {
    const dispatch = useDispatch()
    //const [products, setProducts] = useState<Product[]>([])
    const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(undefined)
    useEffect(() => {
        fetchData().then()
    }, [])
    async function fetchData() {
        try {
            await dispatch(ProductAction.getProducts())            
        } catch (err) {
            await Swal.fire('Oops!', err.message, 'error')            
        }
    }
    const handleProductSubmit = async (product: ProductCreator) => {
        try {
            dispatch(ProductAction.insertNewProduct(product))
        } catch (err) {
            await Swal.fire('Oops!', err.message, 'error')
        }
    }
    const handleProductUpdate = async (newProduct: Product) => {
        try {
            await dispatch(ProductAction.updateProduct(newProduct))
            setUpdatingProduct(undefined)
        } catch (err) {
            await Swal.fire('Oops!', err.message, 'error')
        }
    }
    const handleProductEdit = (product: Product) => {
        setUpdatingProduct(product)
    }
    const handleProductDetail = (product: Product) => {
        Swal.fire(
            'Product details',
            `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
            'info'
        ).then()
    }
    const deleteProduct = async (id: string) => {
        try {
            await ProductAction.deleteProduct(id)
            await Swal.fire('Uhul!', 'Product successfully deleted', 'success')
        } catch (err) {
            await Swal.fire('Oops!', err.message, 'error')
        }
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
                deleteProduct(product._id).then()
            }
        })
    }
    
    return <>
        <Table
            data={props.products}
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
    </>
}

const mapStateToProps = (state: RootState) => ({
    products: state.products
})

export default connect(mapStateToProps)(ProductsCRUD)