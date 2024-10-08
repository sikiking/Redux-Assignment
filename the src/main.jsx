import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './reduxContainer/BookStore'; 




createRoot(document.getElementById('root')).render(
  <StrictMode>



<Provider store={store}>
     <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>,
  </StrictMode>,
)


// src/index.jsx or App.jsx



// import React from 'react';
// import ReactDOM from 'react-dom';

// Ensure this path is correct

