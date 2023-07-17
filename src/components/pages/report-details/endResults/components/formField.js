import React, {useEffect, useState} from "react";
import { Row, Col, Form } from "react-bootstrap";

function FormFields(props) {
  const [fields, setFields] = useState('')

  useEffect(() => {
    const fieldJSON ={
      fields
    }
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
                id="initialPlateCount"
                aria-describedby="initialPlateCount"
                className="mt-1"
                placeholder="Initial Plate Count"
                value={fields}
                onChange={(e)=>{setFields(e.target.value)}}
                required
              />
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>
      </Form>
    </div>
  );
}

export default FormFields;
