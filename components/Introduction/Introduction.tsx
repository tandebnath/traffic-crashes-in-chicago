import styles from "./Introduction.module.scss";

const Introduction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <img src="crashes-nobg.png" className={styles.image} />
        <p className={styles.text}>
          In conclusion..
        </p>
      </div>
    </div>
  );
};

export default Introduction;
