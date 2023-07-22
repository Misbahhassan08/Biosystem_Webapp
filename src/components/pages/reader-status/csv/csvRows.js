import { useState, useEffect } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

const CSVRows = (props) => {
  const [clickedViewIndex, setClickedViewIndex] = useState();

  const handleViewClick = (buttonIndex) => {
    localStorage.setItem("CompletedTestClickedIndex", buttonIndex);
    setClickedViewIndex(buttonIndex); // Update the state immediately
    console.log(buttonIndex, "this is clicked");
  };

  useEffect(() => {
    const index = localStorage.getItem("CompletedTestClickedIndex");
    setClickedViewIndex(index)
    console.log(index, 'this is index');
  }, []);

  // console.log(props.rowsData, "this is csv Rows Data");
  return props.rowsData.map((data, index) => {
    const isNewRow = index === props.rowsData.length - 1;

    return (
      <tr key={index}>
        {/* id field */}
        <td>
          <Form.Control type="text" value={index + 1} placeholder="" />
        </td>

        {/* Accession Field */}
        <td>
          <Form.Control type="text" value={data.CsvfileDirectory} readOnly />
        </td>

        {/* bay number */}
        <td>
          <Form.Control type="text" value={"1"} readOnly />
        </td>

        {/* details */}
        <td>
          <Form.Control
            type="text"
            value={data.date_time}
            // value="1234"
            readOnly
          />
        </td>

        {/* status */}
        <td>
          <Form.Control
            type="text"
            value={"Complete"}
            // value="1234"
            readOnly
          />
        </td>
        <td>
          {}
          <Link
            to={process.env.PUBLIC_URL + "/show-csv/grid"}
            state={{ csvfileId: data.CsvfileID, fileName: data.CsvfileDirectory  }}
          >
            <a
              className={`btn`}
              onClick={() => handleViewClick(index)}
              style={{ color: index == clickedViewIndex ? "#FFFF00" : "#fff" }}
            >
              <u >
                View
              </u>
            </a>
          </Link>
        </td>
      </tr>
    );
  });
}
export default CSVRows;
