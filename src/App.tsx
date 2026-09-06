import { Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import BottomNav from './components/common/BottomNav';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
      <BottomNav />
    </>
  );
}

export default App;