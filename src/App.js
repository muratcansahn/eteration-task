import logo from './logo.svg';
import './App.scss';
import { Routes ,Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';

function App() {
  return (
  <>
  <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/product/:id" element={<ProductDetailPage />} />
  </Routes>

  </>
  );
}

export default App;
