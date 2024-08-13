import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>

    <Nav/>
    
    <div className="content mt-32">

        {children}

    </div>
    

    
    
    <Footer/>
    
    
    </>
  )
}

export default Layout
