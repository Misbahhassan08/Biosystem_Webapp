import React, { useState, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import { rackStatusEndPoint } from "../../../config";
import Spinner from "../../shared/spinner";
import { fetchGetReq } from "../../../services/restService";
import {RefreshButton} from "../../shared/RefreshButton";
import Carbon from "../../../assets/icons/co2.svg"

function ReaderStatus() {
  const [status, setStatus] = useState();
  const [clickedCard, setClickedCard] = useState();

  const navigate = useNavigate()

  const statusUrl = rackStatusEndPoint;

  useEffect(() => {
    document.title = "Reader Status";
 
      getStatus();
    const interval = setInterval(() => {
      getStatus()
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  
  const handleCardClick = (index,link) => {
    localStorage.setItem("StatusClickedCard", index.rackNum)
    console.log(index.rackNum, "this is the index of the card clicked");
    navigate(`${process.env.PUBLIC_URL}${link}`);
  };

  const getClickedCard = () =>{
    const storedClickedCard = localStorage.getItem("StatusClickedCard");
      if (storedClickedCard) {
        setClickedCard(Number(storedClickedCard));
        console.log(clickedCard, "this is clicked card");
      }
  }

  const getStatus = async () => {
    try {
      const response = await fetchGetReq(statusUrl);
      setStatus(response);
      console.log(response);
    } catch (error) {
      console.log("error", error);
    }

    getClickedCard()
  };

  return (
    <>
      <div className="layout-right-side rack-status">
        <RefreshButton onClick={()=> getStatus()} />
        <Container>
          <h2 className="main-title text-center mb-5 text-light-blue">
            RACK STATUS / HOME SCREEN
          </h2>

          <Row className="home-card mx-auto">
            {status ? (
              status.map((index) => {
                return (
                  <Col className="col-md-6 mb-5">
                    <Card >
                      <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                          <h2 className="main-title text-center mb-2 text-light-blue">
                            Rack {index.rackNum}
                          </h2>

                          <ul className="list-item" style={{boxShadow: index.rackNum === clickedCard ? '#fcb01b 0px 0px 13px' : 'none' }}>
                            <div className="d-flex justify-content-center mb-3">
                              <div className="status-info text-light">
                                <FaIcons.FaThermometerHalf className="color-yellow" />
                                {index.temp}°C
                              </div>
                              <div className="status-info text-light mx-3">
                                {/*<FaIcons.FaGlassMartiniAlt className="color-yellow" />*/}
                                <img src={Carbon} alt="Carbon Icon" className={'carbon-icon'}/>
                                {index.progress}%
                              </div>
                            </div>
                            <li>
                              <label>Open Bay</label>
                              <Button variant="dark1">{index.openBay}</Button>
                            </li>
                            <li>
                              <label>Running</label>
                              {/* <Link to={`${process.env.PUBLIC_URL}/cassette`}> */}
                                <Button variant="dark2" onClick={()=>handleCardClick(index, '/cassette')}>{index.running}</Button>
                              {/* </Link> */}
                            </li>
                            <li>
                              <label>Complete</label>
                              {/* <Link
                                to={`${process.env.PUBLIC_URL}/rack1/completed`}
                              > */}
                                <Button variant="dark3" onClick={()=>handleCardClick(index, '/rack1/completed')}>
                                  {index.complete}
                                </Button>
                              {/* </Link> */}
                            </li>
                            <li>
                              <label>Bay Errors</label>
                              {/* <Link
                                to={`${process.env.PUBLIC_URL}/rack1/error`}
                              > */}
                                <Button variant="dark4" onClick={()=>handleCardClick(index, '/rack1/error')}>
                                  {index.bayError}
                                </Button>
                              {/* </Link> */}
                            </li>
                            <li className="error">Status: {index.status}</li>
                          </ul>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <Spinner loading={status} />
            )}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ReaderStatus;
