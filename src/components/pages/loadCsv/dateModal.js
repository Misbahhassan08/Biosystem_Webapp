import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers";

export default function DateModal(props) {
  const [value, setValue] = useState(null);

  const handleValueChange = (newvalue) => {
    setValue(newvalue);
  };

  function handleAccept(){
    const dateTimeString = value.format('YYYY-MM-DD_HH_mm');
    props.getDateTime(dateTimeString)
    
  }


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDateTimePicker
        className="date-time-modal"
        ampm = {false}
        sx={{
          backgroundColor:"white",
          color: "#000",
          width: "100%"
        }}
        label= 'Select Date  Time'
        value={value}
        onChange={handleValueChange}
        onAccept={handleAccept}
      />
    </LocalizationProvider>
  );
}
