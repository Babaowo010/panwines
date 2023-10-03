import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages";
import Signup from "../pages/signup/signup";
import Login from "../pages/Login/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home />},
      // { path: "/index", element: "Login" } ,
      // { path: "/signup", element: "Signup" }
      { path: "/signup", element:<Signup/>},
      { path: "/login", element:<Login/>},
    ],
  },
]);
