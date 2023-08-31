import { Main, Footer, Faqs, Description } from "../../exports/main";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Main />
      <Description />
      <Faqs />
    </div>
  );
};

export default Home;
