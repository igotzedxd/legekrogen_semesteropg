import styles from "./Loader.module.css";

function Loader() {
  return (
    <>
      <div
        aria-label="Orange and tan hamster running in a metal wheel"
        role="img"
        className={styles.wheel_and_hamster}
      >
        <div className={styles.wheel}></div>
        <div className={styles.hamster}>
          <div className={styles.hamster__body}>
            <div className={styles.hamster__head}>
              <div className={styles.hamster__ear}></div>
              <div className={styles.hamster__eye}></div>
              <div className={styles.hamster__nose}></div>
            </div>
            <div className={`${styles.hamster__limb} ${styles.hamster__limb__fr}`}></div>
            <div className={`${styles.hamster__limb} ${styles.hamster__limb__fl}`}></div>
            <div className={`${styles.hamster__limb} ${styles.hamster__limb__br}`}></div>
            <div className={`${styles.hamster__limb} ${styles.hamster__limb__bl}`}></div>
            <div className={styles.hamster__tail}></div>
          </div>
        </div>
        <div className={styles.spoke}></div>
      </div>
    </>
  );
}

export default Loader;
