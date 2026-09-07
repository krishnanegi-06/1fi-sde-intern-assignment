import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import BottomNav from './components/common/BottomNav';

function App() {
  const [activeNav, setActiveNav] = useState('shop');
  const navigate = useNavigate();

  const handleNavChange = (tabId: string) => {
    setActiveNav(tabId);
    navigate('/');
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
      <BottomNav activeTab={activeNav} onTabChange={handleNavChange} />
    </>
  );
}

export default App;