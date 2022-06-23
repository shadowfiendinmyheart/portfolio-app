import { Provider } from "react-redux";
import { setupStore } from "../store/store";
import "./styles.css";

const store = setupStore();

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
