import ChrisViz from "../ChrisViz/ChrisViz";
import DivyaViz from "../DivyaViz/DivyaViz";
import JeffViz from "../JeffViz/JeffViz";
import SherryViz from "../SherryViz/SherryViz";
import styles from "./ComparativeAnalysis.module.scss";

const ComparativeAnalysis = () => {

  return (
    <div className={styles.container}>
      <h1>A Comparative Analysis</h1>
      <ChrisViz />
      <DivyaViz />
      <JeffViz />
      <SherryViz />
    </div>
  );
};

export default ComparativeAnalysis;
