import { useRoutes } from "react-router-dom";
import Home from "./pages/home/Home";
import Produkter from "./pages/products/Produkter";
import Faq from "./pages/faq/FAQ";
import Club from "./pages/club/Club";
import "./App.css";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/produkter", element: <Produkter /> },
    { path: "/faq", element: <Faq /> },
    { path: "/kundeklub", element: <Club /> },
  ]);

  return <>{routes}</>;
}

export default App;
