import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BeatLoader from "react-spinners/BeatLoader";

function Spinner(props) {
  const override = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };
  return (
    <Container style={{width: '100%'}}>
      <Row>
        <Col>
        <BeatLoader
        color={"#39c2d3"}
        loading={props.loading}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        </Col>
      </Row>
    </Container>
  );
}

export default Spinner;
