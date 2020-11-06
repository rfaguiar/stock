import React, {useEffect, useState} from "react";
import Table, {TableHeader} from "../../shared/Table";
import {Product} from "../../shared/Table/Table.mockdata";
import {deleteSingleProduct, updateSingleProduct} from "../../services/Products.service";
import ProductForm, {ProductCreator} from "./ProductsForm";
import Swal from "sweetalert2";
import {connect, useDispatch} from "react-redux";
import {getProducts, insertNewProduct} from "../../redux/Products/Product.actions";

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
            await dispatch(getProducts())            
        } catch (err) {
            await Swal.fire('Oops!', err.message, 'error')            
        }
    }
    const handleProductSubmit = async (product: ProductCreator) => {
        try {
            dispatch(insertNewProduct(product))
            await fetchData()
        } catch (err) {
            await Swal.fire('Oops!', err.message, 'error')
        }
    }
    const handleProductUpdate = async (newProduct: Product) => {
        try {
            await updateSingleProduct(newProduct)
            setUpdatingProduct(undefined)
            await fetchData()
        } catch (err) {
            await Swal.fire('Oops!', err.message, 'error')
        }
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
        ).then()
    }
    const deleteProduct = async (id: string) => {
        try {
            await deleteSingleProduct(id)
            await Swal.fire('Uhul!', 'Product successfully deleted', 'success')
            await fetchData()
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

const mapStateToProps = (state: any) => ({
    products: state.products
})

export default connect(mapStateToProps)(ProductsCRUD)