import { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";
import dayjs from "dayjs";
import { CSVLink } from "react-csv";
import { Button } from "react-bootstrap";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import XMLExport from "../../../XMLExport";

function WaveLengthGraphData(props) {
  const [finalData, setFinalData] = useState([]);
  const [headers, setheaders] = useState([
    { label: "TimeStamp", key: "timestamp" },
    { label: "Color", key: "vio" },
  ]);
  const [rowData, setrowData] = useState([]);
  let wave;

  console.log(props.wave, "this is the props wave");

  switch (props.wave) {
    case "Vio":
      wave = "Vio_450nm";
      console.log("wave is Vio", props.wave);
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
    default:
      break;
  }
  const fieldsAsObjects = {
    timestamp: "Date column header",
    wave: "color data column header",
  };
  useEffect(() => {
    showGraphData();
  }, []);

  function handleExportImage() {
    const graphContainer = document.getElementById(
      "graph-container" + props.dataType + wave
    );
    domtoimage
      .toBlob(graphContainer)
      .then((blob) => {
        saveAs(blob, "graph.png");
      })
      .catch((error) => {
        console.error("Error exporting image:", error);
      });
  }

  function showGraphData() {
    const data = localStorage.getItem("mqttResponseDataNormalized");

    const parsedData = JSON.parse(data);
    const sensorNum = parsedData.length;

    const _result = [];
    let filteredData = [];
    for (let i = 0; i < parsedData.length; i++) {
      const samples = parsedData[i].Samples;
      const firstDate = dayjs(samples[0].Time_Stamp.split("_")[0]);
      // console.log(
      //   "🚀 ~ file: WavelengthData.js:86 ~ showGraphData ~ firstDate:",
      //   firstDate
      // );
      const lastDate = dayjs(
        samples[samples.length - 1].Time_Stamp.split("_")[0]
      );
      // console.log(
      //   "🚀 ~ file: WavelengthData.js:88 ~ showGraphData ~ lastDate:",
      //   lastDate
      // );

      // Compare the dates
      const areDatesEqual = firstDate.isSame(lastDate, "day");
      // console.log(
      //   "🚀 ~ file: WavelengthData.js:85 ~ showGraphData ~ areDatesEqual:",
      //   areDatesEqual
      // );

      const timeToCompare = dayjs("23:00:00", { format: "HH:mm:ss" });
      const currentDay = dayjs().startOf("day");

      const isBeforeStartOfDay = timeToCompare.isBefore(currentDay);

      console.log(isBeforeStartOfDay, "start of day");

      const graphData = {
        // id: props.dataType + "_Avg_" + wave + "_P" + samples[i].Sample_Num,
        id: props.dataType + "_P" + samples[i].Sample_Num,
        data: [],
      };

      for (let j = 0; j < samples.length; j++) {
        const dateString = parsedData[i].Samples[j].Time_Stamp.split("_")[0];
        const timeString = parsedData[i].Samples[j].Time_Stamp.split("_")[1];
        // console.log("🚀 ~ file: WavelengthData.js:87 ~ showGraphData ~ dateString:", dateString, timeString)
        const replacedTime = timeString.replace(/-/g, ":");

        const finalDate = dateString + " " + replacedTime;

        const d = dayjs(finalDate);

        const dateTime1 = "2023-03-07_18-28-33";
        const dateTime2 = "2023-03-08_18-28-33";

        // Parse the date part from the date-time strings using dayjs
        const date1 = dayjs(dateTime1.split("_")[0]);
        const date2 = dayjs(dateTime2.split("_")[0]);

        let dataDateTime = dayjs(replacedTime, "HH:mm:ss");
        if (
          dataDateTime >= props.xMinValue &&
          dataDateTime <= props.xMaxValue
        ) {
          // const d= dayjs('23:59:00', 'HH:mm:ss')
          // console.log(d.subtract(1, 'day'), "this is data date time");
          const firstValue = samples[0][props.dataType + "_Avg_" + wave];

          let value;
          if (props.isNrm) {
            value =
              samples[j][props.dataType + "_Avg_" + wave] / firstValue - 1;
            // console.log(value, "this is value");
          } else {
            value = samples[j][props.dataType + "_Avg_" + wave];
            // console.log(value, "this is value");
          }
          // console.log(value, "this is first value for", wave, "at", j);
          let row = {
            timestamp: replacedTime.toString(),
            vio: value,
          };
          const dataPoint = {
            x: replacedTime,
            y: value,
          };

          setrowData((current) => [...current, row]);
          graphData.data.push(dataPoint);
        }
      }
      _result.push(graphData);
      console.log(_result, "this is result data at", i);

      props.yValueLoop.map((item, index) => {
        for (let k = 0; k < _result[i].data.length; k++) {
          // console.log("######## ---- Idex of Y axis = "+ i + "and result = "+ result[i].data[0][0])
          filteredData = _result.filter(
            (item) =>
              // console.log(item.data[k]?.y, "this is data at" ,k)
              item.data[k]?.y >= props.yMinValue &&
              item.data[k]?.y <= props.yMaxValue
          );
        }
      });
      // setFilteredData((prevFilteredData) => filterd);
    }
    setFinalData(filteredData);
  }
  const csvReport = {
    data: rowData,
    headers: headers,
    xsd_filename: props.dataType + "data_Normalized_Avg" + wave + ".xml",
    filename: props.dataType + "data_Normalized_Avg" + wave + ".csv",
  };

  const graphHeadingText = props.isNrm
    ? `${props.dataType} Single_WaveLength : Normalized @ Avg_${wave}`
    : `${props.dataType} Single_WaveLength : Avg_${wave}`;

  return (
    <div>
      <h3 style={{ marginTop: 90, textAlign: "center" }}>{graphHeadingText}</h3>
      <Button type="submit" className="mx-2 menu-btn menu-btn1">
        <CSVLink {...csvReport}>Export Data to CSV</CSVLink>
      </Button>
      <Button
        type="submit"
        className="mx-2 menu-btn menu-btn2"
        onClick={handleExportImage}
      >
        Export Image
      </Button>
      <XMLExport
        data={rowData}
        fields={fieldsAsObjects}
        fileName={csvReport.xsd_filename}
      />
      <div
        id={"graph-container" + props.dataType + wave}
        style={{ height: "60vh" }}
      >
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
          xScale={{
            type: "time",
            format: "%H:%M:%S",
            precision: "second",
            useUTC: false,
            min: "auto",
            max: "auto",
            axis: "x",
            order: "temporal",
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
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 7,
            tickPadding: 5,
            tickRotation: 40,
            legend: "Time", // added
            legendOffset: 46,
            legendPosition: "middle",
            format: "%H:%M",
            tickValues: "every 20 minutes",
          }}
          axisLeft={{
            orient: "left",
            tickValues: 5, // added
            tickSize: 7,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Value", // added
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
              itemWidth: 60,
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
    </div>
  );
}

export default WaveLengthGraphData;
