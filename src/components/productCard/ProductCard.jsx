import styles from "../productCard/productCard.module.css";
import { useState, useEffect, useContext } from "react";
import { FaCartPlus, FaCartArrowDown } from "react-icons/fa";
import { BsFillCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";
import { AppContext } from "../../context/AppContext";

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);
  const { cart, handleCart } = useContext(AppContext);

  let cartItem = {};
  if (cart.length > 0) {
    cartItem = cart.find((item) => item._id === product._id);
  }

  useEffect(() => {
    // Check if the product is already liked or in the cart when the component mounts
    const likedProducts = JSON.parse(localStorage.getItem("likedProducts")) || [];
    setLiked(likedProducts.includes(product._id));
    // Check if the product is already liked when the component mounts
    if (likedProducts.includes(product._id)) {
      setLiked(true);
    }
  }, [product]);

  const toggleLike = (e) => {
    e.preventDefault();
    setLiked((prevLiked) => {
      const newLikedStatus = !prevLiked;
      const likedProducts = JSON.parse(localStorage.getItem("likedProducts")) || [];

      if (newLikedStatus) {
        // Add the product to liked products in localStorage
        localStorage.setItem("likedProducts", JSON.stringify([...likedProducts, product._id]));
      } else {
        // Remove the product from liked products in localStorage
        const updatedLikedProducts = likedProducts.filter((productId) => productId !== product._id);
        localStorage.setItem("likedProducts", JSON.stringify(updatedLikedProducts));
        let likedProducts = JSON.parse(localStorage.getItem("likedProducts")) || [];

        if (newLikedStatus) {
          // Add the product to liked products in localStorage if it's not already there
          if (!likedProducts.includes(product._id)) {
            likedProducts.push(product._id);
            localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
          }
        } else {
          // Remove the product from liked products in localStorage
          likedProducts = likedProducts.filter((productId) => productId !== product._id);
          localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
        }
        const event = new Event("favoritesUpdated");
        window.dispatchEvent(event);

        return newLikedStatus;
      }
    });
  };

  return (
    <div className={styles.productDiv}>
      <img src={product.image} className={styles.productImg} alt={product.name} />
      <div className={styles.productTextDiv}>
        <p className={styles.productName}>{product.name}</p>
        <h3 className={styles.productDescription}>{product.description}</h3>
      </div>
      <div className={styles.priceDiv}>
        <h3 className={styles.productPrice}>{product.price} kr</h3>
        <button onClick={toggleLike} className={styles.likeButton}>
          {liked ? "❤️" : "♡"}
        </button>
        <button
          onClick={() => handleCart("add", (product = product))}
          className={styles.cartButton}
        >
          Add to cart
        </button>
        {cartItem && <p>{cartItem.count}</p>}
      </div>
    </div>
  );
};

export default ProductCard;
