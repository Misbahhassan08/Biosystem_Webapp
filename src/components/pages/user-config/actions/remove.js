import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { FormControlLabel, IconButton } from "@mui/material";
import { fetchPostReq } from "../../../../services/restService";
import { baseApiUrl } from "../../../../config";


const RemoveAction = ({ index, onRemoveSuccess }) => {
    const remove_user = baseApiUrl + '/api/remove_user'
    console.log(index, "this is index");
  const handleRemoveClick = async () => {
      try {
          const response = await fetchPostReq(remove_user, {UserID: index});
          console.log(response);
          if (response === 'Done'){
              onRemoveSuccess()
          }
      } catch (error) {
          console.error("Error:", error);
      }
  };

  return (
    <FormControlLabel
      control={
        <IconButton
          color="secondary"
          aria-label="add an alarm"
          onClick={handleRemoveClick}
        >
          <DeleteIcon style={{ color: "#dc3545" }} />
        </IconButton>
      }
    />
  );
};

export default RemoveAction;
