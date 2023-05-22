import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import TextFields from "./modules/axis-text-fields";
import DataTypeSelect from "./modules/dataType";
import WaveLength from "./modules/waveLength";
import SingleColorChart from "./modules/singleColorGraph";
import Mqtt from "../../../services/mqttService";

const mqtt = new Mqtt();
function BuildReportV1() {
  const [sensor, setSensor] = useState();
  const [dataType, setDataType] = useState();
  const [wavelength, setWavelength] = useState();
  const [checkResponse, setCheckResponse] = useState(false);
  const [prevPoint, setPrevPoint] = useState([]); //this is for graph
  const requestTopic = "biogas/client/request";

  const updatePrevPoint = (newPoints) => {
    setPrevPoint(newPoints);
  };

  function getSensorsClicked(value) {
    setSensor(value);
  }

  function getDataTypeClicked(value) {
    setDataType(value);
  }

  function getWaveLengthClicked(value) {
    setWavelength(value);
  }

  function resetChart() {
    setCheckResponse(false);
    setPrevPoint([]);
  }

  function requestData() {
    const requestJson = {
      Data_Point: sensor,
      Data_Req: dataType + wavelength,
    };
    if (requestJson) {
      const requestPayload = JSON.stringify(requestJson);
      mqtt.requestData(requestTopic, requestPayload);
      console.log("Data published");
      // client.end();
    }

    mqtt.checkData = checkData;

    resetChart();
  }

  function checkData() {
    if (localStorage.getItem("mqttResponseDataSingle")) {
      setCheckResponse(true);
    } else {
      console.error("There is no data in response");
    }
  }

  useEffect(() => {
    document.title = "Build Report";
  }, []);

  return (
    <>
      <div className="layout-right-side justify-content-md-center">
        <div>
          <Container>
            <Card className="text-center border-0 ">
              <Card.Body>
                <Card.Title className="text-green text-center justify-content-center text-uppercase font-38">
                  Attributes needed for the report
                </Card.Title>
                <Card.Text className="mx-auto mb-4" style={{ width: "40rem" }}>
                  Format Graph
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>

          <Container style={{ backgroundColor: "#2484ac" }}>
            <Row className="border-bottom border-warning">
              <Col className="p-3 mt-2 align-self-center ">
                <h4 className="color-yellow">Format Graph</h4>
              </Col>
              <Col className="p-3" style={{ borderLeft: "1px solid #ffc107" }}>
                <Row>
                  <Col className="col-md-3"></Col>
                  <Col className="text-center pe-4">
                    <Row className="text-warning">
                      <span>X-axis</span>
                    </Row>
                    <Row className="text-white">
                      <Col>
                        <span>Min</span>
                      </Col>
                      <Col>
                        <span>Max</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="text-center pe-4">
                    <Row className="text-warning">
                      <span>Y-axis</span>
                    </Row>
                    <Row className="text-white">
                      <Col>
                        <span>Min</span>
                      </Col>
                      <Col>
                        <span>Max</span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col
                className="p-3 col-md-6"
                style={{ borderRight: "1px solid #ffc107" }}
              >
                <h5 className="text-white">Change Scale:</h5>
              </Col>
              <Col className="py-3">
                <TextFields getSensors={getSensorsClicked} />
              </Col>
            </Row>
          </Container>

          <Container className="mt-5" style={{ backgroundColor: "#2484ac" }}>
            <Row>
              <Col className="p-3 mt-2 col-md-6 align-self-center">
                <h5 className="text-white">Data Type:</h5>
              </Col>
              <Col className="py-3" style={{ borderLeft: "1px solid #ffc107" }}>
                <DataTypeSelect getDataType={getDataTypeClicked} />
              </Col>
            </Row>
          </Container>

          <Container className="mt-5" style={{ backgroundColor: "#2484ac" }}>
            <Row>
              <Col className="p-3 mt-2 col-md-6 align-self-center">
                <h5 className="text-white">
                  Pick wavelength for consolidation:
                </h5>
              </Col>
              <Col className="py-3" style={{ borderLeft: "1px solid #ffc107" }}>
                <WaveLength getWaveLength={getWaveLengthClicked} />
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="text-center mt-5">
              <Col>
                <Button
                  type="submit"
                  className="mx-2 menu-btn menu-btn1"
                  onClick={() => {
                    requestData();
                  }}
                >
                  Build Graph
                </Button>
              </Col>
            </Row>
          </Container>

          {/* {checkResponse && <Chart />}  */}
          {checkResponse && (
            <SingleColorChart
              prevPoint={prevPoint}
              updatePrevPoint={updatePrevPoint}
              dataType={dataType}
              wavelength={wavelength}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default BuildReportV1;
