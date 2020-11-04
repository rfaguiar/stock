import {Product} from "../../shared/Table/Table.mockdata";
import {Action} from "./Products.redux";

export const insertNewProduct = (): Action<Product> => {
    return {
        type: 'INSERT_NEW_PRODUCT',
        payload: {
            _id: 'wq21354d',
            name: 'Cookie',
            price: 0.35,
            stock: 700
        }
    }
}