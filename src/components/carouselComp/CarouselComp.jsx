import styles from "./carouselcomp.module.css";
import { Link } from "react-router-dom";
// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CarouselComp({ products }) {
  // Responsive settings for the carousel
  const responsive = {
    //items defines how many items are visible
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <span className={styles.container}>
      <h2 className="cursive">Måske du vil synes om...</h2>
      <Carousel responsive={responsive}>
        {products.map((product) => (
          <Link
            className={styles.link}
            to={`/produkter/${product._id}`}
            key={product._id}
          >
            <img src={product.image} alt={product.title} />
            <h3 className={styles.title}>{product.title}</h3>
            <p className={styles.desc}>{product.description}</p>
            <p className={styles.price}>{product.price}</p>
          </Link>
        ))}
      </Carousel>
      {/* 50px padding since padding is conflicting with Carousel? */}
      <div style={{ height: "50px" }}></div>
    </span>
  );
}

export default CarouselComp;
