import { createBrowserRouter } from "react-router-dom";
import App from "../App";

// import Vagan from "../components/first/first";
// import Mores from "../components/more/more";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      //   { index: true, element: <Vagan /> },
      //   { path: "/mores", element: <Mores /> },
    ],
  },
]);
