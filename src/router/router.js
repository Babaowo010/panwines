import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages";
import Login from "../pages/Login/login";
import Signup from "../pages/Signup/signup";
import Forget from "../pages/Forget/forget";
import Product from "../pages/Product/product";
import Shopping from "../pages/Shopping/shopping";
import Cart from "../pages/Cart/cart";
import Productphoto from "../pages/Productphoto/productphoto";
import Checkout from "../pages/Checkout/checkout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/forget", element: <Forget /> },
      { path: "/product", element: <Product /> },
      { path: "/shopping", element: <Shopping /> },
      { path: "/cart", element: <Cart /> },
      { path: "/productphoto", element: <Productphoto /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
]);
