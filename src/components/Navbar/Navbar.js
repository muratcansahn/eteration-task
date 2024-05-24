import React from 'react'
import './Navbar.scss'
import "../../App.scss"
import { Link , BrowserRouter as Router} from "react-router-dom";
import { Input } from 'antd';
import { SearchOutlined ,ShoppingCartOutlined ,UserOutlined} from '@ant-design/icons';


const Navbar = () => {
  return (
    <>
    <nav className='navbar d-flex justify-content-between align-items-center '>
        <div className='container'>
          <div className='navbar-left w-50 d-flex align-items-center'>
          <Link to='/' className='company-title text-decoration-none'>
            eteration 
          </Link>

          <Input placeholder="Search" className='search-input'
          prefix={<SearchOutlined />}
          />

          </div>
          <div className='d-flex w-50 justify-content-end'>
            <div className='d-flex align-items-center'>
              <ShoppingCartOutlined className='cart-icon' style={{ fontSize: '1.5em' }} />
              <p> 1000000</p>
            </div>
            <div className='d-flex align-items-center ms-3'>
              <UserOutlined  className='cart-icon' style={{ fontSize: '1.5em' }} />
              <p> 1000000</p>
            </div>
            <div> 

            </div>
            </div>
        </div>
    </nav>

    </>
  )
}

export default Navbar