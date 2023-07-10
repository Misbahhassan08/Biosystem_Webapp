import React, { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function WaveLength(props) {
  const [waveLength, setWaveLength] = React.useState("");

  const handleChange = (event) => {
    setWaveLength(event.target.value);
  };

  useEffect(() => {
    props.getWaveLength(waveLength);
  }, [waveLength]);

  return (
    <div>
      <FormControl sx={{ m: 1, width: "95%" }} size="small">
        <InputLabel id="demo-select-small-label">WaveLength</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={waveLength}
          label="WaveLength"
          onChange={handleChange}
          sx={{
            width: "100%",
          }}
        >
          <MenuItem value={"Vio"}>Violet</MenuItem>
          <MenuItem value={"Blu"}>Blue</MenuItem>
          <MenuItem value={"Grn"}>Green</MenuItem>
          <MenuItem value={"Red"}>Red</MenuItem>
          <MenuItem value={"Yel"}>Yellow</MenuItem>
          <MenuItem value={"Org"}>Orange</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default WaveLength;
