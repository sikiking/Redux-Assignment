
export const BUY_BOOK = 'BUY_BOOK';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';


export const purchaseBook = () => ({
    type: BUY_BOOK,
});

export const addToCart = (book) => ({
    type: ADD_TO_CART,
    payload: book,
});

export const removeFromCart = (index) => ({
    type: REMOVE_FROM_CART,
    payload: index,
});

export const fetchBooksRequest = () => ({
    type: FETCH_BOOKS_REQUEST,
});

export const fetchBooksSuccess = (books) => ({
    type: FETCH_BOOKS_SUCCESS,
    payload: books,
});

export const fetchBooksFailure = (error) => ({
    type: FETCH_BOOKS_FAILURE,
    payload: error,
});


export const fetchBooks = () => {
    return async (dispatch) => {
        dispatch(fetchBooksRequest());
        try {
            const response = await fetch('https://freetestapi.com/api/v1/books');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Fetched Data:', data); 
            
            
            dispatch(fetchBooksSuccess(data || [])); 
        } catch (error) {
            console.error('Fetch error:', error); 
            dispatch(fetchBooksFailure(error.message));
        }
    };
};