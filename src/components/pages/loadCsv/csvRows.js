import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CSVRows(props) {

  // console.log(props.rowsData, "this is csv Rows Data");
  return props.rowsData.map((data, index) => {
    return (
      <tr key={index} className="TableDataRows">
        <td>
          <input type="text" value={data.sample_num} readOnly className="form-control" />
        </td>
        <td>
          <input
            type="text"
            value={data.date_time}
            readOnly
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={data.CsvfileDirectory}
            // value="1234"
            readOnly
            className="form-control"
          />
        </td>
        <td>
        {/* <Link to={process.env.PUBLIC_URL + "/build-report/graph"}> */}
            <Button
              type="submit"
              className="mx-2 menu-btn menu-btn1"
              onClick={() => {
                // props.checkData()
              }}
            >
              Get CSV
            </Button>
          {/* </Link> */}
        </td>
      </tr>
    );
  });
}
export default CSVRows;
