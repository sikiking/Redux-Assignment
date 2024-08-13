

import {
    BUY_BOOK,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE
} from './BookAction';

const initialState = {
    NumberOfBooks: 400,
    books: [],
    cart: [],
    loading: false,
    error: null,
};

const BookReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_BOOK:
            return {
                ...state,
                NumberOfBooks: state.NumberOfBooks - 1,
            };
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((_, index) => index !== action.payload),
            };
        case FETCH_BOOKS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                loading: false,
                books: action.payload,
            };
        case FETCH_BOOKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default BookReducer;