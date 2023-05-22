import { useState, useEffect, memo } from "react";
import { ResponsiveLine } from "@nivo/line";
import Chart from "./Chart";

function GraphData(props) {
  const [finalData, setFinalData] = useState([]);
  const [sensorNum, setSensorNum] = useState();

  const isDashboard = false;

  const VioPoint = [props.dataType + "_Avg_Vio_450nm"];
  const BluPoint = [props.dataType + "_Avg_Blu_500nm"];
  const GrnPoint = [props.dataType + "_Avg_Grn_550nm"];
  const YelPoint = [props.dataType + "_Avg_Yel_570nm"];
  const OrgPoint = [props.dataType + "_Avg_Org_600nm"];
  const RedPoint = [props.dataType + "_Avg_Red_650nm"];
  const colorsNivo = {
    Vio: "violet",
    Blu: "blue",
    Grn: "green",
    Yel: "yellow",
    Org: "orange",
    Red: "red",
  };

  function showGraphData() {
    const data = localStorage.getItem("mqttResponseDataSelected");

    const parsedData = JSON.parse(data);
    setSensorNum(parsedData);

    const sampleLength = parsedData[0].Samples;
    setSensorNum(parsedData[props.index].Data_Point);

    const maindata = [
      {
        id: "Vio",
        data: [],
      },
      {
        id: "Blu",
        data: [],
      },
      {
        id: "Grn",
        data: [],
      },
      {
        id: "Yel",
        data: [],
      },
      {
        id: "Org",
        data: [],
      },
      {
        id: "Red",
        data: [],
      },
    ];

    for (let i = 0; i < sampleLength.length; i++) {
      console.log(props.index);
      const text = [
        {
          data: [
            {
              x: parsedData[props.index].Samples[i].Time_Stamp,
              y: parsedData[props.index].Samples[i]?.[VioPoint],
            },
          ],
        },
        {
          data: [
            {
              x: parsedData[props.index].Samples[i].Time_Stamp,
              y: parsedData[props.index].Samples[i]?.[BluPoint],
            },
          ],
        },
        {
          data: [
            {
              x: parsedData[props.index].Samples[i].Time_Stamp,
              y: parsedData[props.index].Samples[i]?.[GrnPoint],
            },
          ],
        },
        {
          data: [
            {
              x: parsedData[props.index].Samples[i].Time_Stamp,
              y: parsedData[props.index].Samples[i]?.[YelPoint],
            },
          ],
        },
        {
          data: [
            {
              x: parsedData[props.index].Samples[i].Time_Stamp,
              y: parsedData[props.index].Samples[i]?.[OrgPoint],
            },
          ],
        },
        {
          data: [
            {
              x: parsedData[props.index].Samples[i].Time_Stamp,
              y: parsedData[props.index].Samples[i]?.[RedPoint],
            },
          ],
        },
      ];

      // maindata.push(data);
      for (let i = 0; i <= 5; i++) {
        maindata[i]?.data.push(text[i]?.data[0]);
      }

      console.log("====================================");
      console.log(maindata, "this is updatedPoints at", i);
      console.log("====================================");
    }

    setFinalData(maindata);
  }

  useEffect(() => {
    showGraphData();
  }, []);

  return (
    // <div>
    //   <Chart />
    // </div>
    <div style={{ height: "60vh", marginTop: 50 }}>
      <h3>This is Sensor Number : {sensorNum} Graph</h3>
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

export default memo(GraphData);
