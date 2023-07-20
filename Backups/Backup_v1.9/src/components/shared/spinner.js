import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

function Spinner(props) {
  const override = {
    display: "block",
    margin: "20% auto",
    borderColor: "red",
    textAlign: "center",
  };
  return (
    <div>
      <BeatLoader
        color={"#39c2d3"}
        loading={props.loading}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;
