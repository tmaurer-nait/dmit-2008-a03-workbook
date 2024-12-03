import AppNotification from "../components/state/AppNotification";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppNotification>
      <Component {...pageProps} />
    </AppNotification>
  );
}

export default MyApp;
