import React, { useState, useEffect } from 'react';
import './ProductList.scss';
import ProductCard from '../ProductCard/ProductCard';
import { Pagination, Select } from 'antd';

const { Option } = Select;

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(12);
    const [displayedProducts, setDisplayedProducts] = useState([]);

    useEffect(() => {
        // Fetch products from the API
        fetch('https://5fc9346b2af77700165ae514.mockapi.io/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    useEffect(() => {
        // Calculate the start and end index of the displayed products
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        setDisplayedProducts(products.slice(startIndex, endIndex));
    }, [currentPage, pageSize, products]);

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const onPageSizeChange = (value) => {
        setPageSize(value);
        setCurrentPage(1); // Reset page to 1 when page size changes
    };

    return (
        <>
            <div className='d-flex flex-wrap gap-4 mt-4 h-100'>
                {displayedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className='d-flex justify-content-center mt-4'>
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={products.length}
                    onChange={onPageChange}
                    showSizeChanger={false}
                />
                <Select defaultValue={pageSize} style={{ marginLeft: '10px' }} onChange={onPageSizeChange}>
                    <Option value={12}>12</Option>
                    <Option value={24}>24</Option>
                    <Option value={36}>36</Option>
                </Select>
            </div>
     
        </>
    );
};

export default ProductList;
