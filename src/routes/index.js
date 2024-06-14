import { useNavigate } from "react-router-dom";
import PageNotFound from "../pages/404";
import Login from "../pages/Auth/Login";
import ResetPassword from "../pages/Auth/ResetPassword";
import Signup from "../pages/Auth/Signup";
import Cart from "../pages/Cart/Cart";
import Dashboard from "../pages/Dashboard";
import AdminOrders from "../pages/Dashboard/Orders";
import OrderDetails from "../pages/Dashboard/Orders/OrderDetails";
import AllProducts from "../pages/Dashboard/Products";
import Reviews from "../pages/Dashboard/Reviews";
import Users from "../pages/Dashboard/Users";
import Home from "../pages/Home/Home";
import Orders from "../pages/Orders";
import Payment from "../pages/Payment";
import PaymentSuccess from "../pages/Payment/PaymentSuccess";
import Product from "../pages/Product/Product";
import ProductDetail from "../pages/Product/ProductDetail/ProductDetail";
import Profile from "../pages/Profile";
import { useEffect, useState } from "react";
import VerifyEmail from "../pages/Auth/VerifyEmail";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

export const routes = [
  {
    component: Home,
    path: "/",
    isProtected: false,
    adminRoute: false,
  },
  {
    component: Product,
    path: "/product",
    isProtected: false,
    adminRoute: false,
  },
  {
    component: ProductDetail,
    path: "/product/:id",
    isProtected: false,
    adminRoute: false,
  },
  {
    component: Login,
    path: "/login",
    isProtected: false,
    adminRoute: false,
  },
  {
    component: Signup,
    path: "/signup",
    isProtected: false,
    adminRoute: false,
  },
  {
    component: ResetPassword,
    path: "/reset_password/:id",
    isProtected: false,
    adminRoute: false,
  },
  {
    component: Cart,
    path: "/cart",
    isProtected: true,
    adminRoute: false,
  },
  {
    component: Payment,
    path: "/payment",
    isProtected: true,
    adminRoute: false,
  },
  {
    component: PaymentSuccess,
    path: "/payment_success",
    isProtected: true,
    adminRoute: false,
  },
  {
    component: Orders,
    path: "/orders",
    isProtected: true,
    adminRoute: false,
  },
  {
    component: Profile,
    path: "/profile",
    isProtected: true,
    adminRoute: false,
  },
  {
    component: VerifyEmail,
    path: "/verifyemail",
    isProtected: false,
    adminRoute: false,
  },
  {
    component: Dashboard,
    path: "/admin/dashboard",
    isProtected: true,
    adminRoute: true,
  },
  {
    component: AdminOrders,
    path: "/admin/orders",
    isProtected: true,
    adminRoute: true,
  },
  {
    component: OrderDetails,
    path: "/admin/orders/:id",
    isProtected: true,
    adminRoute: true,
  },
  {
    component: Users,
    path: "/admin/users",
    isProtected: true,
    adminRoute: true,
  },
  {
    component: AllProducts,
    path: "/admin/product",
    isProtected: true,
    adminRoute: true,
  },
  {
    component: Reviews,
    path: "/admin/reviews",
    isProtected: true,
    adminRoute: true,
  },
];

export const Public = ({ children }) => {
  return children;
};

export const RequireAuth = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token") || "";
    if (token) {
      setIsAuthenticated(true);
    } else {
      navigate("/login");
    }
  }, [navigate]);
  return isAuthenticated ? children : null;
};

export const RequireAdmin = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const user = useSelector((state) => state.userProfile.user);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
    if (user?.role === "admin") {
      setIsAdmin(true);
    } else {
      navigate("/login");
    }
  }, [navigate]);
  return isAuthenticated && isAdmin ? children : null;
};
