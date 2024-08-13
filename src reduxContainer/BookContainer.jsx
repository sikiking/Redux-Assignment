

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { purchaseBook, fetchBooks, addToCart } from './BookAction';

function BookContainer() {
    const dispatch = useDispatch();
    const { NumberOfBooks, books, loading, error, cart } = useSelector(state => state);

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    const handleAddToCart = (book) => {
        dispatch(addToCart(book));
    };

    return (
        <>
            <h2 className="text-2xl font-bold mb-4">No of Books: {NumberOfBooks}</h2>

            <p>Add To cart to buy</p>
            {/* <button
                onClick={() => dispatch(purchaseBook())}
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            >
                Buy Book
            </button> */}

            {loading && <p className="text-gray-500">Loading books...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {books.map((book, index) => (
                    <div key={index} className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img
                            src={book.cover_image || 'https://via.placeholder.com/150'}
                            alt={book.title}
                            className="w-full h-48 object-cover mb-4 rounded"
                        />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{book.title}</h3>
                        <p className="text-sm text-gray-600 mb-1">Aurthor: {book.author}</p>
                        <p className="text-sm text-gray-500 mb-2">Publication year: {book.publication_year || 'No Date'}</p>
                        <p className="text-gray-700 text-base line-clamp-4 mb-4">{book.description || 'No Description Available'}</p>
                        <p className="text-lg font-bold mb-4">${book.price || '100'}</p>
                        <button
                            onClick={() => handleAddToCart(book)}
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default BookContainer;