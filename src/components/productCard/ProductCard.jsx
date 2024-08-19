import styles from "../productCard/productCard.module.css";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import CartCounter from "../cartCounter/CartCounter";

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);
  const { cart, handleCart } = useContext(AppContext);
  const [cartItem, setCartItem] = useState({});

  useEffect(() => {
    setCartItem(cart.find((item) => item._id === product._id));
  }, [cart, product]);

  useEffect(() => {
    // Check if the product is already liked when the component mounts
    const likedProducts =
      JSON.parse(localStorage.getItem("likedProducts")) || [];
    if (likedProducts.includes(product._id)) {
      setLiked(true);
    }
  }, [product]);

  const toggleLike = (e) => {
    e.preventDefault();
    setLiked((prevLiked) => {
      const newLikedStatus = !prevLiked;
      let likedProducts =
        JSON.parse(localStorage.getItem("likedProducts")) || [];

      if (newLikedStatus) {
        // Add the product to liked products in localStorage if it's not already there
        if (!likedProducts.includes(product._id)) {
          likedProducts.push(product._id);
          localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
        }
      } else {
        // Remove the product from liked products in localStorage
        likedProducts = likedProducts.filter(
          (productId) => productId !== product._id
        );
        localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
      }

      return newLikedStatus;
    });
    const event = new Event("favoritesUpdated");
    window.dispatchEvent(event);
  };

  return (
    <div className={styles.productDiv}>
      <img
        src={product.image}
        className={styles.productImg}
        alt={product.name}
      />
      <div className={styles.productContentDiv}>
        <div className={styles.productTextDiv}>
          <p className={styles.productName}>{product.name}</p>
          <h3 className={styles.productDescription}>{product.description}</h3>
        </div>
        <div className={styles.priceDiv}>
          <h3 className={styles.productPrice}>{product.price} kr</h3>
          <button onClick={toggleLike} className={styles.likeButton}>
            {liked ? "❤️" : "♡"}
          </button>
        </div>
        <div className={styles.cartDiv}>
          <CartCounter product={product}/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
