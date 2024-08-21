import { useEffect } from "react";
import styles from "./reviews.module.css";
import useFetch from "../../hooks/useFetch";
import Loader from "../loader/Loader";

function Reviews() {
  const { data: reviews, error, loading } = useFetch("https://legekrogen.webmcdm.dk/reviews");

  useEffect(() => {
    console.log(error);
  }, [error]);

  (error) => console.log("error: ", error);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h2 className="cursive">Vores kunder</h2>
        <h1>UDTALER</h1>
        {!loading ? (
          reviews.map((review, index) => (
            <div key={index} className={styles.reviewContainer}>
              <p className={styles.reviewDescription}>"{review.description}"</p>
              <p className={`cursive ${styles.reviewName}`}>{review.name}</p>
            </div>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default Reviews;
