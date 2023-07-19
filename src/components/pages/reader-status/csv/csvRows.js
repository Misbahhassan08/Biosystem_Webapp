import { Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

function CSVRows(props) {
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
          <Form.Control
            type="text"
            value={data.CsvfileDirectory}
            readOnly
          />
        </td>

        {/* bay number */}
        <td>
          <Form.Control
            type="text"
            value={'1'}
            readOnly
             
          />
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
            value={'Completed'}
            // value="1234"
            readOnly
             
          />
        </td>
        <td>
              <a
                type="submit"
                className="btn text-light "
                onClick={() => {
                  // props.showModal(data.CsvfileID)
                }}
              >
                <u>View</u>
              </a>
        </td>
      </tr>
    );
  });
}
export default CSVRows;
