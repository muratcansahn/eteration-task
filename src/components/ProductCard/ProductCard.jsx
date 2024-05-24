import React from 'react';
import './ProductCard.scss';
import Button  from '../Global/Button/Button';
const ProductCard = ({product}) => (
<div className='product-card'>

    <img src={product.image} alt={product.name}
    className='product-card-image'
    />
    <p className='product-price w-100'>{product.price}₺</p>
    <h4 >
        {product.name}
    </h4>
    <Button text='Add to Cart'/>
  

    

</div>
 
);
export default ProductCard;