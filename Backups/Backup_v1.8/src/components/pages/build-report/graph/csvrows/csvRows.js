import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchPostReq } from "../../../../../services/restService";
import { baseApiUrl } from "../../../../../config";

const get_graph_data = baseApiUrl + "/api/get_graph_meta_data";

// const allGraphReport = async () => {
//   const data = {
//     Data_Point: [0, 1, 2, 3, 4],
//     Data_Req: "Raw",
//   };

//   const response = await fetchPostReq(get_graph_data, data);
//   localStorage.setItem("allGraphReport", JSON.stringify(response.result))
// };

function CSVRows(props) {
  console.log(props.rowsData, "this is csv Rows Data");
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
          <Link to={process.env.PUBLIC_URL + "/reports/all-graph-report"} state={{csvfileId: data.CsvfileID}}>
            <Button
              type="submit"
              className="mx-2 menu-btn menu-btn1"
              onClick={() => {
                // allGraphReport()
              }}
            >
              Report
            </Button>
          </Link>
        </td>
      </tr>
    );
  });
}
export default CSVRows;
