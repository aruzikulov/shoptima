import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
library.add(fab, fas);
const layoutStyle = {
  margin: 0,
  padding: 0,
  border: "1px solid #DDD"
};

const Layout = props => (
  <div style={layoutStyle}>
    <Head>
      <title>SHOPTIMA</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />

    {props.children}
  </div>
);

export default Layout;
