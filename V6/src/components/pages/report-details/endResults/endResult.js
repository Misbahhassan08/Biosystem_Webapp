import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import FormFields from "./components/formField";
import Table from "./components/table";

function EndResultDetails() {
  return (
    <div className="layout-right-side cassette-load">
      <h2 class="main-title text-center mb-4 text-light-blue">
        Enter End results and observations
      </h2>
      <Container>
        <FormFields />
        <Row>
          <Table />
        </Row>
        <Row>
        <Col className="text-center mt-4">
          <Button
              type="submit"
              className="mx-2 menu-btn menu-btn2"
            >
              Save
            </Button>
        </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EndResultDetails;
