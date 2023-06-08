import React, { useState, useEffect } from "react";
import * as FaIcons from 'react-icons/fa';
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  Form,
  Carousel,
  CardGroup,
} from "react-bootstrap";

function RackError() {
  useEffect(() => {
    document.title = "Rack Status Error";
  }, []);

  const [ setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <div className="layout-right-side error">
        <Container>
          <h2 className="main-title text-center mb-5 text-light-blue">
            Rack Status/Rack1/Error
          </h2>

          <Row className="home-card mx-auto">
            <Col>
              <Card onClick={handleShow}>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    <h2 className="main-title text-center mb-2 text-light-blue">
                      Rack 1
                    </h2>
                    <CardGroup>
                      <Card className="card1">
                        <form className="list-item1">
                          <ul>
                          <div className="d-flex mb-3">
                                <div className="status-info text-light"><FaIcons.FaThermometerHalf className="color-yellow" />36c</div>
                                <div className="status-info text-light mx-3"><FaIcons.FaGlassMartiniAlt className="color-yellow" />5%</div>
                            </div>
                            <li>
                              Total Error
                              <Button variant="dark1" className="notification-btn">3</Button>
                            </li>
                          </ul>
                          <h2>Error Details</h2>
                          <h3>Action</h3>
                          <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm">
                              Error-A:
                            </InputGroup.Text>
                            <Form.Control
                              aria-label="Small"
                              aria-describedby="inputGroup-sizing-sm"
                              value="Cassette insert error (111b) – Bay -1A;"
                            />
                            <Button variant="dark6">Eject cassette</Button>
                          </InputGroup>
                          <InputGroup size="sm" className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-sm">
                              Error-B:
                            </InputGroup.Text>
                            <Form.Control
                              aria-label="Small"
                              aria-describedby="inputGroup-sizing-sm"
                              value="No error - Bay -1B"
                            />
                            <Button variant="dark7"></Button>
                          </InputGroup>
                          <Carousel fade>
                            <Carousel.Item>
                              <p>Bay-1</p>
                              <Carousel.Caption>
                                <h3>First slide label</h3>
                              </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                              <p>Bay-2</p>

                              <Carousel.Caption>
                                <h3>Second slide label</h3>
                              </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                              <p>Bay-3</p>

                              <Carousel.Caption>
                                <h3>Third slide label</h3>
                              </Carousel.Caption>
                            </Carousel.Item>
                          </Carousel>
                          <p>
                            Status:<span> OK</span>
                          </p>
                        </form>
                      </Card>
                      <Card className="card2"></Card>
                      <Card className="card3"></Card>
                    </CardGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

         
        </Container>
      </div>
    </>
  );
}

export default RackError;
