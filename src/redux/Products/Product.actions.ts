import {Action} from "./Products.redux";
import {ProductCreator} from "../../components/Products/ProductsForm";
import {getAllProducts} from "../../services/Products.service";

export const getProducts = () => async (dispatch: any) => {
    const payload = await getAllProducts();
    dispatch({
        type: 'FETCH_PRODUCTS',
        payload
    })
}

export const insertNewProduct = (payload: ProductCreator): Action<ProductCreator> => {
    return {
        type: 'INSERT_NEW_PRODUCT',
        payload
    }
}