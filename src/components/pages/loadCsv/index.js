import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button, Table } from "react-bootstrap";
import { TextField } from "@mui/material";
import { baseApiUrl } from "../../../config";
import {
  fetchGetReq,
  fetchPostReq,
  fetchFormData,
} from "../../../services/restService";
import CSVRows from "./csvRows";
import DateModal from "./dateModal";
import Spinner from "../../shared/spinner";

function LoadCSV() {
  const get_csv_list_endpoint = baseApiUrl + "/api/get_list_of_csv";
  const post_metaData_endpoint = baseApiUrl + "/api/get_meta_data";
  const post_csv_file = baseApiUrl + "/api/save_csv_meta_data";
  const [csvRowsData, setCsvRowsData] = useState();
  const [dateTime, setDateTime] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isCsvListLoading, setisCsvListLoading] = useState(true);
  const [isSavingFile, setIsSavingFile] = useState(false);
  const [csvSampleNum, setCsvSampleNum] = useState();
  const [isNewRowAdded, setIsNewRowAdded] = useState(true)

  const getDateTime = (value) => {
    // value = value  + ".csv";
    setDateTime(value);
    console.log(value, "this is date time");
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSaveCSV = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("dateTime", dateTime);
      formData.append("csvSampleNum", csvSampleNum);
      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      //POST REQUEST FOR SAVING CSV FILE

      try {
        const data = await fetchFormData(post_csv_file, formData);
        if (data) {
          setIsSavingFile(false); // Stop spinner
          console.log("File uploaded successfully!", data);
        } else {
          setIsSavingFile(false);
          throw new Error("Request failed with status: " + data);
        }
      } catch (error) {
        // console.error("Error uploading file:", error);
        // setIsSavingFile(false);
      } finally {
        //send get request for list of the saved CSV after Saving
        setisCsvListLoading(true);
        getCsvData();
        setIsSavingFile(false);
        setIsNewRowAdded(true)
      }
    }
  };

  // ------------------------------------------------------ POSTING DATA FROM HERE --------------------------------------

  useEffect(() => {
    //mqtt.requestData('biogas/client/request/database/csvtbl/data', JSON.stringify({data:"misbah"}))
    document.title = "Load CSV";
    getCsvData();
  }, []);

  // async function checkData() {
  //   const reqCsv = {
  //     CSV_File_Id: 3,
  //     filedire: "./2023/05/31/csvFileAll.csv",
  //     userId: Math.random().toString(36).slice(2),
  //   };

  //   const tableData = await fetchPostReq(post_metaData_endpoint, reqCsv);
  //   console.log("====================================");
  //   console.log(tableData.result, "this is table data");
  //   console.log("====================================");

  //   for (let i = 0; i < tableData.result.length; i++) {
  //     if (tableData.result[i][2] === 0) {
  //       console.log(tableData.result[i][2]);
  //     } else {
  //       console.log("no data");
  //     }
  //   }
  // }

  const getCsvData = async () => {
    const csvList = await fetchGetReq(get_csv_list_endpoint);
    console.log(csvList.result, "this is csv lsit");
    setCsvRowsData(csvList.result);
    setisCsvListLoading(false);
  };

  return (
    <>
      <div className="layout-right-side justify-content-center">
        {isSavingFile ? (
          <Spinner loading={isSavingFile} />
        ) : (
          <div>
            <Container>
              <Card className="text-center border-0 ">
                <Card.Body>
                  {" "}
                  <Card.Title className="text-green text-center justify-content-center text-uppercase font-38">
                    Load CSV
                  </Card.Title>
                  <Card.Text
                    className="mx-auto mb-4"
                    style={{ width: "40rem" }}
                  >
                    Get The CSV Data
                  </Card.Text>
                </Card.Body>
              </Card>
            </Container>

            {isCsvListLoading ? (
              <Spinner laoding={isCsvListLoading} />
            ) : (
              <Container>
                <Row>
                  <Col>
                    <div className="table-responsive">
                      <Table className="reports-tab">
                        <thead>
                          <tr className="one">
                            <th>Sample/Accession Number</th>
                            <th>Date</th>
                            <th>Info/Details</th>
                            <th>Pre-Notes</th>
                          </tr>
                        </thead>

                        <tbody>
                          {csvRowsData && (
                            <CSVRows
                              rowsData={csvRowsData}
                              newRowAdded = {isNewRowAdded}
                              // checkData={checkData}
                            />
                          )}
                        </tbody>
                      </Table>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}

            <Container className="mt-5">
              <Row>
                <Col>
                  <TextField
                    type="text"
                    label="Sample/Accession Number"
                    value={csvSampleNum}
                    onChange={(e) => {
                      setCsvSampleNum(e.target.value);
                    }}
                  />
                </Col>
                <Col>
                  <DateModal getDateTime={getDateTime} />
                </Col>
                <Col>
                  <TextField
                    type="file"
                    label="Select File"
                    onChange={handleFileChange}
                    accept=".csv"
                    InputLabelProps={{ shrink: true }}
                  />
                </Col>
                <Col className="text-center align-self-center">
                  <Button
                    type="submit"
                    className="mx-2 menu-btn menu-btn1"
                    onClick={() => {
                      handleSaveCSV();
                      setIsSavingFile(true);
                    }}
                  >
                    Save CSV
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </div>
    </>
  );
}

export default LoadCSV;
