import Products, {Product} from "../../shared/Table/Table.mockdata";
import {Action} from "../index";

export default function productsRedux(state= Products, action: Action): Product[] {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return [...action.payload]
        case 'INSERT_NEW_PRODUCT':
            return [...state, {
                ...action.payload,
                _id: String(state.length + 1)
            }]
        default:
            return state
    }
}