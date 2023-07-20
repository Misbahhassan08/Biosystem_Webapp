import React, { useEffect, useState } from "react";
import { Row, Col, Form, } from "react-bootstrap";

function FormFields(props) {
  let pro = props.setFieldsData.result
  let sample_Strain, Medium, initial_Od, sample_Text, free_Text = ''

  if(props.setFieldsData){
    sample_Strain = props.setFieldsData.fields.sampleStrain
    Medium = props.setFieldsData.fields.medium
    initial_Od = props.setFieldsData.fields.initialOd 
    sample_Text = props.setFieldsData.fields.sampleText
    free_Text = props.setFieldsData.fields.freeText
  }
  const [sampleStrain, setSampleStrain] = useState(sample_Strain);
  const [medium, setMedium] = useState(Medium);
  const [initialOd, setInitialOd] = useState(initial_Od);
  const [sampleText, setSampleText] = useState(sample_Text);
  const [freeText, setFreeText] = useState(free_Text);

  const fieldJSON = {
    sampleStrain: sampleStrain,
    medium: medium,
    initialOd: initialOd,
    sampleText: sampleText,
    freeText: freeText,
  };

  useEffect(() => {
    if (props.getJson) {
      props.getFields(fieldJSON);
    }
    props.stopJson();
    // console.log(fieldJSON, "this is field JSON");
  }, [props.getJson]);
  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Group>
              {/* <Form.Label>Sample Strain </Form.Label> */}
              <Form.Control
                type="text"
                id="sampleStrain"
                aria-describedby="Sample Strain"
                className="mt-1"
                placeholder="Sample Strain"
                value={sampleStrain}
                onChange={(event)=>{
                  setSampleStrain(event.target.value)
                }}
                required
              >
              </Form.Control>
            </Form.Group>
            <Form.Group>
              {/* <Form.Label>Medium </Form.Label> */}
              <Form.Control
                type="text"
                id="medium"
                value={medium}
                aria-describedby="medium"
                className="mt-1"
                placeholder="Medium"
                onChange={(event)=>{
                  setMedium(event.target.value)
                }}
                required
              >
              </Form.Control>
            </Form.Group>
            <Form.Group>
              {/* <Form.Label>Initial OD </Form.Label> */}
              <Form.Control
                type="text"
                id="initialOd"
                value={initialOd}
                aria-describedby="InitialOd"
                className="mt-1"
                placeholder="Initial OD"
                onChange={(event)=>{
                  setInitialOd(event.target.value)
                }}
                required
              > 
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              {/* <Form.Label>Smaple Text </Form.Label> */}
              <Form.Control
                type="text"
                id="sampleText"
                value={sampleText}
                aria-describedby="sampleText"
                className="mt-1"
                placeholder="Sample Text"
                onChange={(event)=>{
                  setSampleText(event.target.value)
                }}
                required
              >
              </Form.Control>
            </Form.Group>
            <Form.Group>
              {/* <Form.Label>Free Text </Form.Label> */}
              <Form.Control
                type="text"
                id="freeText"
                value={freeText}
                aria-describedby="freeText"
                className="mt-1"
                placeholder="Free Text"
                onChange={(event)=>{
                  setFreeText(event.target.value)
                }}
                required
              >
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Form>
      
    </div>
  );
}

export default FormFields;
