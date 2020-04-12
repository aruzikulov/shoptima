import React from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Container,
  Row,
  Col
} from "reactstrap";

const Feature = props => {
  return (
    <Container>
      <h2 align="center">Why SHOPTIMA?</h2>
      <p> </p>
      <Row>
        <Col>
          <Card body>
            <CardTitle className="h4">Import</CardTitle>
            <CardText>
              If you want to import your products into China market, we can help
              you with it.
            </CardText>
            <Button color="info">More about import...</Button>
          </Card>
        </Col>
        <Col>
          <Card body>
            <CardTitle className="h4">Export</CardTitle>
            <CardText>
              We export variety of products from China to all over the world.
              Contact us for inquiries.
            </CardText>
            <Button color="info">More about export...</Button>
          </Card>
        </Col>
        <Col>
          <Card body>
            <CardTitle className="h4">Consulting</CardTitle>
            <CardText>
              If you don't know something about Chinese market, let us know - we
              will help you.
            </CardText>
            <Button color="info">Read More...</Button>
          </Card>
        </Col>
      </Row>
      <p> </p>
      <Row>
        <Col>
          <Card body>
            <CardTitle className="h4">Manufactures</CardTitle>
            <CardText>
              We work only with quality certified top manufacturers. We assure
              that you will have a reasonable price and good quality product.
            </CardText>
            <Button color="info">More Factories...</Button>
          </Card>
        </Col>
        <Col>
          <Card body>
            <CardTitle className="h4">Quality</CardTitle>
            <CardText>
              Based on what type of product you want, we can suggest you from
              cheaper products to luxery goods and machineries.
            </CardText>
            <Button color="info">Read More...</Button>
          </Card>
        </Col>
        <Col>
          <Card body>
            <CardTitle className="h4">Professional Service</CardTitle>
            <CardText>
              Our main focus is win-win cooperation. We guarantee you world
              class professional service for you and for your business.
            </CardText>
            <Button color="info">More Services...</Button>
          </Card>
        </Col>
      </Row>
      <p> </p>
    </Container>
  );
};

export default Feature;
