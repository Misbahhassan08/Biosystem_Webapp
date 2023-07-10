import { useState, useEffect } from "react";
import SensorGraphData from "./SensorData";
import WaveLengthGraphData from "./WavelengthData";

function NormalizedGraphData(props) {
  const renderSensorGraphs = ["Raw", "Cal"];
  const renderWaveLengthGraphs = ["Vio", "Blu", "Grn", "Yel", "Org", "Red"];

  return (
    <div>
      {
        // render the RAW graphs for the sensors
        props.loop.map((item, index) => (
          <SensorGraphData index={index} graphs={"Raw"} key={index} />
        ))
      }

      {
        // render the CAL graphs for the sensors
        props.loop.map((item, index) => (
          <SensorGraphData index={index} graphs={"Cal"} key={index} />
        ))
      }

      {
        // render the graphs of every RAW wave length
        renderWaveLengthGraphs.map((wavevalue, index) => (
          <WaveLengthGraphData
            // index={props.-index}
            dataType={"Raw"}
            wave={wavevalue}
            key={index} // Add a unique key for each graph
          />
        ))
      }

      {
        // render the graphs of every CAL wave length
        renderWaveLengthGraphs.map((wavevalue, index) => (
          <WaveLengthGraphData
            // index={props.-index}
            dataType={"Cal"}
            wave={wavevalue}
            key={index} // Add a unique key for each graph
          />
        ))
      }
    </div>
  );
}

export default NormalizedGraphData;
