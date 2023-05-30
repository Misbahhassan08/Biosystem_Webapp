import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button, Table } from "react-bootstrap";

import Mqtt from "../../../../services/mqttService";
import DataTable from "./modules/grid";

const mqtt = new Mqtt();
function BuildReportV5Graph() {
  const [checkResponse, setCheckResponse] = useState(false);

  const requestTopic = "biogas/client/request/normlized";

  function checkData() {
    if (localStorage.getItem("mqttResponseDataNormalized")) {
      setCheckResponse(true);
    } else {
      console.error("Error");
    }
    // resetChart();
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

          <Container>
            <Row>
              <Col>
                <div className="table-responsive">
                  <Table className="reports-tab">
                    <tr className="one">
                      <th>Machine Id</th>
                      <th>RPI Id</th>
                      <th>CSV File Id</th>
                      <th>Path</th>
                      <th>Reports</th>
                    </tr>

                    <tr className="two">
                      <td>CNS:123ABC/Title</td>
                      <td>CNS:123</td>
                      <td>NG-AR 167</td>
                      <td>NG-AR 167(1st line of cvs)</td>
                      <td>
                        <Button
                          type="submit"
                          className="mx-2 menu-btn menu-btn1"
                          onClick={() => {
                            checkData();
                          }}
                        >
                          CSV
                        </Button>
                      </td>
                    </tr>
                    <tr className="three">
                      <td>124ABC</td>
                      <td>CNS:123</td>
                      <td>NG-AR 167</td>
                      <td>NG-AR 167</td>
                      <td>
                        <Button
                          type="submit"
                          className="mx-2 menu-btn menu-btn1"
                          onClick={() => {
                            checkData();
                          }}
                        >
                          CSV
                        </Button>
                      </td>
                    </tr>
                  </Table>
                </div>
              </Col>
            </Row>
          </Container>

          {checkResponse && <DataTable />}
        </div>
      </div>
    </>
  );
}

export default BuildReportV5Graph;
