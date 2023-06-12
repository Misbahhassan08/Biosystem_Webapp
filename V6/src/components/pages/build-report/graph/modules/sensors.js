import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";
import TextField from "@mui/material/TextField";
import DateTimeModal from "./dateTimeModal";
import { useState } from "react";

function Sensors(props) {
  const [editA0, setEditA0] = useState(false);
  const [editA1, setEditA1] = useState(false);
  const [editA2, setEditA2] = useState(false);
  const [editA3, setEditA3] = useState(false);
  const [editA4, setEditA4] = useState(false);
  
  const [editB0, setEditB0] = useState(false);
  const [editB1, setEditB1] = useState(false);
  const [editB2, setEditB2] = useState(false);
  const [editB3, setEditB3] = useState(false);
  const [editB4, setEditB4] = useState(false);

  const [editC0, setEditC0] = useState(false);
  const [editC1, setEditC1] = useState(false);
  const [editC2, setEditC2] = useState(false);
  const [editC3, setEditC3] = useState(false);
  const [editC4, setEditC4] = useState(false);
  const [sensorsClicked, setSensorsClicked] = useState([]);

  return (
    <>
      <Row>
        {/* sensors A */}
        <Col className="col-md-4 Axis-Text-Field-Row">  
          <Row>
          <h5 className="text-white "> A </h5>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="A0"
                  style={{ color: "white" }}
                  checked={editA0}
                  onChange={(e) => {
                    setEditA0(e.target.checked);
                  }}
                />
              }
              label="A0"
            />
          </Row>
          <Row>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="A1"
                  style={{ color: "white" }}
                  checked={editA1}
                  onChange={(e) => {
                    setEditA1(e.target.checked);
                  }}
                />
              }
              label="A1"
            />
          </Row>
          <Row>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="A2"
                  style={{ color: "white" }}
                  checked={editA2}
                  onChange={(e) => {
                    setEditA2(e.target.checked);
                  }}
                />
              }
              label="A2"
            />
          </Row>
          <Row>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="A3"
                  style={{ color: "white" }}
                  checked={editA3}
                  onChange={(e) => {
                    setEditA3(e.target.checked);
                  }}
                />
              }
              label="A3"
            />
          </Row>
          <Row>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="A4"
                  style={{ color: "white" }}
                  checked={editA4}
                  onChange={(e) => {
                    setEditA4(e.target.checked);
                  }}
                />
              }
              label="A4"
            />
          </Row>
        </Col>

        {/* sensors B */}
        <Col className="col-md-4 Axis-Text-Field-Row">  
          <Row>
          <h5 className="text-white "> B </h5>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="B0"
                  style={{ color: "white" }}
                  checked={editB0}
                  onChange={(e) => {
                    setEditB0(e.target.checked);
                  }}
                />
              }
              label="B0"
            />
          </Row>
          <Row>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="B1"
                  style={{ color: "white" }}
                  checked={editB1}
                  onChange={(e) => {
                    setEditB1(e.target.checked);
                  }}
                />
              }
              label="B1"
            />
          </Row>
          <Row>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="B2"
                  style={{ color: "white" }}
                  checked={editB2}
                  onChange={(e) => {
                    setEditB2(e.target.checked);
                  }}
                />
              }
              label="B2"
            />
          </Row>
          <Row>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="B3"
                  style={{ color: "white" }}
                  checked={editB3}
                  onChange={(e) => {
                    setEditB3(e.target.checked);
                  }}
                />
              }
              label="B3"
            />
          </Row>
          <Row>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="B4"
                  style={{ color: "white" }}
                  checked={editB4}
                  onChange={(e) => {
                    setEditB4(e.target.checked);
                  }}
                />
              }
              label="B4"
            />
          </Row>
        </Col>

        {/* sensors A */}
        <Col className="col-md-4 Axis-Text-Field-Row">  
          <Row>
          <h5 className="text-white "> C </h5>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="C0"
                  style={{ color: "white" }}
                  checked={editC0}
                  onChange={(e) => {
                    setEditC0(e.target.checked);
                  }}
                />
              }
              label="C0"
            />
          </Row>
          <Row>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="C1"
                  style={{ color: "white" }}
                  checked={editC1}
                  onChange={(e) => {
                    setEditC1(e.target.checked);
                  }}
                />
              }
              label="C1"
            />
          </Row>
          <Row>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="C2"
                  style={{ color: "white" }}
                  checked={editC2}
                  onChange={(e) => {
                    setEditC2(e.target.checked);
                  }}
                />
              }
              label="C2"
            />
          </Row>
          <Row>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="C3"
                  style={{ color: "white" }}
                  checked={editC3}
                  onChange={(e) => {
                    setEditC3(e.target.checked);
                  }}
                />
              }
              label="C3"
            />
          </Row>
          <Row>
            <FormControlLabel
              sx={{ color: "white" }}
              control={
                <Checkbox
                  id="C4"
                  style={{ color: "white" }}
                  checked={editC4}
                  onChange={(e) => {
                    setEditC4(e.target.checked);
                  }}
                />
              }
              label="C4"
            />
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Sensors;
