import { useRoutes } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Faq from "./pages/faq/FAQ";
import Club from "./pages/club/Club";
import "./App.css";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/produkter", element: <Products /> },
    { path: "/faq", element: <Faq /> },
    { path: "/kundeklub", element: <Club /> },
  ]);

  return <>{routes}</>;
}

export default App;
