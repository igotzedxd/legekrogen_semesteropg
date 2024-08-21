import { useParams } from "react-router-dom";
import { useContext } from "react";

// components
import DeliveryMessage from "../../components/deliveryMessage/DeliveryMessage";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SingleProduct from "../../components/singleProduct/SingleProduct";
import CarouselComp from "../../components/carouselComp/CarouselComp";
import { AppContext } from "../../context/AppContext";
import Loader from "../../components/loader/Loader";

function EnkeltProdukt() {
  const { id } = useParams();
  const { data: products, error, loading } = useContext(AppContext);

  (error) => console.log("error: ", error);

  // filter out recommended products
  const recommendedProducts = products.filter((product) => product.recommended == true);

  // duplicate to increase mock data for carousel
  const duplicatedProducts = [...recommendedProducts, ...recommendedProducts];

  // find the product with the id from the url
  const product = products.find((product) => product._id === id);

  return (
    <>
      <DeliveryMessage />
      <Header />
      {!loading ? (
        <>
          <SingleProduct product={product} />
          <CarouselComp products={duplicatedProducts} />
        </>
      ) : (
        <Loader />
      )}

      <Footer />
    </>
  );
}

export default EnkeltProdukt;
