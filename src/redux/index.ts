import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import Products from './Products/Products.redux';
import thunk from "redux-thunk";

const reducers = combineReducers({
    products: Products
})

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        //@ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store