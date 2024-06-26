import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import Navbar from './components/Navbar/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Layout from './components/Layout/Layout';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import NotFound from "./components/NotFound/NotFound";


function App() {
  return (
      <>
          <Navbar />
          <ToastContainer position="top-center" />
          <Layout>
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/product/:id" element={<ProductDetailPage />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </Layout>
      </>
  );
}

export default App;
