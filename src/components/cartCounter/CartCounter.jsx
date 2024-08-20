import { useContext, useState, useEffect } from "react";
import styles from "./cartCounter.module.css";
import { AppContext } from "../../context/AppContext";

function CartCounter({ product }) {
  const { cart, handleCart } = useContext(AppContext);
  const item = cart.find((i) => i._id === product._id);

  const [inputCount, setInputCount] = useState(item ? item.count : 0);

  useEffect(() => {
    // Update inputCount whenever item changes
    setInputCount(item ? item.count : 0);
  }, [item]);

  const handleInputChange = (e) => {
    let value = e.target.value;
  
    value = value === "" ? "0" :
            (value.length > 1 && value[0] === "0") ? value.slice(1) :
            value;
  
    const newValue = !isNaN(value) && Number(value) >= 0 ? value : "0";
  
    setInputCount(newValue);
  };
  

  const handleUpdateClick = (e) => {
    e.stopPropagation();
    handleCart(e, "updateCount", product, inputCount);
  };

  return (
    <div className={styles.cartCounterContainer}>
      <div className={styles.counterContainer}>
        <span>{item ? item.count : 0}</span>
        <button
          className={styles.incButton}
          onClick={(e) => {
            e.stopPropagation();
            handleCart(e, !item ? "add" : "inc", product);
          }}
        >
          +
        </button>
        <button
          className={styles.decButton}
          onClick={(e) => {
            e.stopPropagation();
            handleCart(e, "dec", product);
          }}
          disabled={!item}
        >
          -
        </button>
        <button
          className={styles.removeButton}
          onClick={(e) => {
            e.stopPropagation();
            handleCart(e, "remove", product);
          }}
        >
          &times;
        </button>
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputField}
          type="number"
          value={inputCount}
          onChange={handleInputChange}
          onClick={(e) => e.preventDefault()}
        />
        <button className={styles.updateButton} onClick={handleUpdateClick}>
          Opdater
        </button>
        <button
          className={styles.removeButtonDT}
          onClick={(e) => {
            e.stopPropagation();
            handleCart(e, "remove", product);
          }}
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default CartCounter;
