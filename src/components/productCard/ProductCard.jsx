import styles from "../productCard/productCard.module.css";

import { useState, useEffect } from 'react';

const ProductCard = ({ name, description, imgURL, price, id }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Check if the product is already liked when the component mounts
    const likedProducts = JSON.parse(localStorage.getItem('likedProducts')) || [];
    if (likedProducts.includes(id)) {
      setLiked(true);
    }
  }, [id]);

  const toggleLike = () => {
    setLiked((prevLiked) => {
      const newLikedStatus = !prevLiked;
      const likedProducts = JSON.parse(localStorage.getItem('likedProducts')) || [];

      if (newLikedStatus) {
        // Add the product to liked products in localStorage
        localStorage.setItem('likedProducts', JSON.stringify([...likedProducts, id]));
      } else {
        // Remove the product from liked products in localStorage
        const updatedLikedProducts = likedProducts.filter((productId) => productId !== id);
        localStorage.setItem('likedProducts', JSON.stringify(updatedLikedProducts));
      }

      return newLikedStatus;
    });
  };

  return (
    <div className={styles.productDiv}>
      <img src={imgURL} className={styles.productImg} alt={name}></img>
      <div className={styles.productTextDiv}>
        <p className={styles.productName}>{name}</p>
        <h3 className={styles.productDescription}>{description}</h3>
      </div>
      <div className={styles.priceDiv}>
        <h3 className={styles.productPrice}>{price} kr</h3>
        <button onClick={toggleLike} className={styles.likeButton}>
          {liked ? '❤️' : '♡'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
