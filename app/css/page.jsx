import React from "react";
import styles from "./page.module.css";

const page = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.one}>1</div>
      <div className={styles.two}>2</div>
      <div className={styles.three}>3</div>
      <div className={styles.four}>4</div>
      <div className={styles.five}>5</div>
      <div className={styles.six}>6</div>
    </div>
  );
};

export default page;
