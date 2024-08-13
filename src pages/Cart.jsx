
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, purchaseBook } from '../reduxContainer/BookAction'; 
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const handleRemove = (index) => {
        dispatch(removeFromCart(index));
    };

    const handlePurchase = () => {
        dispatch(purchaseBook()); 
    };

   const navi = useNavigate()

   
  function gotoHome () {

    navi("/")
  }

    return (
        <div className="p-4">
            <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>
                    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                            <div className="space-y-6">
                                {cart.length === 0 ? (
                                    <p className="text-gray-500">Your cart is empty.</p>
                                ) : (
                                    cart.map((item, index) => (
                                        <div key={index} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                                <a href="#" className="shrink-0 md:order-1">
                                                    <img
                                                        className="h-20 w-20 dark:hidden"
                                                        src={item.cover_image || 'https://via.placeholder.com/150'}
                                                        alt={item.title}
                                                    />
                                                    <img
                                                        className="hidden h-20 w-20 dark:block"
                                                        src={item.imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
                                                        alt={item.title}
                                                    />
                                                </a>
                                                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                    <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">
                                                        {item.title}
                                                    </a>
                                                    <p className="text-sm text-gray-600 mb-1">Aurthor: {item.author || 'Unknown Author'}</p>
                                                    <p className="text-sm text-gray-500 mb-2">Year: {item.publication_year || 'No Date'}</p>
                                                    <p className="text-gray-700 text-base line-clamp-4 mb-4">{item.description || 'No Description Available'}</p>
                                                    <button onClick={() => handleRemove(index)} className="text-red-500 hover:underline">Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                            {cart.length > 0 && (
                                <button onClick={() => {handlePurchase(); gotoHome()}} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                                    Purchase Now
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;