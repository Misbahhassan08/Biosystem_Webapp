import { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";

function WaveLengthGraphData(props) {
  const [finalData, setFinalData] = useState([]);
  const isDashboard = false;
  let dataType;
  let wave;

  const colorsNivo = {
    Raw_Vio_P2: "violet",
    Blu: "blue",
    Grn: "green",
    Yel: "yellow",
    Org: "orange",
    Red: "red",
  };
  switch (props.wave) {
    case "Vio":
      wave = "Vio_450nm";
      break;
    case "Blu":
      wave = "Blu_500nm";
      break;
    case "Grn":
      wave = "Grn_550nm";
      break;
    case "Yel":
      wave = "Yel_570nm";
      break;
    case "Org":
      wave = "Org_600nm";
      break;
    case "Red":
      wave = "Red_650nm";
      break;
  }

  useEffect(() => {
    showGraphData();
  }, []);

  //   function showGraphData() {
  //     const data = localStorage.getItem("mqttResponseDataNormalized");

  //     const parsedData = JSON.parse(data);
  //     const sensorNum = parsedData.length;

  //     // for (let i = 0; i < parsedData.length; i++) {
  //     //   const data = [
  //     //     {
  //     //       id: props.dataType + "_Avg_" + wave + "_P" + parsedData[i].Data_Point,
  //     //       data: [],
  //     //     },
  //     //   ];

  //     //   maindata.push(data[0]);

  //     //   for (let i = 0; i < parsedData.length; i++) {
  //     //     console.log(props.index);
  //     //     const text = [
  //     //       {
  //     //         data: [
  //     //           {
  //     //             x: parsedData[i].Samples[i].Time_Stamp,
  //     //             y: parsedData[i].Samples[i]?.[VioPoint],
  //     //           },
  //     //         ],
  //     //       },
  //     //     ];

  //     //     maindata[i]?.data.push(text[i]?.data[0]);

  //     //     //   for (let i = 0; i <= 5; i++) {
  //     //     //     maindata[i]?.data.push(text[i]?.data[0]);
  //     //     //   }
  //     //   }

  //     //   console.log(maindata, "this is the main data");
  //     // }

  //     // const samples = [];

  //     const final = [];

  //     for (let i = 0; i < parsedData.length; i++) {
  //       const samples = parsedData[i].Samples;
  //       //   console.log(samples);
  //       const graphData = {
  //         id: props.dataType + "_Avg_" + wave + "_P" + samples[i].Sample_Num,
  //         data: [],
  //       };

  //       //   finalData

  //       console.log(graphData, "this is graph data");

  //       for (let j = 0; j < samples.length; j++) {
  //         const time = samples[j].Time_Stamp;
  //         const value = samples[j][props.dataType + "_Avg_" + wave];

  //         const data = {
  //           x: time,
  //           y: value,
  //         };

  //           console.log(graphData, "this is graph data");
  //         //   result.push(graphData);
  //       }
  //     }

  //     setFinalData(result);
  //   }
  function showGraphData() {
    const data = localStorage.getItem("mqttResponseDataNormalized");

    const parsedData = JSON.parse(data);
    const sensorNum = parsedData.length;

    const result = [];

    for (let i = 0; i < parsedData.length; i++) {
      const samples = parsedData[i].Samples;
      const graphData = {
        id: props.dataType + "_Avg_" + wave + "_P" + samples[i].Sample_Num,
        data: [],
      };

      for (let j = 0; j < samples.length; j++) {
        const time = samples[j].Time_Stamp;
        const value = samples[j][props.dataType + "_Avg_" + wave];

        const dataPoint = {
          x: time,
          y: value,
        };

        graphData.data.push(dataPoint);
      }

      result.push(graphData);
      console.log(result, "this is the result");
    }

    setFinalData(result);
  }

  return (
    <div style={{ height: "60vh" }}>
      <h3 style={{ marginTop: 90, textAlign: "center" }}>
        {props.dataType} data : Normalized @ {wave}
      </h3>
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
        colors={{ scheme: "nivo" }}
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
          tickSize: 7,
          tickPadding: 5,
          tickRotation: 40,
          legend: isDashboard ? undefined : "Time", // added
          legendOffset: 46,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickValues: 5, // added
          tickSize: 7,
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

export default WaveLengthGraphData;
