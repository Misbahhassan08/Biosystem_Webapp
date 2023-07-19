import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import FormFields from "./components/formField";
import Table from "./components/table";
import { fetchPostReq } from "../../../../services/restService";
import { baseApiUrl } from "../../../../config";

function SampleConcentrationDetails(props) {
  const pre_notes_add = baseApiUrl + "/api/post_pre_notes";
  const [fields, setFields] = useState();
  const [table, setTable] = useState();
  const [getJson, setGetJson] = useState(false);

  const location = useLocation();

  const CsvfileID = props.csvfileId;

  function getFieldsJSon(value) {
    setFields(value);
  }
  function getTableJSon(value) {
    setTable(value);

    // run the fucntion after the data is collected
    // saveJson();
  }

  function getAllJson() {
    setGetJson(true);
  }
  function setJsonFalse() {
    setGetJson(false);
  }

 async  function saveJson() {
    const finalJson = {
      CsvfileID,
      fields,
      table,
    };

    try {
      const response = await fetchPostReq(pre_notes_add, finalJson);
      console.log(response);
      if (response.result) {  
        // Change the URL to load-csv
        props.closeModal()
      }
    } catch (error) {
      // Handle the error
      console.error("Error:", error);
    }
  
  }

  useEffect(() => {
    if (fields || table) {
      saveJson();
    }
  }, [ fields, table]);

  return (
    <div className="layout-right-side cassette-load">
      <h2 class="main-title text-center mb-4 text-light-blue">
        Enter Sample and concentration details
      </h2>
      <Container>
        <FormFields
          getFields={getFieldsJSon}
          getJson={getJson}
          stopJson={setJsonFalse}
        />
        <Row>
          <Table
            getTable={getTableJSon}
            getJson={getJson}
            stopJson={setJsonFalse}
          />
        </Row>
        <Row>
          <Col className="text-center mt-4">
            {/* <Link to={process.env.PUBLIC_URL + "/load-csv"}> */}
            <Button
              type="submit"
              className="mx-2 menu-btn menu-btn2"
              onClick={() => {
                getAllJson();
              }}
            >
              Save
            </Button>
            {/* </Link> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SampleConcentrationDetails;
