import {Action, Thunk} from "../index";
import {ProductCreator} from "../../components/Products/ProductsForm";
import {getAllProducts} from "../../services/Products.service";
import {Product} from "../../shared/Table/Table.mockdata";

export const getProducts = ():Thunk<Product[]> => async (dispatch) => {
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