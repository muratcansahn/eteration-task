import './Cart.scss'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { selectCart, addToCart, removeFromCart } from '../../../redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);

    const handleAddItem = (item) => {
        dispatch(addToCart({ name: item.name, price: item.price, amount: 1 }));
    };

    const handleRemoveItem = (item) => {
        if (item.amount > 1) {
            dispatch(addToCart({ name: item.name, price: item.price, amount: -1 }));
        } else {
            dispatch(removeFromCart({ name: item.name }));
        }
    };

    return (
        <div className="cart-container">
            <h5>Cart </h5>
            <div className="cart-card">
                {cart?.length === 0 && <div className="empty-cart">Cart is empty</div>}
                {cart?.map((item) => (
                    <div key={item.name} className="d-flex w-100 cart-item">
                        <div className="d-flex w-100 justify-content-between">
                            <div>
                                {item.name}
                                <div className="main-color">{item.price}₺</div>
                            </div>
                            <Button.Group>
                                <Button
                                    onClick={() => handleRemoveItem(item)}
                                    icon={<MinusOutlined />}
                                    aria-label="Remove item"
                                />

                                <span className="cart-count">{item.amount}</span>
                                <Button
                                    onClick={() => handleAddItem(item)}
                                    icon={<PlusOutlined />}
                                    aria-label="Add item"
                                />
                            </Button.Group>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
