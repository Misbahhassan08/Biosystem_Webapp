import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Groups() {
  return (
    <Row className="gap-4 mb-5 align-self-center text-center">
      <Col style={{ backgroundColor: "#2484ac" }} className="">
        <h5 className="text-white py-2 m-0">Group 2</h5>
      </Col>
      <Col style={{ backgroundColor: "#2484ac" }}>
        <h5 className="text-white py-2 ">Group Name</h5>
      </Col>
      <Col style={{ backgroundColor: "#2484ac" }}>
        
          <FormControl
            sx={{ m: 1, width: "95%" }}
            size="small"
            label="demo-select-small-label"
            id="demo-select"
          >
            <InputLabel className="dataTypeInput" id="demo-select-small-label">
              Select Fav Setting
            </InputLabel>
            <Select
              className="dataTypeSelect"
              labelId="demo-select-small-label"
              id="demo-select-small"
              label="DataType"
              sx={{
                width: "100%",
              }}
            >
              <MenuItem value={"custom"}>Custom</MenuItem>
              <MenuItem value={"default"}>Default</MenuItem>
              <MenuItem value={"jared"}>Jared</MenuItem>
              <MenuItem value={"rani"}>Rani</MenuItem>
            </Select>
          </FormControl>
        
      </Col>

      <Col className="align-self-center">
      <Button
                  type="submit"
                  className=" menu-btn menu-btn2"
                  
                >
                  Add Group
                </Button>
      </Col>
    </Row>
  );
}

export default Groups;
