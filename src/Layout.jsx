import React from 'react'
import Navbar from './components/Navbar/Navbar'

const Layout = ({children}) => {
  return (
    <div className='d-flex w-100 container'>
    <div className='w-75'>
      {children}

    </div>
      <div className='w-25'>
        asdasd
      </div>
    </div>
  )
 
}

export default Layout