import { useRoutes } from "react-router-dom";
import Home from "./pages/home/Home";
import Produkter from "./pages/produkter/Produkter";
import EnkeltProdukt from "./pages/enkeltProdukt/EnkeltProdukt";
import Faq from "./pages/faq/FAQ";
import Club from "./pages/club/Club";
import Layout from "./Layout";
import "./App.css";
import { ContextProvider } from "./context/AppContext";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/produkter",
      element: (
        <Layout>
          <Produkter />
        </Layout>
      ),
    },
    {
      path: "/faq",
      element: (
        <Layout>
          <Faq />
        </Layout>
      ),
    },
    {
      path: "/klubben",
      element: (
        <Layout>
          <Club />
        </Layout>
      ),
    },
    {
      path: "/produkter/:id",
      element: <EnkeltProdukt />,
    },
  ]);

  return (
    <>
      <ContextProvider>{routes}</ContextProvider>
    </>
  );
}

export default App;
