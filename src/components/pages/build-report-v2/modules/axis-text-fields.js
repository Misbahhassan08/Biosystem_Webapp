import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function TextFields(props) {
  const [edit0, setEdit0] = useState(true);
  const [edit1, setEdit1] = useState(true);
  const [edit2, setEdit2] = useState(true);
  const [edit3, setEdit3] = useState(true);
  const [edit4, setEdit4] = useState(true);
  const [sensorsClicked, setSensorsClicked] = useState([]);

  useEffect(() => {
    if (edit0 == false) {
      setSensorsClicked(0);
    } else if (edit1 == false) {
      setSensorsClicked(1);
    } else if (edit2 == false) {
      setSensorsClicked(2);
    } else if (edit3 == false) {
      setSensorsClicked(3);
    } else if (edit4 == false) {
      setSensorsClicked(4);
    } else {
      setSensorsClicked();
    }
  }, [edit0, edit1, edit2, edit3, edit4]);

  useEffect(() => {
    props.getSensors(sensorsClicked);
  }, [sensorsClicked]);

  return (
    <>
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
            label="A0"
          />
        </Col>
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            <TextField
              hiddenLabel
              disabled={edit0}
              id="x1-min"
              variant="filled"
              size="small"
              sx={{
                width: 50,
                "& .MuiInputBase-input": {
                  height: 15,
                },
                "& .MuiInputBase-root, .MuiInputBase-root:hover": {
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
              }}
            />
            <TextField
              hiddenLabel
              disabled={edit0}
              id="x1-max"
              variant="filled"
              size="small"
              sx={{
                width: 50,
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
              }}
            />
          </div>
        </Col>
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            <TextField
              hiddenLabel
              disabled={edit0}
              id="y1-min"
              variant="filled"
              size="small"
              sx={{
                width: 50,
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
              }}
            />
            <TextField
              hiddenLabel
              disabled={edit0}
              id="y1-max"
              variant="filled"
              size="small"
              sx={{
                width: 50,
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
              }}
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
            label="A1"
          />
        </Col>
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            <TextField
              hiddenLabel
              disabled={edit1}
              id="x1-min"
              variant="filled"
              size="small"
              sx={{
                width: 50,
                "& .MuiInputBase-input": {
                  height: 15,
                },
                "& .MuiInputBase-root, .MuiInputBase-root:hover": {
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
              }}
            />
            <TextField
              hiddenLabel
              disabled={edit1}
              id="x1-max"
              variant="filled"
              size="small"
              sx={{
                width: 50,
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
              sx={{
                width: 50,
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
              }}
            />
            <TextField
              hiddenLabel
              disabled={edit1}
              id="y1-max"
              variant="filled"
              size="small"
              sx={{
                width: 50,
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
              }}
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
            label="A2"
          />
        </Col>
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            <TextField
              hiddenLabel
              disabled={edit2}
              id="x1-min"
              variant="filled"
              size="small"
              sx={{
                width: 50,
                "& .MuiInputBase-input": {
                  height: 15,
                },
                "& .MuiInputBase-root, .MuiInputBase-root:hover": {
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
              }}
            />
            <TextField
              hiddenLabel
              disabled={edit2}
              id="x1-max"
              variant="filled"
              size="small"
              sx={{
                width: 50,
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
              }}
            />
          </div>
        </Col>
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            <TextField
              hiddenLabel
              disabled={edit2}
              id="y1-min"
              variant="filled"
              size="small"
              sx={{
                width: 50,
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
              }}
            />
            <TextField
              hiddenLabel
              disabled={edit2}
              id="y1-max"
              variant="filled"
              size="small"
              sx={{
                width: 50,
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
              }}
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
            label="A3"
          />
        </Col>
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            <TextField
              hiddenLabel
              disabled={edit3}
              id="x1-min"
              variant="filled"
              size="small"
              sx={{
                width: 50,
                "& .MuiInputBase-input": {
                  height: 15,
                },
                "& .MuiInputBase-root, .MuiInputBase-root:hover": {
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
              }}
            />
            <TextField
              hiddenLabel
              disabled={edit3}
              id="x1-max"
              variant="filled"
              size="small"
              sx={{
                width: 50,
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
              }}
            />
          </div>
        </Col>
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            <TextField
              hiddenLabel
              disabled={edit3}
              id="y1-min"
              variant="filled"
              size="small"
              sx={{
                width: 50,
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
              }}
            />
            <TextField
              hiddenLabel
              disabled={edit3}
              id="y1-max"
              variant="filled"
              size="small"
              sx={{
                width: 50,
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
              }}
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
            label="A4"
          />
        </Col>
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            <TextField
              hiddenLabel
              disabled={edit4}
              id="x1-min"
              variant="filled"
              size="small"
              sx={{
                width: 50,
                "& .MuiInputBase-input": {
                  height: 15,
                },
                "& .MuiInputBase-root, .MuiInputBase-root:hover": {
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
              }}
            />
            <TextField
              hiddenLabel
              disabled={edit4}
              id="x1-max"
              variant="filled"
              size="small"
              sx={{
                width: 50,
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
              }}
            />
          </div>
        </Col>
        <Col className="align-self-center">
          <div style={{ display: "flex", gap: 13 }}>
            <TextField
              hiddenLabel
              disabled={edit4}
              id="y1-min"
              variant="filled"
              size="small"
              sx={{
                width: 50,
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
              }}
            />
            <TextField
              hiddenLabel
              disabled={edit4}
              id="y1-max"
              variant="filled"
              size="small"
              sx={{
                width: 50,
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
              }}
            />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default TextFields;
