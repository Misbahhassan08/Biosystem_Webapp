import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button, Table } from "react-bootstrap";

import Mqtt from "../../../../services/mqttService";
import TableRows from "./modules/TableRows";
import CSVRows from "./modules/csvRows";

function BuildReportV6Grid() {
  const get_csv_list_endpoint =
    "https://9bd1-182-178-187-67.ngrok-free.app/api/get_list_of_csv";
  const post_metaData_endpoint =
    "https://9bd1-182-178-187-67.ngrok-free.app/api/get_meta_data";
  const [rowsData, setRowsData] = useState([]);
  const [csvRowsData, setCsvRowsData] = useState();

  //------------------------------------------------------- TABLE DATA HERE --------------------------------------------

  const addTableRows = (newdata) => {
    // for (let data of newdata) {
    //   // console.log(data[0]);
    //   // debugger;
    //   rowsInput = {
    //     ID: data[0],
    //     CSVFILEID: data[1],
    //     Data_Point: data[2],
    //     Sample_Num: data[3],
    //     Time_Stamp: data[4],
    //     Time_Per: data[5],
    //     Temp: data[6],
    //     Gain: data[7],
    //     Int_Time: data[8],
    //     Allowable_Dev: data[9],
    //     Raw_Used_Vio: data[10],
    //     Raw_Values_Vio_450nm: data[11],
    //     Raw_Selected_Vio_450nm: data[12],
    //     Raw_Avg_Vio_450nm: data[13],
    //     Raw_StdDev_Vio_450nm: data[14],
    //     Call_Used_Vio: data[15],
    //     Call_Values_Vio_450nm: data[16],
    //     Cal_Selected_Vio_450nm: data[17],
    //     Cal_Avg_Vio_450nm: data[18],
    //     Cal_StdDev_Vio_450nm: data[19],
    //     Raw_Used_Blu: data[20],
    //     Raw_Values_Blu_500nm: data[21],
    //     Raw_Selected_Blu_500nm: data[22],
    //     Raw_Avg_Blu_500nm: data[23],
    //     Raw_StdDev_Blu_500nm: data[24],
    //     Call_Used_Blu: data[25],
    //     Call_Values_Blu_500nm: data[26],
    //     Cal_Selected_Blu_500nm: data[27],
    //     Cal_Avg_Blu_500nm: data[28],
    //     Cal_StdDev_Blu_500nm: data[29],
    //     Raw_Used_Grn: data[30],
    //     Raw_Values_Grn_550nm: data[31],
    //     Raw_Selected_Grn_550nm: data[32],
    //     Raw_Avg_Grn_550nm: data[33],
    //     Raw_StdDev_Grn_550nm: data[34],
    //     Call_Used_Grn: data[35],
    //     Call_Values_Grn_550nm: data[36],
    //     Cal_Selected_Grn_550nm: data[37],
    //     Cal_Avg_Grn_550nm: data[38],
    //     Cal_StdDev_Grn_550nm: data[39],
    //     Raw_Used_Yel: data[40],
    //     Raw_Values_Yel_570nm: data[41],
    //     Raw_Selected_Yel_570nm: data[42],
    //     Raw_Avg_Yel_570nm: data[43],
    //     Raw_StdDev_Yel_570nm: data[44],
    //     Call_Used_Yel: data[45],
    //     Call_Values_Yel_570nm: data[46],
    //     Cal_Selected_Yel_570nm: data[47],
    //     Cal_Avg_Yel_570nm: data[48],
    //     Cal_StdDev_Yel_570nm: data[49],
    //     Raw_Used_Org: data[50],
    //     Raw_Values_Org_600nm: data[51],
    //     Raw_Selected_Org_600nm: data[52],
    //     Raw_Avg_Org_600nm: data[53],
    //     Raw_StdDev_Org_600nm: data[54],
    //     Call_Used_Org: data[55],
    //     Call_Values_Org_600nm: data[56],
    //     Cal_Selected_Org_600nm: data[57],
    //     Cal_Avg_Org_600nm: data[58],
    //     Cal_StdDev_Org_600nm: data[59],
    //     Raw_Used_Red: data[60],
    //     Raw_Values_Red_650nm: data[61],
    //     Raw_Selected_Red_650nm: data[62],
    //     Raw_Avg_Red_650nm: data[63],
    //     Raw_StdDev_Red_650nm: data[64],
    //     Call_Used_Red: data[65],
    //     Call_Values_Red_650nm: data[66],
    //     Cal_Selected_Red_650nm: data[67],
    //     Cal_Avg_Red_650nm: data[68],
    //     Cal_StdDev_Red_650nm: data[69],
    //   };
    //   // TableData.push(data);
    // }
    // setRowsData([...TableData, rowsInput]);
    // setRowsData(newdata);
  };
  // ------------------------------------------------------ POSTING DATA FROM HERE --------------------------------------
  function checkData() {
    fetch(post_metaData_endpoint, {
      method: "POST",
      body: JSON.stringify({
        filedire: ".2023",
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        let newdata = data["result"];
        console.log(newdata);
        addTableRows(newdata);
        setRowsData(newdata);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    //mqtt.requestData('biogas/client/request/database/csvtbl/data', JSON.stringify({data:"misbah"}))
    document.title = "Build Report";
    fetch(get_csv_list_endpoint)
      .then((res) => res.json())
      .then((data) => {
        let newdata = data["result"];
        console.log(newdata);
        setCsvRowsData(newdata);
      })
      .catch((err) => {
        console.log(err.message);
      });
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
                    <thead>
                      <tr className="one">
                        <th>Machine Id</th>
                        <th>RPI Id</th>
                        <th>CSV File Id</th>
                        <th>Path</th>
                        <th>Reports</th>
                      </tr>
                    </thead>

                    <tbody>
                      {csvRowsData && (
                        <CSVRows rowsData={csvRowsData} checkData={checkData} />
                      )}
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
            <Card className="text-center border-1 ">
              <Card.Body>
                <Card.Title className="text-green text-center justify-content-center text-uppercase font-38">
                  Grid Implementation
                </Card.Title>
              </Card.Body>
              <Row>
                <div
                  className="table-responsive"
                  style={{
                    height: "400px",
                    overflow: "auto",
                    fontFamily: "Corbel",
                    marginTop: "-2px",
                    marginInline: "20px",
                    width: "96%",
                  }}
                >
                  <table className="reports-tab">
                    <thead>
                      <tr className="one">
                        <th>DataID</th>
                        <th>CSVID</th>
                        <th>Data_Point</th>
                        <th>Sample_Num</th>
                        <th>Time_Stamp</th>
                        <th>Time_Per</th>
                        <th>Temp</th>
                        <th>Gain</th>
                        <th>Int_Time</th>
                        <th>Allowable_Dev</th>

                        <th>Raw_Used_Vio</th>
                        <th>Raw_Values_Vio_450nm</th>
                        <th>Raw_Selected_Vio_450nm</th>
                        <th>Raw_Avg_Vio_450nm</th>
                        <th>Raw_StdDev_Vio_450nm</th>
                        <th>Call_Used_Vio</th>
                        <th>Call_Values_Vio_450nm</th>
                        <th>Cal_Selected_Vio_450nm</th>
                        <th>Cal_Avg_Vio_450nm</th>
                        <th>Cal_StdDev_Vio_450nm'</th>

                        <th>Raw_Used_Blu</th>
                        <th>Raw_Values_Blu_500nm</th>
                        <th>Raw_Selected_Blu_500nm</th>
                        <th>Raw_Avg_Blu_500nm</th>
                        <th>Raw_StdDev_Blu_500nm</th>
                        <th>Call_Used_Blu</th>
                        <th>Call_Values_Blu_500nm</th>
                        <th>Cal_Selected_Blu_500nm</th>
                        <th>Cal_Avg_Blu_500nm</th>
                        <th>Cal_StdDev_Blu_500nm'</th>

                        <th>Raw_Used_Grn</th>
                        <th>Raw_Values_Grn_550nm</th>
                        <th>Raw_Selected_Grn_550nm</th>
                        <th>Raw_Avg_Grn_550nm</th>
                        <th>Raw_StdDev_Grn_550nm</th>
                        <th>Call_Used_Grn</th>
                        <th>Call_Values_Grn_550nm</th>
                        <th>Cal_Selected_Grn_550nm</th>
                        <th>Cal_Avg_Grn_550nm</th>
                        <th>Cal_StdDev_Grn_550nm'</th>

                        <th>Raw_Used_Yel</th>
                        <th>Raw_Values_Yel_570nm</th>
                        <th>Raw_Selected_Yel_570nm</th>
                        <th>Raw_Avg_Yel_570nm</th>
                        <th>Raw_StdDev_Yel_570nm</th>
                        <th>Call_Used_Yel</th>
                        <th>Call_Values_Yel_570nm</th>
                        <th>Cal_Selected_Yel_570nm</th>
                        <th>Cal_Avg_Yel_570nm</th>
                        <th>Cal_StdDev_Yel_570nm'</th>

                        <th>Raw_Used_Org</th>
                        <th>Raw_Values_Org_600nm</th>
                        <th>Raw_Selected_Org_600nm</th>
                        <th>Raw_Avg_Org_600nm</th>
                        <th>Raw_StdDev_Org_600nm</th>
                        <th>Call_Used_Org</th>
                        <th>Call_Values_Org_600nm</th>
                        <th>Cal_Selected_Org_600nm</th>
                        <th>Cal_Avg_Org_600nm</th>
                        <th>Cal_StdDev_Org_600nm'</th>

                        <th>Raw_Used_Red</th>
                        <th>Raw_Values_Red_650nm</th>
                        <th>Raw_Selected_Red_650nm</th>
                        <th>Raw_Avg_Red_650nm</th>
                        <th>Raw_StdDev_Red_650nm</th>
                        <th>Call_Used_Red</th>
                        <th>Call_Values_Red_650nm</th>
                        <th>Cal_Selected_Red_650nm</th>
                        <th>Cal_Avg_Red_650nm</th>
                        <th>Cal_StdDev_Red_650nm'</th>
                      </tr>
                    </thead>
                    <tbody>
                      <TableRows rowsData={rowsData} />
                    </tbody>
                  </table>
                </div>
              </Row>
            </Card>
          </Container>
        </div>
      </div>
    </>
  );
}

export default BuildReportV6Grid;
