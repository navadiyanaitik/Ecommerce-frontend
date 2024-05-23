import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/navbar/Navbar';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
