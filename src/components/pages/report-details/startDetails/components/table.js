import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";

function Table(props) {
    function getTableData() {
      const data = [
        localStorage.getItem("GFSID"),
        {
          A: [
            document.getElementById("A0").value,
            document.getElementById("A1").value,
            document.getElementById("A2").value,
            document.getElementById("A3").value,
            document.getElementById("A4").value,
            document.getElementById("A5").value,
            document.getElementById("A6").value,
            document.getElementById("A7").value,
            document.getElementById("A8").value,
            document.getElementById("A9").value,
          ],
        },
        {
          "A-pre": [
            document.getElementById("A-pre-0").value,
            document.getElementById("A-pre-1").value,
            document.getElementById("A-pre-2").value,
            document.getElementById("A-pre-3").value,
            document.getElementById("A-pre-4").value,
            document.getElementById("A-pre-5").value,
            document.getElementById("A-pre-6").value,
            document.getElementById("A-pre-7").value,
            document.getElementById("A-pre-8").value,
            document.getElementById("A-pre-9").value,
          ],
        },
        {
          B: [
            document.getElementById("B0").value,
            document.getElementById("B1").value,
            document.getElementById("B2").value,
            document.getElementById("B3").value,
            document.getElementById("B4").value,
            document.getElementById("B5").value,
            document.getElementById("B6").value,
            document.getElementById("B7").value,
            document.getElementById("B8").value,
            document.getElementById("B9").value,
          ],
        },
        {
          "B-pre": [
            document.getElementById("B-pre-0").value,
            document.getElementById("B-pre-1").value,
            document.getElementById("B-pre-2").value,
            document.getElementById("B-pre-3").value,
            document.getElementById("B-pre-4").value,
            document.getElementById("B-pre-5").value,
            document.getElementById("B-pre-6").value,
            document.getElementById("B-pre-7").value,
            document.getElementById("B-pre-8").value,
            document.getElementById("B-pre-9").value,
          ],
        },
        {
          C: [
            document.getElementById("C0").value,
            document.getElementById("C1").value,
            document.getElementById("C2").value,
            document.getElementById("C3").value,
            document.getElementById("C4").value,
            document.getElementById("C5").value,
            document.getElementById("C6").value,
            document.getElementById("C7").value,
            document.getElementById("C8").value,
            document.getElementById("C9").value,
          ],
        },
        {
          "C-pre": [
            document.getElementById("C-pre-0").value,
            document.getElementById("C-pre-1").value,
            document.getElementById("C-pre-2").value,
            document.getElementById("C-pre-3").value,
            document.getElementById("C-pre-4").value,
            document.getElementById("C-pre-5").value,
            document.getElementById("C-pre-6").value,
            document.getElementById("C-pre-7").value,
            document.getElementById("C-pre-8").value,
            document.getElementById("C-pre-9").value,
          ],
        },
      ];

      return data;

    }

    
  useEffect(() => {
    const data = getTableData()
    props.getTable(data);
    props.stopJson()

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
            <td>
              <input id="A0" type="text" className="form-control" />
            </td>
            <td>
              <input id="A1" type="text" className="form-control" />
            </td>
            <td>
              <input id="A2" type="text" className="form-control" />
            </td>
            <td>
              <input id="A3" type="text" className="form-control" />
            </td>
            <td>
              <input id="A4" type="text" className="form-control" />
            </td>
            <td>
              <input id="A5" type="text" className="form-control" />
            </td>
            <td>
              <input id="A6" type="text" className="form-control" />
            </td>
            <td>
              <input id="A7" type="text" className="form-control" />
            </td>
            <td>
              <input id="A8" type="text" className="form-control" />
            </td>
            <td>
              <input id="A9" type="text" className="form-control" />
            </td>
          </tr>
          {/* row 2 */}
          <tr className="color_yel sampleTableDataRows">
            <td>
              <b className="bold-text">A –pre Notes</b>
            </td>
            <td>
              <input id="A-pre-0" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-pre-1" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-pre-2" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-pre-3" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-pre-4" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-pre-5" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-pre-6" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-pre-7" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-pre-8" type="text" className="form-control" />
            </td>
            <td>
              <input id="A-pre-9" type="text" className="form-control" />
            </td>
          </tr>
          {/* row 3 */}
          <tr className="color_blue sampleTableDataRows">
            <td>
              <b className="bold-text">B</b>
            </td>
            <td>
              <input id="B0" type="text" className="form-control" />
            </td>
            <td>
              <input id="B1" type="text" className="form-control" />
            </td>
            <td>
              <input id="B2" type="text" className="form-control" />
            </td>
            <td>
              <input id="B3" type="text" className="form-control" />
            </td>
            <td>
              <input id="B4" type="text" className="form-control" />
            </td>
            <td>
              <input id="B5" type="text" className="form-control" />
            </td>
            <td>
              <input id="B6" type="text" className="form-control" />
            </td>
            <td>
              <input id="B7" type="text" className="form-control" />
            </td>
            <td>
              <input id="B8" type="text" className="form-control" />
            </td>
            <td>
              <input id="B9" type="text" className="form-control" />
            </td>
          </tr>
          {/* row 4 */}
          <tr className="color_blue sampleTableDataRows">
            <td>
              <b className="bold-text">B –pre Notes</b>
            </td>
            <td>
              <input id="B-pre-0" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-pre-1" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-pre-2" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-pre-3" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-pre-4" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-pre-5" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-pre-6" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-pre-7" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-pre-8" type="text" className="form-control" />
            </td>
            <td>
              <input id="B-pre-9" type="text" className="form-control" />
            </td>
          </tr>
          {/* row 5 */}
          <tr className="color_yel sampleTableDataRows">
            <td>
              <b className="bold-text">C</b>
            </td>
            <td>
              <input id="C0" type="text" className="form-control" />
            </td>
            <td>
              <input id="C1" type="text" className="form-control" />
            </td>
            <td>
              <input id="C2" type="text" className="form-control" />
            </td>
            <td>
              <input id="C3" type="text" className="form-control" />
            </td>
            <td>
              <input id="C4" type="text" className="form-control" />
            </td>
            <td>
              <input id="C5" type="text" className="form-control" />
            </td>
            <td>
              <input id="C6" type="text" className="form-control" />
            </td>
            <td>
              <input id="C7" type="text" className="form-control" />
            </td>
            <td>
              <input id="C8" type="text" className="form-control" />
            </td>
            <td>
              <input id="C9" type="text" className="form-control" />
            </td>
          </tr>
          {/* row 6 */}
          <tr className="color_yel sampleTableDataRows">
            <td>
              <b className="bold-text">C –pre Notes</b>
            </td>
            <td>
              <input id="C-pre-0" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-pre-1" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-pre-2" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-pre-3" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-pre-4" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-pre-5" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-pre-6" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-pre-7" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-pre-8" type="text" className="form-control" />
            </td>
            <td>
              <input id="C-pre-9" type="text" className="form-control" />
            </td>
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
