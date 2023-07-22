import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";

function Table(props) {
  let initialData = {
    A: ["", "", "", "", "", "", "", "", "", ""],
    A_pre: ["", "", "", "", "", "", "", "", "", ""],
    B: ["", "", "", "", "", "", "", "", "", ""],
    B_pre: ["", "", "", "", "", "", "", "", "", ""],
    C: ["", "", "", "", "", "", "", "", "", ""],
    C_pre: ["", "", "", "", "", "", "", "", "", ""],
  };

  if(props.setTableData.table){
    initialData = {
      A: props.setTableData?.table?.A ,
      A_pre: props.setTableData?.table.A_pre ,
      B: props.setTableData?.table?.B ,
      B_pre: props.setTableData?.table.B_pre ,
      C: props.setTableData?.table?.C ,
      C_pre: props.setTableData?.table.C_pre ,
    };
  }

  const [tableData, setTableData] = useState(initialData);

  // debugger
  function handleInputChange(event, key, index) {
    const { value } = event.target;
    setTableData((prevState) => ({
      ...prevState,
      [key]: prevState[key].map((item, i) => (i === index ? value : item)),
    }));
  }

  useEffect(() => {
    if (props.getJson) {
      props.getTable(tableData);
    }
    props.stopJson();
  }, [props.getJson]);

  return (
    <div
      className="table-responsive"
      style={{
        overflow: "auto",
        fontFamily: "Corbel",
        marginTop: "-2px",
        marginInline: "20px",
        width: "96%",
      }}
    >
      <table className="sample-details" style={{ width: "100%" }}>
        <thead>
          <tr className="one">
            <th></th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
          </tr>
        </thead>
        <tbody>
          {/* row 2 */}
          <tr className="color_yel sampleTableDataRows">
            <td>
              <b className="bold-text">A</b>
            </td>
            {tableData.A.map((item, index) => {
              return (
                <td key={index}>
                  <input
                    id={"A" + index}
                    value={item}
                    type="text"
                    className="form-control"
                    onChange={(e) => handleInputChange(e, "A", index)}
                  />
                </td>
              );
            })}
          </tr>

          {/* row 2 */}
          <tr className="color_yel sampleTableDataRows">
            <td>
              <b className="bold-text">A –pre Notes</b>
            </td>
            {tableData.A_pre.map((item, index) => {
              return (
                <td key={index}>
                  <input
                    id={"A-pre-" + index}
                    value={item}
                    type="text"
                    className="form-control"
                    onChange={(e) => handleInputChange(e, "A_pre", index)}
                  />
                </td>
              );
            })}
          </tr>

          {/* row 3 */}
          <tr className="color_blue sampleTableDataRows">
            <td>
              <b className="bold-text">B</b>
            </td>
            {tableData.B.map((item, index) => {
              return (
                <td key={index}>
                  <input
                    id={"B" + index}
                    value={item}
                    type="text"
                    className="form-control"
                    onChange={(e) => handleInputChange(e, "B", index)}
                  />
                </td>
              );
            })}
          </tr>

          {/* row 4 */}
          <tr className="color_blue sampleTableDataRows">
            <td>
              <b className="bold-text">B –pre Notes</b>
            </td>
            {tableData.B_pre.map((item, index) => {
              return (
                <td key={index}>
                  <input
                    id={"B-pre-" + index}
                    value={item}
                    type="text"
                    className="form-control"
                    onChange={(e) => handleInputChange(e, "B_pre", index)}
                  />
                </td>
              );
            })}
          </tr>

          {/* row 5 */}
          <tr className="color_yel sampleTableDataRows">
            <td>
              <b className="bold-text">C</b>
            </td>
            {tableData.C.map((item, index) => {
              return (
                <td key={index}>
                  <input
                    id={"C" + index}
                    value={item}
                    type="text"
                    className="form-control"
                    onChange={(e) => handleInputChange(e, "C", index)}
                  />
                </td>
              );
            })}
          </tr>

          {/* row 6 */}
          <tr className="color_yel sampleTableDataRows">
            <td>
              <b className="bold-text">C –pre Notes</b>
            </td>
            {tableData.C_pre.map((item, index) => {
              return (
                <td key={index}>
                  <input
                    id={"C-pre-" + index}
                    value={item}
                    type="text"
                    className="form-control"
                    onChange={(e) => handleInputChange(e, "C_pre", index)}
                  />
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
      {/* <Row>
        <Col className="text-center mt-4">
          <Button
              type="submit"
              className="mx-2 menu-btn menu-btn2"
              onClick={getJson}
            >
              Save
            </Button>
        </Col>
        </Row> */}
    </div>
  );
}

export default Table;
