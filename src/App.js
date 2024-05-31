import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import ProductDetail from './pages/Product/ProductDetail/ProductDetail';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import ResetPassword from './pages/Auth/ResetPassword';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/Payment/PaymentSuccess';
import PageNotFound from './pages/404';
import Orders from './pages/Orders';
import AdminOrders from './pages/Dashboard/Orders'
import Dashboard from './pages/Dashboard';
import AllProducts from './pages/Dashboard/Products';
import Users from './pages/Dashboard/Users/index.js';
import OrderDetails from './pages/Dashboard/Orders/OrderDetails.js';
import Reviews from './pages/Dashboard/Reviews/index.js';
import Profile from './pages/Profile/index.js';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/reset_password' element={<ResetPassword />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/payment_success' element={<PaymentSuccess />} />
          <Route path='/not_found' element={<PageNotFound />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/profile' element={<Profile />} />

          {/* Admin */}
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/orders' element={<AdminOrders />} />
          <Route path='/admin/orders/:id' element={<OrderDetails />} />
          <Route path='/admin/users' element={<Users />} />
          <Route path="/admin/product" element={<AllProducts />} />
          <Route path="/admin/reviews" element={<Reviews />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
