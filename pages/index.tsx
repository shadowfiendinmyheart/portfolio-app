import CardsGrid from "../components/CardsGrid";
import Header from "../components/Header";
import Switcher from "../components/Switcher";

import styles from "../styles/IndexPage.module.css";

const IndexPage = () => (
  <>
    <Header />
    <div className={styles.switcher}>
      <Switcher />
    </div>
    <div className={styles.grid}>
      <CardsGrid />
    </div>
  </>
);

export default IndexPage;
