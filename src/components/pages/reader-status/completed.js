import React, { useState, useEffect } from "react";
import {} from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Form,
  CardGroup,
} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import * as FaIcons from "react-icons/fa";
import { baseApiUrl } from "../../../config";
import { fetchFormData, fetchGetReq } from "../../../services/restService";
import CSVRows from "./csv/csvRows";
import DateModal from "./csv/dateModal";
import { TextField } from "@mui/material";
import Spinner from "../../shared/spinner";

function RackCompleted() {
  const get_csv_list_endpoint = baseApiUrl + "/api/get_list_of_csv";
  const post_csv_file = baseApiUrl + "/api/save_csv_meta_data";

  const [csvRowsData, setCsvRowsData] = useState();
  const [dateTime, setDateTime] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isCsvListLoading, setisCsvListLoading] = useState(true);
  const [isSavingFile, setIsSavingFile] = useState(false);
  const [csvSampleNum, setCsvSampleNum] = useState();
  const [isNewRowAdded, setIsNewRowAdded] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [csvfileid, setCsvfileid] = useState();

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
        setIsNewRowAdded(true);
      }
    }
  };

  //------------------------------------------------Get CSV Data---------------------------------------------

  const getCsvData = async () => {
    const csvList = await fetchGetReq(get_csv_list_endpoint);
    console.log(csvList.result, "this is csv lsit");
    setCsvRowsData(csvList.result);
    setisCsvListLoading(false);
  };

  useEffect(() => {
    document.title = "Rack Status Completed";
    getCsvData();
  }, []);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <div className="layout-right-side">
        {isSavingFile ? (
          <Spinner loading={isSavingFile} />
        ) : (
          <>
            {isCsvListLoading ? (
              <Spinner loading={isCsvListLoading} />
            ) : (
              <Container>
                <h2 className="main-title text-center mb-5 text-light-blue">
                  Rack Status/Rack1/Completed
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
                            <Card className="cardcomplete1">
                              <form className="list-item1">
                                <ul>
                                  <div className="d-flex mb-3">
                                    <div className="status-info text-light">
                                      <FaIcons.FaThermometerHalf className="color-yellow" />
                                      36c
                                    </div>
                                    <div className="status-info text-light mx-3">
                                      <FaIcons.FaGlassMartiniAlt className="color-yellow" />
                                      5%
                                    </div>
                                  </div>
                                  <li>
                                    Complete
                                    <Button variant="dark1 notification-btn">
                                      4
                                    </Button>
                                  </li>
                                </ul>
                                <h2 className="mb-3">Complete Test</h2>
                                <div className="table-responsive">
                                  <Table
                                    striped
                                    bordered
                                    hover
                                    className="complete_table"
                                  >
                                    <thead>
                                      <tr>
                                        <th className="text-light">#</th>
                                        <th className="text-light">
                                          Accession
                                        </th>
                                        <th className="text-light">Bay</th>
                                        <th className="text-light">
                                          Info/Details
                                        </th>
                                        <th className="text-light">Result</th>
                                        <th className="text-light">Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {csvRowsData && (
                                        <CSVRows
                                          // showModal={handleShowModal}
                                          rowsData={csvRowsData}
                                          newRowAdded={isNewRowAdded}
                                        />
                                      )}
                                    </tbody>
                                  </Table>
                                </div>

                                <p class="status">
                                  Status:<span> OK</span>
                                </p>
                              </form>
                            </Card>
                          </CardGroup>
                        </Card.Text>
                        <Card.Text></Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            )}
            <Container className="mt-5">
              <Card>
                <Card.Body>
                  <Card.Text>
                    <h4>Import CSV File</h4>
                  </Card.Text>
                  <Row>
                    <Col>
                      <TextField
                        type="text"
                        label="Sample/Accession Number"
                        value={csvSampleNum}
                        sx={{width: '100%'}}
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
                        Import CSV
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Container>
          </>
        )}
      </div>
    </>
  );
}

export default RackCompleted;
