import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import Navbar from './components/Navbar/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Layout from './Layout';

function App() {
  return (
    <>
      <Navbar />
      <Layout>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
      </Layout>
    </>
  );
}

export default App;
