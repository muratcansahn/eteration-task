import React from 'react'
import './Checkout.scss'
import "../../Global/Cart/Cart.scss"
import Button from "../../Global/Button/Button"


const Checkout = () => {
  return (
    <div className='cart-container'>
    <h5>
       Checkout
    </h5>
    <div className='cart-card'>
        <p>
            Total Price: <span className='main-color font-bold'>$1000</span>

        </p>
        <Button text={"Checkout"} className={"mt-3"} />
    </div>
    </div>
  )
}

export default Checkout