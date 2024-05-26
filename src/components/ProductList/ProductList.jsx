import React, { useState, useEffect } from 'react';
import './ProductList.scss';
import ProductCard from '../ProductCard/ProductCard';
import { Pagination, Select } from 'antd';
import useIsMobile from "../../hooks/useIsMobile";
import { v4 as uuid } from "uuid";

const { Option } = Select;

const ProductList = ({ products }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(12);
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const isMobile = useIsMobile();

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
        <div className={`${!isMobile ? "ms-4" : ""} h-100 justify-content-center w-100`}>
            <div className="d-flex flex-wrap gap-4 mt-4 h-100">
                {displayedProducts.map((product) => (
                    <ProductCard key={uuid()} product={product} />
                ))}
            </div>
            {products.length > 11 && (
                <div
                    data-testid="pagination-component"
                    className={`${
                        !isMobile ? "" : "flex-column align-items-center "
                    } d-flex justify-content-center mt-4 w-100`}
                >
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={products.length}
                        onChange={onPageChange}
                        showSizeChanger={false}
                    />
                    <div className={`${isMobile ? "w-100 d-flex justify-content-center" : ""} `}>
                        <Select
                            defaultValue={pageSize}
                            style={{ marginLeft: "10px" }}
                            className={`${isMobile ? "w-25 mt-2" : ""}`}
                            onChange={onPageSizeChange}
                        >
                            <Option value={12}>12</Option>
                            <Option value={24}>24</Option>
                            <Option value={36}>36</Option>
                        </Select>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;
