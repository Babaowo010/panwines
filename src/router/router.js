import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages";
import Login from "../pages/Login";
import Productpage from "../pages/productpage/productpage"
import SignUp from "../pages/signup";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      {
        path: "/productpage",
        element: <Productpage/>
    },
    ],
  },
]);
