import CardsGrid from "../components/CardsGrid";
import Header from "../components/Header";
import Switcher from "../components/Switcher";
import useEventListener from "../hooks/useEventListener";
import { useAppDispatch } from "../hooks/useRedux";
import { useWidth } from "../hooks/useWidth";
import { cardSlice } from "../store/reducers/CardsStore";
import { MOBILE_MODE } from "../constants";

import styles from "../styles/IndexPage.module.css";

const IndexPage = () => {
  const { deleteCard } = cardSlice.actions;
  const dispatch = useAppDispatch();
  const { width } = useWidth();

  useEventListener("keydown", ({ key }) => {
    if (width > MOBILE_MODE && String(key) === "Delete") {
      dispatch(deleteCard());
    }
  });

  return (
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
};

export default IndexPage;
