import { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";

function SimpleGraphData(props) {
  const [finalData, setFinalData] = useState([]);
  const [sensorNum, setSensorNum] = useState("");

  const isDashboard = true;
  let dataType;

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

  if (props.dataType == "Cal") {
    dataType = "Calibrated";
  } else if (props.dataType == "Raw") {
    dataType = "Raw";
  }

  function parseTimestamp(timestamp) {
    const [date, time] = timestamp.split("_");
    const [year, month, day] = date.split("-");
    const [hours, minutes, seconds] = time.split("-");
    return new Date(year, month - 1, day, hours, minutes, seconds);
  }

  function showGraphData() {
    const data = localStorage.getItem("allGraphReport");

    const parsedData = JSON.parse(data);
    setSensorNum(parsedData);

    console.log(props.index, "this is the index");
    // debugger;
    const sampleLength = parsedData[props.index].Samples;
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

    const firstYVioPoint = parsedData[props.index].Samples[0]?.[VioPoint];
    const firstYBluPoint = parsedData[props.index].Samples[0]?.[BluPoint];
    const firstYGrnPoint = parsedData[props.index].Samples[0]?.[GrnPoint];
    const firstYYelPoint = parsedData[props.index].Samples[0]?.[YelPoint];
    const firstYOrgPoint = parsedData[props.index].Samples[0]?.[OrgPoint];
    const firstYRedPoint = parsedData[props.index].Samples[0]?.[RedPoint];

    for (let i = 0; i < sampleLength.length; i++) {
      console.log(props.index);

      let Yaxis;
      if (props.isNrm) {
        Yaxis = {
          Vio:
            parsedData[props.index].Samples[i]?.[VioPoint] / firstYVioPoint - 1,
          Blu:
            parsedData[props.index].Samples[i]?.[BluPoint] / firstYBluPoint - 1,
          Grn:
            parsedData[props.index].Samples[i]?.[GrnPoint] / firstYGrnPoint - 1,
          Yel:
            parsedData[props.index].Samples[i]?.[YelPoint] / firstYYelPoint - 1,
          Org:
            parsedData[props.index].Samples[i]?.[OrgPoint] / firstYOrgPoint - 1,
          Red:
            parsedData[props.index].Samples[i]?.[RedPoint] / firstYRedPoint - 1,
        };
      } else {
        Yaxis = {
          Vio: parsedData[props.index].Samples[i]?.[VioPoint],
          Blu: parsedData[props.index].Samples[i]?.[BluPoint],
          Grn: parsedData[props.index].Samples[i]?.[GrnPoint],
          Yel: parsedData[props.index].Samples[i]?.[YelPoint],
          Org: parsedData[props.index].Samples[i]?.[OrgPoint],
          Red: parsedData[props.index].Samples[i]?.[RedPoint],
        };
      }

      const timestamp = parsedData[props.index].Samples[i].Time_Stamp;
      const dateObj = parseTimestamp(timestamp);

      const text = [
        {
          data: [
            {
              x: dateObj,
              y: Yaxis.Vio,
            },
          ],
        },
        {
          data: [
            {
              x: dateObj,
              y: Yaxis.Blu,
            },
          ],
        },
        {
          data: [
            {
              x: dateObj,
              y: Yaxis.Grn,
            },
          ],
        },
        {
          data: [
            {
              x: dateObj,
              y: Yaxis.Yel,
            },
          ],
        },
        {
          data: [
            {
              x: dateObj,
              y: Yaxis.Org,
            },
          ],
        },
        {
          data: [
            {
              x: dateObj,
              y: Yaxis.Red,
            },
          ],
        },
      ];

      for (let i = 0; i <= 5; i++) {
        maindata[i]?.data.push(text[i]?.data[0]);
      }

      // console.log("====================================");
      // console.log(maindata, "this is updatedPoints at", i);
      // console.log("====================================");
    }

    setFinalData(maindata);
  }

  useEffect(() => {
    showGraphData();
  }, []);

  return (
    <div style={{ height: "200px", width: "100%" }}>
      {/* <h3 style={{ marginTop: 90, textAlign: "center" }}>
        {dataType} data : P{sensorNum} Graph
      </h3> */}
      <ResponsiveLine
        data={finalData}
        margin={{ top: 10, right: 10, bottom: 50, left: 40 }}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: "grey",
              },
            },
          },
        }}
        xScale={{
          type: "time",
          format: "%H:%M:%S",
          precision: "second",
          useUTC: false,
          min: "auto",
          max: "auto",
        }}
        xFormat="time:%H:%M:%S"
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisBottom={{
          orient: "bottom",
          tickSize: 7,
          tickPadding: 5,
          tickRotation: 0,
          legend: undefined, // added
          legendOffset: 46,
          legendPosition: "middle",
          format: "%H:%M",
          tickValues: "every 3 hours",
        }}
        axisLeft={{
          orient: "left",
          tickValues: 5, // added
          tickSize: 7,
          tickPadding: 5,
          tickRotation: 0,
          legend: undefined, // added
          legendOffset: -40,
          legendPosition: "middle",
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={3}
        colors={({ id }) => colorsNivo[id]}
        pointBorderWidth={2}
        pointColor={{ theme: "background" }}
        pointBorderColor={{ from: "serieColor" }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            translateY: 50,
            itemWidth: 40,
            itemHeight: 20,
            itemTextColor: "#999",
            symbolSize: 5,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default SimpleGraphData;
