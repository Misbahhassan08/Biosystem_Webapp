import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";
import TextField from "@mui/material/TextField";
import DateTimeModal from "./dateTimeModal";
import { useState } from "react";

function TextFields(props) {
  const [edit0, setEdit0] = useState(true);
  const [edit1, setEdit1] = useState(true);
  const [edit2, setEdit2] = useState(true);
  const [edit3, setEdit3] = useState(true);
  const [edit4, setEdit4] = useState(true);
  const [sensorsClicked, setSensorsClicked] = useState([]);
  const [openDateTimeModalState, setOpenDateTimeModalState] = useState(false);
  const [selectedTextField, setSelectedTextField] = useState("");

  const style = {
    width: "50%",
    "& .MuiInputBase-input": {
      height: 15,
    },
    "& .MuiFilledInput-root, .MuiFilledInput-root:hover": {
      background: "#fff",
    },
    "& .css-1ff8729-MuiInputBase-root-MuiFilledInput-root": {
      borderRadius: 0,
    },
    "& .Mui-disabled": {
      background: "grey",
    },
    "& .Mui-disabled:hover": {
      background: "grey",
    },
  };

  useEffect(() => {
    const clickedSensors = [];
    if (!edit0) {
      clickedSensors.push(0);
    }
    if (!edit1) {
      clickedSensors.push(1);
    }
    if (!edit2) {
      clickedSensors.push(2);
    }
    if (!edit3) {
      clickedSensors.push(3);
    }
    if (!edit4) {
      clickedSensors.push(4);
    }
    setSensorsClicked(clickedSensors);
  }, [edit0, edit1, edit2, edit3, edit4]);

  useEffect(() => {
    props.getSensors(sensorsClicked);
  }, [sensorsClicked]);

  function openDateTimeModal() {
    setOpenDateTimeModalState(true);
    console.log(selectedTextField, "this is the selcted text field");
  }

  return (
    <>
      <DateTimeModal />
      <Row>
        <Col className="col-md-3">
          <FormControlLabel
            sx={{ color: "white" }}
            control={
              <Checkbox
                style={{ color: "white" }}
                checked={edit0}
                onChange={(e) => {
                  setEdit0(e.target.checked);
                }}
              />
            }
            label="P0"
          />
        </Col>

        {/* P0 X AXIS COL */}
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            <TextField
              hiddenLabel
              disabled={edit0}
              id="x0-min"
              variant="filled"
              size="small"
              sx={style}
              onClick={() => {
                setSelectedTextField("x0-min");
                openDateTimeModal();
              }}
            />
            <TextField
              hiddenLabel
              disabled={edit0}
              id="x0-max"
              variant="filled"
              size="small"
              sx={style}
              onClick={() => {
                setSelectedTextField("x0-max");
                openDateTimeModal();
              }}
            />
          </div>
        </Col>
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            <TextField
              hiddenLabel
              disabled={edit0}
              id="y0-min"
              variant="filled"
              size="small"
              sx={style}
            />
            <TextField
              hiddenLabel
              disabled={edit0}
              id="y0-max"
              variant="filled"
              size="small"
              sx={style}
            />
          </div>
        </Col>
      </Row>

      {
        // row a1
      }
      <Row>
        <Col className="col-md-3">
          <FormControlLabel
            sx={{ color: "white" }}
            control={
              <Checkbox
                style={{ color: "white" }}
                checked={edit1}
                onChange={(e) => {
                  setEdit1(e.target.checked);
                  console.log(edit1);
                }}
              />
            }
            label="P1"
          />
        </Col>

        {/* P1 X AXIS COL */}
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            <TextField
              hiddenLabel
              disabled={edit1}
              id="x1-min"
              variant="filled"
              size="small"
              sx={style}
              onClick={() => {
                setSelectedTextField("x1-min");
                openDateTimeModal();
              }}
            />
            <TextField
              hiddenLabel
              disabled={edit1}
              id="x1-max"
              variant="filled"
              size="small"
              sx={style}
              onClick={() => {
                setSelectedTextField("x1-max");
                openDateTimeModal();
              }}
            />
          </div>
        </Col>
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            <TextField
              hiddenLabel
              disabled={edit1}
              id="y1-min"
              variant="filled"
              size="small"
              sx={style}
            />
            <TextField
              hiddenLabel
              disabled={edit1}
              id="y1-max"
              variant="filled"
              size="small"
              sx={style}
            />
          </div>
        </Col>
      </Row>

      {
        // row a2
      }
      <Row>
        <Col className="col-md-3">
          <FormControlLabel
            sx={{ color: "white" }}
            control={
              <Checkbox
                style={{ color: "white" }}
                checked={edit2}
                onChange={(e) => {
                  setEdit2(e.target.checked);
                  console.log(edit2);
                }}
              />
            }
            label="P2"
          />
        </Col>

        {/* P2 X AXIS COL */}
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            <TextField
              hiddenLabel
              disabled={edit2}
              id="x2-min"
              variant="filled"
              size="small"
              sx={style}
              onClick={() => {
                setSelectedTextField("x2-min");
                openDateTimeModal();
              }}
            />
            <TextField
              hiddenLabel
              disabled={edit2}
              id="x2-max"
              variant="filled"
              size="small"
              sx={style}
              onClick={() => {
                setSelectedTextField("x2-max");
                openDateTimeModal();
              }}
            />
          </div>
        </Col>
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            <TextField
              hiddenLabel
              disabled={edit2}
              id="y2-min"
              variant="filled"
              size="small"
              sx={style}
            />
            <TextField
              hiddenLabel
              disabled={edit2}
              id="y2-max"
              variant="filled"
              size="small"
              sx={style}
            />
          </div>
        </Col>
      </Row>

      {
        // row a3
      }
      <Row>
        <Col className="col-md-3">
          <FormControlLabel
            sx={{ color: "white" }}
            control={
              <Checkbox
                style={{ color: "white" }}
                checked={edit3}
                onChange={(e) => {
                  setEdit3(e.target.checked);
                  console.log(edit3);
                }}
              />
            }
            label="P3"
          />
        </Col>

        {/* P3 X AXIS COL */}
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            <TextField
              hiddenLabel
              disabled={edit3}
              id="x3-min"
              variant="filled"
              size="small"
              sx={style}
              onClick={() => {
                setSelectedTextField("x3-min");
                openDateTimeModal();
              }}
            />

            <TextField
              hiddenLabel
              disabled={edit3}
              id="x3-max"
              variant="filled"
              size="small"
              sx={style}
              onClick={() => {
                setSelectedTextField("x3-max");
                openDateTimeModal();
              }}
            />
          </div>
        </Col>
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            <TextField
              hiddenLabel
              disabled={edit3}
              id="y3-min"
              variant="filled"
              size="small"
              sx={style}
            />
            <TextField
              hiddenLabel
              disabled={edit3}
              id="y3-max"
              variant="filled"
              size="small"
              sx={style}
            />
          </div>
        </Col>
      </Row>

      {
        // row a4
      }
      <Row>
        <Col className="col-md-3">
          <FormControlLabel
            sx={{ color: "white" }}
            control={
              <Checkbox
                style={{ color: "white" }}
                checked={edit4}
                onChange={(e) => {
                  setEdit4(e.target.checked);
                  console.log(edit4);
                }}
              />
            }
            label="P4"
          />
        </Col>

        {/* P4 X AXIS COL */}
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            <TextField
              hiddenLabel
              disabled={edit4}
              id="x4-min"
              variant="filled"
              size="small"
              sx={style}
              onClick={() => {
                setSelectedTextField("x4-min");
                openDateTimeModal();
              }}
            />
            <TextField
              hiddenLabel
              disabled={edit4}
              id="x4-max"
              variant="filled"
              size="small"
              sx={style}
              onClick={() => {
                setSelectedTextField("x4-max");
                openDateTimeModal();
              }}
            />
          </div>
        </Col>
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            <TextField
              hiddenLabel
              disabled={edit4}
              id="y4-min"
              variant="filled"
              size="small"
              sx={style}
            />
            <TextField
              hiddenLabel
              disabled={edit4}
              id="y4-max"
              variant="filled"
              size="small"
              sx={style}
            />
          </div>
        </Col>
      </Row>
      {/* <DateTimeModal open={openDateTimeModalState} /> */}
    </>
  );
}

export default TextFields;
