import {Action} from "./Products.redux";
import {ProductCreator} from "../../components/Products/ProductsForm";

export const insertNewProduct = (payload: ProductCreator): Action<ProductCreator> => {
    return {
        type: 'INSERT_NEW_PRODUCT',
        payload
    }
}