import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import TextFields from "./modules/axis-text-fields";
import DataTypeSelect from "./modules/dataType";
import Mqtt from "../../../../services/mqttService";
import SimpleGraphData from "./modules/simpleGraphData";
import NormalizedGraphData from "./modules/normalizedGraph/normalizedGraphs";

const mqtt = new Mqtt();
function BuildReportV6Graph() {
  const [sensor, setSensor] = useState([]);
  const [dataType, setDataType] = useState();
  const [checkResponse, setCheckResponse] = useState(false);
  const [renderGraphData, setRenderGraphData] = useState();
  const [graphName, setGraphName] = useState();
  const [normalizedGraph, setNormalizedGraph] = useState(false);
  const requestTopic = "biogas/client/request/normlized";

  function getSensorsClicked(value) {
    setSensor(value);
  }

  function getDataTypeClicked(value) {
    setDataType(value);
  }

  function requestData() {
    const requestJson = {
      Data_Point: sensor,
      Data_Req: dataType,
    };
    if (requestJson) {
      const requestPayload = JSON.stringify(requestJson);

      console.log(requestPayload, "this is the data published");
      mqtt.requestData(requestTopic, requestPayload);
    }

    mqtt.checkData = checkData;
    setRenderGraphData(sensor.sort());
    setGraphName(dataType);
    checkNormalizedGraph();

    resetChart();
  }

  function checkData() {
    if (localStorage.getItem("mqttResponseDataNormalized")) {
      setCheckResponse(true);
    } else {
      console.error("Error");
    }
  }

  function checkNormalizedGraph() {
    if (dataType === "Nrm") {
      setNormalizedGraph(true);
      console.log(normalizedGraph, "this is the normalized graph");
    } else {
      setNormalizedGraph(false);
      console.log(normalizedGraph, "this is the normalized graph");
    }
  }

  function resetChart() {
    setCheckResponse(false);
  }

  useEffect(() => {
    document.title = "Build Report";
  }, []);

  return (
    <>
      <div className="layout-right-side justify-content-center">
        <div>
          <Container>
            <Card className="text-center border-0 ">
              <Card.Body>
                {" "}
                <Card.Title className="text-green text-center justify-content-center text-uppercase font-38">
                  Graph Report
                </Card.Title>
                <Card.Text className="mx-auto mb-4" style={{ width: "40rem" }}>
                  Get Multiple Sensor Data With Normalized Data
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

          {normalizedGraph
            ? checkResponse && (
                // renderGraphData.map((item, index) => (
                <NormalizedGraphData
                  key={renderGraphData}
                  dataType={graphName}
                  loop={renderGraphData}
                  // index={index}
                />
              )
            : // ))
              checkResponse &&
              renderGraphData.map((item, index) => (
                <SimpleGraphData
                  key={index}
                  dataType={graphName}
                  index={index}
                />
              ))}
        </div>
      </div>
    </>
  );
}

export default BuildReportV6Graph;
