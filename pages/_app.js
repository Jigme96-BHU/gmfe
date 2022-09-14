import "../styles/globals.css";
//css file for ant design components
import "antd/dist/antd.css";
//react flow renderer styles
// import "react-flow-renderer/dist/style.css";
// import "react-flow-renderer/dist/theme-default.css";
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
