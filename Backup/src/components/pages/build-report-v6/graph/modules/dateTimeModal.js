import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#005984",
  color: "white",
  border: "none",
  boxShadow: 24,
  p: 4,
};

export default function DateTimeModal() {
  return (
    <div>
      <Modal
        open={true}
        onClose={() => {}}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 700, textAlign: "center" }}>
          <h2 id="parent-modal-title">Please Select the Date and Time</h2>
          {/* <StaticDateTimePicker defaultValue={dayjs("2022-04-17T15:30")} /> */}
        </Box>
      </Modal>
    </div>
  );
}
