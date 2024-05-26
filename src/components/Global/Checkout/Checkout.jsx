import React from 'react'
import './Checkout.scss'
import "../../Global/Cart/Cart.scss"
import Button from "../../Global/Button/Button"
import { useSelector,useDispatch } from 'react-redux';
import { selectCart,removeAllFromCart } from '../../../redux/cartSlice';
import { calcTotalPrice } from "../../../utils";

const Checkout = () => {
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    const handleEmptyCart = () => {
        dispatch(removeAllFromCart());
    };
    return (
        <div className="cart-container">
            <h5>Checkout</h5>
            <div className="cart-card">
                <p>
                    Total Price: <span className="main-color font-bold">{calcTotalPrice(cart)}₺</span>
                </p>
                <Button text={"Checkout"} onClick={handleEmptyCart} className={"mt-3"} />
            </div>
        </div>
    );
};

export default Checkout