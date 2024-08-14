import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import styles from "./enkeltProdukt.module.css";

// components
import DeliveryMessage from "../../components/deliveryMessage/DeliveryMessage";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SingleProduct from "../../components/singleProduct/SingleProduct";
import CarouselComp from "../../components/carouselComp/CarouselComp";

function EnkeltProdukt() {
  const { id } = useParams();
  const { data: products, error } = useFetch("https://legekrogen.webmcdm.dk/products");

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!products) {
    return <p>Loading...</p>;
  }

  // filter out recommended products
  const recommendedProducts = products.filter((product) => product.recommended == true);

  // duplicate to increase mock data for carousel
  const duplicatedProducts = [...recommendedProducts, ...recommendedProducts];

  // find the product with the id from the url
  const product = products.find((product) => product._id === id);

  if (!product) {
    return <p>No product found with id: {id}</p>;
  }

  return (
    <>
      <DeliveryMessage />
      <Header />
      <SingleProduct product={product} />
      <CarouselComp products={duplicatedProducts} />
      <Footer />
    </>
  );
}

export default EnkeltProdukt;
