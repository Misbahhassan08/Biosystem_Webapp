import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";
import Select from "@mui/material/Select";

function DataTypeSelect(props) {
  const [dataType, setDataType] = React.useState("");
  const [isNorm, setisNorm] = useState(false);

  const handleChange = (event) => {
    setDataType(event.target.value);
  };

  useEffect(() => {
    props.getDataType(dataType);
  }, [dataType]);

  useEffect(() => {
    if (props.settingsButtonClicked) {
      const data = localStorage.getItem("UserFavSettingObj");
      const parsedObj = JSON.parse(data);
      const requiredDataType = parsedObj.Data;
      // console.log(requiredDataType, "parsed object");

      if (requiredDataType.Raw) {
        setDataType("Raw");
      } else if (requiredDataType.Cal) {
        setDataType("Cal");
      } else if (requiredDataType.Nrm) {
        setDataType("Nrm");
      }

      props.settingsButtonClickedFalse();
    }
  }, [props.settingsButtonClicked]);

  return (
    <div>
      <FormControl
        sx={{ m: 1, width: "95%" }}
        size="small"
        label="demo-select-small-label"
        id="demo-select"
      >
        <InputLabel className="dataTypeInput" id="demo-select-small-label">
          dataType
        </InputLabel>
        <Select
          className="dataTypeSelect"
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={dataType}
          label="DataType"
          onChange={handleChange}
          sx={{
            width: "100%",
          }}
        >
          <MenuItem value={"Raw"}>Raw Data</MenuItem>
          <MenuItem value={"Cal"}>Calibrated</MenuItem>
          {/* <MenuItem value={"Nrm"}>Normalized</MenuItem> */}
        </Select>
      </FormControl>
      <FormControlLabel
        sx={{ color: "white" }}
        control={
          <Checkbox
            id="normalized"
            style={{ color: "white" }}
            checked={isNorm}
            onChange={(e) => {
              setisNorm(e.target.checked)
              setDataType("Nrm");
            }}
          />
        }
        label="Normalized"
      />
    </div>
  );
}

export default DataTypeSelect;
