import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import FormFields from "./components/formField";
import Table from "./components/table";
import { useLocation } from "react-router-dom";
import { baseApiUrl } from "../../../../config";
import { fetchPostReq } from "../../../../services/restService";
import Spinner from "../../../shared/spinner";

function EndResultDetails() {
  const get_pre_notes = baseApiUrl + "/api/get_pre_notes";
  const [fields, setFields] = useState();
  const [table, setTable] = useState("");
  const [getJson, setGetJson] = useState(false);
  const [preNotes, setPreNotes] = useState();
  const [isLoading, setisLoading] = useState(true);

  const location = useLocation();
  const CsvfileID = location.state?.csvfileId;

  const requestData = {
    fields: {
      sampleStrain: "sdnjkn",
      medium: "kjn",
      initialOd: "jk",
      sampleText: "njk",
      freeText: "nkj",
    },
    table: [
      {
        A: ["n", "j", "nj", "kjn", "kjnkj", "n", "jkn", "jknkj", "nkjn", "kjn"],
      },
      {
        "A-pre": [
          "kjn",
          "kjnkj",
          "nkj",
          "nkj",
          "nkj",
          "nkj",
          "kj",
          "nkjn",
          "kjn",
          "kjn",
        ],
      },
      {
        B: [
          "kjn",
          "kjn",
          "kjnk",
          "jnkj",
          "n",
          "kjnk",
          "jnkj",
          "nkj",
          "nkj",
          "kj",
        ],
      },
      {
        "B-pre": [
          "kj",
          "kjn",
          "kjn",
          "kjn",
          "kjn",
          "kjn",
          "kj",
          "n",
          "jk",
          "nkj",
        ],
      },
      {
        C: ["n", "kjn", "jk", "n", "jkn", "", "jkn", "jk", "njk", "n"],
      },
      {
        "C-pre": [
          "kjn",
          "kj",
          "njk",
          "n",
          "kjn",
          "jk",
          "njkn",
          "jkn",
          "kj",
          "njk",
        ],
      },
    ],
  };

  function getFieldsJSon(value) {
    setFields(value);
  }
  function getTableJSon(value) {
    setTable(value);
  }

  function getAllJson() {
    setGetJson(true);
  }
  function setJsonFalse() {
    setGetJson(false);
  }

  function saveJson() {
    const finalJson = {
      CsvfileID,
      fields,
      table,
    };

    console.log(finalJson, "this is final json");
    // console.log(CsvfileID, "csv file id");
  }

  useEffect(() => {
    if (fields || table) {
      saveJson();
    }
  }, [fields, table]);

  const getPreNotes = async () => {
    const data = {
      CsvfileID,
    };
    const response = await fetchPostReq(get_pre_notes, data);
    const parsedData = JSON.parse(response.result);
    setPreNotes(JSON.parse(response.result));
    console.log(parsedData, "this is response");
    setisLoading(false)
  };

  useEffect(() => {
    getPreNotes();
    console.log(CsvfileID, "this is csv file id");
  }, []);

  return (
    <div className="layout-right-side cassette-load">
      {isLoading ? (
        <Spinner loading={isLoading} />
      ) : (
        <>
          <h2 class="main-title text-center mb-4 text-light-blue">
            Enter End results and observations
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
                setTableData={preNotes}
                // setPre = {preNotes}
              />
            </Row>
            <Row>
              <Col className="text-center mt-4">
                <Button
                  type="submit"
                  className="mx-2 menu-btn menu-btn2"
                  onClick={() => {
                    getAllJson();
                  }}
                >
                  Save
                </Button>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </div>
  );
}

export default EndResultDetails;
