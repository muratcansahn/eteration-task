import React from 'react';
import './ProductCard.scss';
import Button  from '../Global/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, selectCart } from '../../redux/cartSlice';
const ProductCard = ({product}) => {
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    console.log(cart)
    console.log(product)
    const handleAddToCart = () => {
        dispatch(addToCart({ name: product.name, price: product.price }));
    };
    return (
<div className='product-card'>
    <img src={product.image} alt={product.name}
    className='product-card-image'
    />
    <p className='product-price w-100'>{product.price}₺</p>
    <h4 >
        {product.name}
    </h4>
    <Button text='Add to Cart'
    onClick={handleAddToCart}
    />
</div>
    )
}
export default ProductCard;