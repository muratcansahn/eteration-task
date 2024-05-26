import React, { useState, useEffect } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import SortandFilterBar from '../../components/SortandFilterBar/SortandFilterBar';
import './HomePage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setAutoCompleteOptions } from '../../redux/autoCompleteOptionsSlice';
import { setSearchQuery } from '../../redux/searchQuerySlice'; 
import useIsMobile from "../../hooks/useIsMobile";
import MobileDrawer from "../../components/MobileDrawer/MobileDrawer";

const HomePage = () => {
  const [value, setValue] = useState(1);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const dispatch = useDispatch();
  const autoCompleteOptions = useSelector(state => state.autoCompleteOptions.autoCompleteOptions);
  const searchQuery = useSelector(state => state.searchQuery.searchQuery);

  useEffect(() => {
    // Fetch products from the API
    fetch('https://5fc9346b2af77700165ae514.mockapi.io/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
        // Extract tags for autoCompleteOptions
        const tags = data.map(product => product.name);
        const autoCompleteOptionsTag = tags.map(tag => ({ value: tag }));
        dispatch(setAutoCompleteOptions(autoCompleteOptionsTag));
      })
      .catch(error => console.error('Error fetching products:', error));
  }, [dispatch]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value === "oldtoNew") {
      setFilteredProducts([...filteredProducts].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
    }
    if (value === "newtoOld") {
      setFilteredProducts([...filteredProducts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    }
    if (value === "priceLowtoHigh") {
      setFilteredProducts([...filteredProducts].sort((a, b) => a.price - b.price));
    }
    if (value === "priceHightoLow") {
      setFilteredProducts([...filteredProducts].sort((a, b) => b.price - a.price));
    }
  }, [value]);

  useEffect(() => {
    if (searchQuery) {
      setFilteredProducts([
        ...products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
      ]);
    }
  }, [searchQuery, products]);

  useEffect(() => {
    if (selectedTags.length > 0) {
      setFilteredProducts([...products].filter(product => selectedTags.includes(product.name)));
    } else {
      setFilteredProducts([...products]);
    }
  }, [selectedTags, products]);
const isMobile = useIsMobile();
 
  return (
      <div className={`d-flex home-page-container ${isMobile ? "flex-column" : ""}`}>
          {isMobile ? (
              <MobileDrawer
                  value={value}
                  onChange={onChange}
                  autoCompleteOptions={autoCompleteOptions}
                  setSearchQuery={(query) => dispatch(setSearchQuery(query))}
                  setSelectedTags={setSelectedTags}
                  selectedTags={selectedTags}
              />
          ) : (
              <SortandFilterBar
                  onChange={onChange}
                  autoCompleteOptions={autoCompleteOptions}
                  setSearchQuery={(query) => dispatch(setSearchQuery(query))}
                  value={value}
                  setSelectedTags={setSelectedTags}
                  selectedTags={selectedTags}
              />
          )}
          <ProductList products={filteredProducts} />
      </div>
  );
}

export default HomePage;
