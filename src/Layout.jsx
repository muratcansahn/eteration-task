import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Cart from './components/Global/Cart/Cart'
import Checkout from './components/Global/Checkout/Checkout'

const Layout = ({children}) => {
  return (
    <div className='d-flex w-100 container'>
    <div className='w-75'>
      {children}

    </div>
      <div className='w-25'>
  <Cart/>
  <Checkout/>
  
      </div>
    </div>
  )
 
}

export default Layout