import { useEffect } from "react";
import styles from "./reviews.module.css";
import useFetch from "../../hooks/useFetch";

function Reviews() {
  const { data: reviews, error } = useFetch(
    "https://legekrogen.webmcdm.dk/reviews"
  );

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h2 className="cursive">Vores kunder</h2>
        <h1>UDTALER</h1>
        {reviews ? (
          reviews.map((review, index) => (
            <div key={index} className={styles.reviewContainer}>
              <p className={styles.reviewDescription}>"{review.description}"</p>
              <p className={`cursive ${styles.reviewName}`}>{review.name}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Reviews;
