import React from 'react'

function Table() {
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
          <td>Tet-0.25</td>
          <td>Tet-0.5</td>
          <td>Tet-1</td>
          <td>Azi-0.25</td>
          <td>Azi-0.5</td>
          <td>Azi-1</td>
          <td>Blank</td>
          <td>+ve control</td>
          <td></td>
          <td>Empty</td>
        </tr>
        {/* row 2 */}
        <tr className="color_yel sampleTableDataRows">
          <td>
            <b className="bold-text">A – OD</b>
          </td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
        </tr>
        {/* row 3 */}
        <tr className="color_yel sampleTableDataRows">
          <td>
            <b className="bold-text">A –pre Notes</b>
          </td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
        </tr>
        {/* row 4 */}
        <tr className="color_blue sampleTableDataRows">
          <td>
            <b className="bold-text">B</b>
          </td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
        </tr>
        {/* row 5 */}
        <tr className="color_blue sampleTableDataRows">
          <td>
            <b className="bold-text">B – OD</b>
          </td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
        </tr>
        {/* row 6 */}
        <tr className="color_blue sampleTableDataRows">
          <td>
            <b className="bold-text">B –pre Notes</b>
          </td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
        </tr>
        {/* row 7 */}
        <tr className="color_yel sampleTableDataRows">
          <td>
            <b className="bold-text">C</b>
          </td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
        </tr>
        {/* row 8 */}
        <tr className="color_yel sampleTableDataRows">
          <td>
            <b className="bold-text">C – OD</b>
          </td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
        </tr>
        {/* row 9 */}
        <tr className="color_yel sampleTableDataRows">
          <td>
            <b className="bold-text">C –pre Notes</b>
          </td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
          <td><input type="text" className="form-control" /></td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default Table