import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import dayjs from "dayjs";
import { TextField } from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers";

export default function DateTimeModal(props) {
  const style = {
    width: "50%",
    "& .MuiInputBase-input": {
      height: 15,
    },
    "& .MuiFilledInput-root, .MuiFilledInput-root:hover": {
      background: "#fff",
    },
    "& .css-1ff8729-MuiInputBase-root-MuiFilledInput-root": {
      borderRadius: 0,
    },
    "& .css-1ff8729-MuiInputBase-root-MuiFilledInput-root.Mui-disabled": {
      backgroundColor: "grey",
    },
    "& .Mui-disabled:hover": {
      background: "grey",
    },
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDateTimePicker
        className="date-time-modal"
        disabled={props.disabled}
        sx={{
          backgroundColor: props.disabled ? "#808080" : "white",
          color: "#000",
        }}
        // onAccept={props.accept(dateTimeValue)}
        // value={dateTimeValue}
        // onChange={(e) => {
        //   setDateTimeValue(e);
        // }}
        // defaultValue={dayjs()}

        slotProps={{
          textField: {
            className: "Mui-min-max-field",
            variant: "filled",
            hiddenLabel: true,
            size: "small",
            // disabled: props.disabled,
            sx: style,
          },
        }}
      />
    </LocalizationProvider>
  );
}
