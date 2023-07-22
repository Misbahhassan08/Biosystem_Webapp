import React, { useState, useEffect, useMemo } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import SimpleGraphData from "./simpleGraphData";
import Spinner from "../../../../../shared/spinner";
import { fetchPostReq } from "../../../../../../services/restService";
import { baseApiUrl } from "../../../../../../config";
import Modal from "react-bootstrap/Modal";
import EndResultDetails from "../../../../observations/endResults/endResult";
import SampleConcentrationDetails from "../../../../observations/startDetails/sampleConcentrationDetails";

function AllGraphReport() {
  const get_graph_data = baseApiUrl + "/api/get_graph_meta_data";
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showPostModal, setshowPostModal] = useState(false);
  const [showPreModal, setshowPreModal] = useState(true);

  const sensors = [0, 1, 2, 3, 4];
  const location = useLocation();

  const CsvfileID = location.state?.csvfileId;

  const data = {
    Data_Point: [0, 1, 2, 3, 4],
    CsvfileID,
  };

  // useMemo(() => {
  //   const data = JSON.stringify(responseData.result);
  //   localStorage.setItem("allGraphReport", data);
  // }, [responseData]);

  // const memoizedGraphs = useMemo(
  //   () =>
  //     sensors.map((item, index) => (
  //       <Col key={index} xs={6} md={4} style={{ marginBottom: "40px" }}>
  //         <SimpleGraphData key={index} dataType="Raw" isNrm={false} index={index} />
  //       </Col>
  //     )),
  //   [responseData]
  // );

  const fetchData = async () => {
    try {
      localStorage.removeItem("allGraphReport");
      const response = await fetchPostReq(get_graph_data, data);
      console.log(data, "req datas");
      localStorage.setItem("allGraphReport", JSON.stringify(response.result));
      if (localStorage.getItem("allGraphReport") == "Success") {
        setLoading(true);
      } else if (localStorage.getItem("allGraphReport")) {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // const handleshowPostModal = () => {
  //   setshowPostModal(true);
  // };
  // const handleshowPreModal = () => {
  //   setshowPreModal(true);
  // };

  return (
    <div className="layout-right-side justify-content-center">
      <div className="m-auto ">
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div>
            <Container>
              <Row className="mb-4">
                <Col md={8}>
                  <h2>Active Report: This is one report</h2>
                </Col>
                <Col className="text-end" md={4}>
                  <Link to={process.env.PUBLIC_URL + "/reports/graph"}>
                    <Button type="submit" className="mx-2 menu-btn menu-btn1">
                      Change Attributes
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row className="my-4 ">
                {/* <Col className="text-start">
                  <Button
                    type="submit"
                    className="mx-2 menu-btn menu-btn2"
                    // onClick={() => handleshowPreModal()}
                  >
                    Pre-Notes
                  </Button>
                </Col> */}
                <Col className="text-end">
                  <Button
                    type="submit"
                    className="mx-2 menu-btn menu-btn2"
                    onClick={() => setShowModal(true)}
                  >
                    Open Notes
                  </Button>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row style={{ flexWrap: "wrap" }}>
                <h3>Simple Raw Graph</h3>
                {sensors.map((item, index) => (
                  <Col
                    key={index}
                    xs={6}
                    md={4}
                    style={{ marginBottom: "40px" }}
                  >
                    <SimpleGraphData
                      key={index}
                      dataType="Raw"
                      isNrm={false}
                      index={index}
                    />
                  </Col>
                ))}
              </Row>
              <Row style={{ flexWrap: "wrap", marginTop: "30px" }}>
                <h3>Normalized Raw Graph</h3>
                {sensors.map((item, index) => (
                  <Col
                    key={index}
                    xs={6}
                    md={4}
                    style={{ marginBottom: "40px" }}
                  >
                    <SimpleGraphData
                      key={index}
                      dataType="Raw"
                      isNrm={true}
                      index={index}
                    />
                  </Col>
                ))}
                {/* {memoizedGraphs} */}
              </Row>
              <Row style={{ flexWrap: "wrap", marginTop: "30px" }}>
                <h3>Simple Cal Graph</h3>
                {sensors.map((item, index) => (
                  <Col
                    key={index}
                    xs={6}
                    md={4}
                    style={{ marginBottom: "40px" }}
                  >
                    <SimpleGraphData
                      key={index}
                      dataType="Cal"
                      isNrm={false}
                      index={index}
                    />
                  </Col>
                ))}
              </Row>
              <Row style={{ flexWrap: "wrap", marginTop: "30px" }}>
                <h3>Normalized Cal Graph</h3>
                {sensors.map((item, index) => (
                  <Col
                    key={index}
                    xs={6}
                    md={4}
                    style={{ marginBottom: "40px" }}
                  >
                    <SimpleGraphData
                      key={index}
                      dataType="Cal"
                      isNrm={true}
                      index={index}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        )}
      </div>

      <Modal
        show={showModal}
        size="lg"
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body >
          <Container>
            <Row className="text-center">
              <Col>
                <Button
                  type="submit"
                  className="mx-2 menu-btn menu-btn2"
                  onClick={() => {
                    setshowPreModal(!showPreModal);
                    setshowPostModal(!showPostModal)
                  }}
                > Show
                  {showPreModal ? " Post " : " Pre "}
                  Notes
                </Button>
              </Col>
            </Row>
          </Container>
          <div className="notes-modal-box">
            {!showPreModal && !showPostModal &&
              <div  style={{width: '100%', }} >
                <h4 className="text-center align-self-center" style={{marginTop: '37vh', marginBottom: '37vh'}}>Nothing to Show Here!</h4>
              </div>
            }
            <div
              style={{
                display: showPreModal ? "block" : "none",
                width: showPostModal ? "inherit" : "100%",
              }}
            >
              <SampleConcentrationDetails
                closeModal={() => {
                  setShowModal(false);
                }}
                csvfileId={CsvfileID}
              />
            </div>
            <div
              style={{
                display: showPostModal ? "block" : "none",
                width: showPreModal ? "inherit" : "100%",
              }}
            >
              <EndResultDetails csvfileId={CsvfileID} />
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* <Modal
        show={showPostModal}
        fullscreen={true}
        onHide={() => setshowPostModal(false)}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <EndResultDetails csvfileId={CsvfileID} />
        </Modal.Body>
      </Modal> */}

      {/* <Modal
        show={showPreModal}
        fullscreen={true}
        onHide={() => setshowPreModal(false)}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <SampleConcentrationDetails
            closeModal={() => {
              setshowPreModal(false);
            }}
            csvfileId={CsvfileID}
          />
        </Modal.Body>
      </Modal> */}
    </div>
  );
}

export default AllGraphReport;
