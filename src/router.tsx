import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Organization from "./pages/Organization";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Activities from "./pages/Activities";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "organization", element: <Organization /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <ProductDetail /> },
      { path: "services", element: <Services /> },
      { path: "activites", element: <Activities /> },
    ],
  },
]);

export default router;
