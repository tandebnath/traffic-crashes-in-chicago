import styles from "./Introduction.module.scss";

const Introduction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <img src="crashes-nobg.png" className={styles.image} />
        <div className={styles.conclusion}>
          <p className={styles.text}>In conclusion</p>
          <p className={styles.subText}>
            Analyzing the Traffic Crashes in Chicago dataset reveals critical
            insights into the city's road safety landscape. The frequency and
            severity of reported incidents provide a comprehensive understanding
            of the challenges faced, while temporal trends expose patterns that
            could inform targeted interventions. Geographical concentrations of
            crashes highlight areas requiring focused attention and potential
            infrastructure improvements. The dataset allows an exploration of
            contributing factors, such as weather conditions and speed limits,
            enabling the development of preventive measures. However,
            acknowledging data limitations, including potential discrepancies
            and incomplete reporting, is essential. Assessing the effectiveness
            of safety initiatives and recognizing the need for ongoing public
            awareness campaigns and policy adjustments emerges as crucial
            takeaways. Ultimately, the dataset underscores the importance of
            continuous monitoring and analysis to drive informed decision-making
            for enhancing overall road safety in Chicago.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
