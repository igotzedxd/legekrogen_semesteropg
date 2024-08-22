import { useRoutes } from "react-router-dom";
import Home from "./pages/home/Home";
import Produkter from "./pages/produkter/Produkter";
import EnkeltProdukt from "./pages/enkeltProdukt/EnkeltProdukt";
import Faq from "./pages/faq/FAQ";
import Layout from "./Layout";
import "./App.css";
import { ContextProvider } from "./context/AppContext";
import ScrollToTop from "./ScrollToTop";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Layout page={"home"}>
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
          <Faq />
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
      <ContextProvider>
        {routes}
        <ScrollToTop />
      </ContextProvider>
    </>
  );
}

export default App;
