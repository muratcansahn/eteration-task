import React from 'react';
import './ProductCard.scss';
import Button  from '../Global/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, selectCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const ProductCard = ({product}) => {
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({ name: product.name, price: product.price,amount: 1 }));
        toast.success('Product added to cart');
    };
    return (
        <div className="product-card">
            <img src={product?.image} alt={product?.name} className="product-card-image" />
            <p className="product-price w-100">{product?.price}₺</p>
            <h4>
                <Link to={`/product/${product?.id}`}>{product?.name}</Link>
            </h4>
            <Button text="Add to Cart" onClick={handleAddToCart} />
        </div>
    );
}
export default ProductCard;