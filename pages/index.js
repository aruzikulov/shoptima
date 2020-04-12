import Layout from "../components/Layout";
import MyJumbotron from "../components/Jumbotron";
import Feature from "../components/Features";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Alert } from "reactstrap";

export default function Index() {
  return (
    <Layout>
      <MyJumbotron />
      <Feature />
      <Alert color="danger">Website qayta ishlanmoqda!</Alert>
      <p align="center">Bizga bog'laning:</p>
      <p align="center">
        <FontAwesomeIcon
          icon={["fas", "envelope-square"]}
          color="#6DB65B"
          size="lg"
        />{" "}
        shoptima@yandex.uz
      </p>
    </Layout>
  );
}
