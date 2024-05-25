import React, { useState, useEffect } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import SortandFilterBar from '../../components/SortandFilterBar/SortandFilterBar';
import './HomePage.scss';

const HomePage = () => {
  const [value, setValue] = useState(1);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([
  ]);
  const [autoCompleteTags, setAutoCompleteTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([
  ]);

  useEffect(() => {
    // Fetch products from the API
    fetch('https://5fc9346b2af77700165ae514.mockapi.io/products')
        .then(response => response.json())
        .then(data => {
          setProducts(data);
          setFilteredProducts(data);
          // Extract tags for autoCompleteOptions
          const tags = data.map(product => ({ name: product.name }));
          setAutoCompleteTags(tags);
        })
        .catch(error => console.error('Error fetching products:', error));
  }, []);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if(value === "oldtoNew"){
      setFilteredProducts([...filteredProducts].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)))
    }
    if(value === "newtoOld"){
      setFilteredProducts([...filteredProducts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
    }

    if(value === "priceLowtoHigh"){
      setFilteredProducts([...filteredProducts].sort((a, b) => a.price - b.price))
    }
    if(value === "priceHightoLow"){
      setFilteredProducts([...filteredProducts].sort((a, b) => b.price - a.price))
    }
  }, [value]);

  useEffect (() => {
    if(searchQuery){
    setFilteredProducts([
      ...products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    ])
    }
  }, [searchQuery]);

  const autoCompleteOptions = autoCompleteTags.map(tag => ({
    value: tag.name,
    label: tag.name,
  }));
  useEffect(() => {
    if(selectedTags.length > 0){
      setFilteredProducts([...products].filter(product => selectedTags.includes(product.name)))
    }
    else{
      setFilteredProducts([...products])
    }
  }, [selectedTags]);
  return (
    <div className='d-flex home-page-container'>
      <SortandFilterBar onChange={onChange} autoCompleteOptions={autoCompleteOptions} setSearchQuery={setSearchQuery} value={value} setSelectedTags={setSelectedTags} 
      selectedTags={selectedTags}
      />
    
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default HomePage;
