import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import GraphImgae from "../../../assets/images/img1.png";
import ImageTwo from "../../../assets/images/img2.jpg";

function BuildReport() {
  return (
    <div className="layout-right-side">
      <Container>
        <Row>
          <Col className="px-4">
            <Card className=" p-0 border-0 ">
              <Card.Body className="text-center p-0">
                <Link to={process.env.PUBLIC_URL + "/build-report-v5/grid"}>
                  <img
                    src={ImageTwo}
                    alt="Data_Grid"
                    className="img-fluid report-image"
                  />
                </Link>
              </Card.Body>
            </Card>
            <Link to={process.env.PUBLIC_URL + "/build-report-v5/grid"}>
              <Card.Title className="text-center justify-content-center mt-3 mb-5 text-dark text-uppercase">
                Data Grid
              </Card.Title>
            </Link>
          </Col>

          {
            //Graph Card
          }
          <Col className="px-4">
            <Card className=" p-0 border-0 ">
              <Card.Body className="text-center p-0">
                <Link to={process.env.PUBLIC_URL + "/build-report-v5/graph"}>
                  <img
                    src={GraphImgae}
                    alt="Data_Graph"
                    className="img-fluid report-image"
                  />
                </Link>
              </Card.Body>
            </Card>
            <Link to={process.env.PUBLIC_URL + "/build-report-v5/graph"}>
              <Card.Title className="text-center justify-content-center mt-3 mb-5 text-dark text-uppercase">
                Data Graph
              </Card.Title>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BuildReport;
