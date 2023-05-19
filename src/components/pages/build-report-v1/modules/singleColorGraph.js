import { ResponsiveLine } from "@nivo/line";
import { useState, useEffect } from "react";

function SingleColorChart(props) {
  const [finalData, setFinalData] = useState([]);
  const [prevPayload, setPrevPayload] = useState("");
  const isDashboard = false;

  console.log(props.wavelength, "this is the wavelength in props");

  let nmValue;
  switch (props.wavelength) {
    case "Vio":
      nmValue = "450nm";
      break;
    case "Blu":
      nmValue = "500nm";
      break;
    case "Grn":
      nmValue = "550nm";
      break;
    case "Yel":
      nmValue = "570nm";
      break;
    case "Org":
      nmValue = "600nm";
      break;
    case "Red":
      nmValue = "650nm";
      break;
  }

  const dataReq = [props.dataType + "_Avg_" + props.wavelength + "_" + nmValue];
  console.log("====================================");
  console.log(dataReq, "this is the data request");
  console.log("====================================");
  const colorsNivo = {
    Vio: "violet",
    Blu: "blue",
    Grn: "green",
    Yel: "yellow",
    Org: "orange",
    Red: "red",
  };

  function showFirstData() {
    const graph = localStorage.getItem("mqttResponseData");

    const parsedData = JSON.parse(graph);
    setPrevPayload(graph);
    // console.log("this is propes inside 1", props);
    const data = [
      {
        id: parsedData[1]?.WaveLength,
        data: [
          {
            x: parsedData[0]?.Time_Stamp,
            y: parsedData[0]?.[dataReq],
          },
        ],
      },
    ];

    console.log(data, "data in the 1st time");

    setFinalData(data);
    props.updatePrevPoint(data);
  }

  useEffect(() => {
    showFirstData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // console.log(props, "this is props every time");
      const txt = localStorage.getItem("mqttResponseData");
      if (txt !== prevPayload) {
        setPrevPayload(txt);
        console.log("condition is true txt is not equal to rev paylad");
        const parsedData = JSON.parse(txt);
        // console.log("Graph's Parsed Data", parsedData);

        const maindata = [
          {
            id: parsedData[1]?.WaveLength,
            data: [
              {
                x: parsedData[0]?.Time_Stamp,
                y: parsedData[0]?.[dataReq],
              },
            ],
          },
        ];

        const updatedPoints = [...props.prevPoint];

        for (let i = 0; i <= 5; i++) {
          updatedPoints[i]?.data.push(maindata[i]?.data[0]);
        }

        setFinalData(updatedPoints);
        props.updatePrevPoint(updatedPoints);
        console.log(finalData, "this is graph fianl data");
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [prevPayload]);

  return (
    <div style={{ height: "50vh" }}>
      <ResponsiveLine
        data={finalData}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: "grey",
              },
            },
            legend: {
              text: {
                fill: "grey",
              },
            },
            ticks: {
              line: {
                stroke: "grey",
                strokeWidth: 1,
              },
              text: {
                fill: "grey",
              },
            },
          },
          legends: {
            text: {
              fill: "grey",
            },
          },
          tooltip: {
            container: {
              color: "grey",
            },
          },
        }}
        colors={({ id }) => colorsNivo[id]}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? undefined : "Time", // added
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickValues: 5, // added
          tickSize: 3,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? undefined : "Value", // added
          legendOffset: -40,
          legendPosition: "middle",
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={8}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default SingleColorChart;
