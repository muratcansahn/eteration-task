import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom';
import './ProductDetailPage.scss';
import Button from '../../components/Global/Button/Button';
import { addToCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { Spin } from "antd";

const ProductDetailPage = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            // Fetch product from the API
            fetch(`https://5fc9346b2af77700165ae514.mockapi.io/products/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    setProduct(data);
                })
                .catch((error) => console.error("Error fetching product:", error));
            setLoading(false);
        }, 1000);
    }, []);
    const { id } = useParams();
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({ name: product.name, price: product.price, amount: 1 }));
        toast.success("Product added to cart");
    };
    return (
        <>
            {loading ? (
                <div className="spin-wrapper">
                    <Spin size="large" />
                </div>
            ) : (
                <div className="product-detail-wrapper">
                    <div className="h-100 w-100">
                        <img src={product.image} alt={product.name} className="product-detail-image" />
                    </div>
                    <div className="h-100 w-100 ms-3">
                        <div className="d-flex flex-column">
                            <h4 className="product-title">{product.name}</h4>
                            <span className="product-price">{product.price}₺</span>
                            <Button onClick={handleAddToCart} className="mt-3" text="Add to Cart" />
                        </div>
                        <p className="product-description py-3">
                            {product.description && product.description.slice(0, 400)}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductDetailPage