import React from 'react'
import { Provider } from 'react-redux';
import store from '../reduxContainer/BookStore';
import BookContainer from '../reduxContainer/BookContainer';
import Layout from '../components/Layout';

const Home = () => {

  return (

    <>
       <Layout > 

        
    
    <div className="mt-10 text-center ">
    <Provider store={store}>
      <BookContainer/>
    </Provider>
    </div>
    
    </Layout>
    </>
   
  )
}

export default Home
