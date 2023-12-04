import styles from "./Introduction.module.scss";

const Introduction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <img src="crashes-nobg.png" className={styles.image} />
        <p className={styles.text}>
          Well, Chicago is pretty big so a population density, as what you see
          on the left wouldn't be all that unnatural.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
