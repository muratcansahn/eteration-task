import React from 'react'
import Cart from '../Global/Cart/Cart'
import Checkout from '../Global/Checkout/Checkout'
import './Layout.scss'

const Layout = ({children}) => {
    return (
        <div className="main-wrapper container">
            <div className="first-column">{children}</div>
            <div className="second-column">
                <Cart />
                <Checkout />
            </div>
        </div>
    );
}
export default Layout