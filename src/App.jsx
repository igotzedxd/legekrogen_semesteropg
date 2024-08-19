import { useRoutes } from "react-router-dom";
import Home from "./pages/home/Home";
import Produkter from "./pages/produkter/Produkter";
import EnkeltProdukt from "./pages/enkeltProdukt/EnkeltProdukt";
import FAQ from "./pages/faq/FAQ";
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
      path: "/FAQ",
      element: (
        <Layout>
          <FAQ />
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
