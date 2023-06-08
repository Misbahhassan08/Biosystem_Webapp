import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom"
import { Button,Container,Row,Col,Card } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';

function ReaderStatus(){
    useEffect(() => {
        document.title = "Reader Status"
     }, []);

    const [ setShow] = useState(false);

    const handleShow = () => setShow(true);

    return (
        <>
        <div className="layout-right-side rack-status">
        <Container>
        <h2 className="main-title text-center mb-5 text-light-blue">RACK STATUS / HOME SCREEN</h2>
            
                <Row className="home-card mx-auto">
                    <Col>
                        <Card onClick={handleShow}>
                            <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                            <h2 className="main-title text-center mb-2 text-light-blue">Rack 1</h2>
                            
                            <ul className="list-item">
                            <div className="d-flex mb-3">
                                <div className="status-info text-light"><FaIcons.FaThermometerHalf className="color-yellow" />36c</div>
                                <div className="status-info text-light mx-3"><FaIcons.FaGlassMartiniAlt className="color-yellow" />5%</div>
                            </div>
                            <li><label>Open Bay</label>
                            <Button variant="dark1">2</Button></li>
                            <li><label>Running</label><Link to={`${process.env.PUBLIC_URL}/cassette`}>
                            <Button variant="dark2">1</Button></Link></li>
                            <li><label>Complete</label>
                            <Link to={`${process.env.PUBLIC_URL}/rack1/completed`}>
                            <Button variant="dark3">2</Button></Link></li>
                            <li><label>Bay Errors</label>
                            <Link to={`${process.env.PUBLIC_URL}/rack1/error`}><Button variant="dark4">1</Button></Link></li>
                            <li className="error">Status:
                            Running/Error/complete</li>
                            </ul>
                            
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>

            
            </Container>
            </div>
            </>
            )
        }

export default ReaderStatus;