import "../styles/globals.css";
//css file for ant design components
import "antd/dist/antd.css";
import { ContentProvider } from "../context/content";
import Header from "../component/layout/header";

function MyApp({ Component, pageProps }) {
  return (
    <ContentProvider>
      <Header>
        <Component {...pageProps} />
      </Header>
    </ContentProvider>
  );
}

export default MyApp;
