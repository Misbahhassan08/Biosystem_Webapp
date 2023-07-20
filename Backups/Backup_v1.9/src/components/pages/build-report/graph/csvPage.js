import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button, Table } from "react-bootstrap";
import CSVRows from "./csvrows/csvRows";
import { baseApiUrl } from "../../../../config";
import { fetchGetReq, fetchPostReq } from "../../../../services/restService";
import Spinner from "../../../shared/spinner";

function CsvInfoPage() {
  const get_csv_list_endpoint = baseApiUrl + "/api/get_list_of_csv";
  // const post_metaData_endpoint = baseApiUrl + "/api/get_meta_data";
  const [isloading, setIsloading] = useState(true);
  const [csvRowsData, setCsvRowsData] = useState();

  // ------------------------------------------------------ POSTING DATA FROM HERE --------------------------------------

  useEffect(() => {
    //mqtt.requestData('biogas/client/request/database/csvtbl/data', JSON.stringify({data:"misbah"}))
    document.title = "Reports Csv List";
    getCsvData();
  }, []);

  const getCsvData = async () => {
    const csvList = await fetchGetReq(get_csv_list_endpoint);
    console.log(csvList.result, "this is csv lsit");
    setCsvRowsData(csvList.result);
    if (csvList.result) {
      setIsloading(false);
    }
  };

  return (
    <>
      <div className="layout-right-side justify-content-center">
        <div>
          <Container>
            <Card className="text-center border-0 ">
              <Card.Body>
                {" "}
                <Card.Title className="text-green text-center justify-content-center text-uppercase font-38">
                View CSV FILE
                </Card.Title>
                <Card.Text className="mx-auto mb-4" style={{ width: "40rem" }}>
                  Get Multiple Sensor Data With Normalized Data
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>

          {isloading ? (
            <Spinner loading={isloading} />
          ) : (
            <Container>
              <Row>
                <Col>
                  <div className="table-responsive">
                    <Table className="reports-tab">
                    <colgroup>
                      <col width= "25%" />
                      <col width= "25%" />
                      <col width= "25%" />
                      <col width= "25%" />
                    </colgroup>
                      <thead>
                        <tr className="one">
                          <th>Sample/Accession Number</th>
                          <th>Date</th>
                          <th>Info/Details</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {csvRowsData && <CSVRows rowsData={csvRowsData} />}
                      </tbody>
                    </Table>
                  </div>
                </Col>
              </Row>
            </Container>
          )}
        </div>
      </div>
    </>
  );
}

export default CsvInfoPage;
