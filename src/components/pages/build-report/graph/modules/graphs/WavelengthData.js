import {useEffect, useState} from "react";
import {ResponsiveLine} from "@nivo/line";
import dayjs from "dayjs";
import {CSVLink} from "react-csv";
import {Button} from "react-bootstrap";
import domtoimage from "dom-to-image";
import {saveAs} from "file-saver";
import XMLExport from "../../../XMLExport";

function WaveLengthGraphData(props) {
    const [finalData, setFinalData] = useState([]);
    const [headers, setheaders] = useState([
        {label: "TimeStamp", key: "timestamp"},
        {label: "Color", key: "vio"},
    ]);
    const [rowData, setrowData] = useState([]);
    let wave;

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

        const _result = [];
        let filteredData = [];
        for (let i = 0; i < parsedData.length; i++) {
            const samples = parsedData[i].Samples;

            const graphData = {
                    id: props.dataType + "_P" + samples[i].Sample_Num,
                data: [],
            };

            for (let j = 0; j < samples.length; j++) {
                //TimeString to put in the data which will be shown to the graph
                const timeString = parsedData[i].Samples[j].Time_Stamp;
                const replacedTime = dayjs(timeString, "YYYY-MM-DD_HH-mm-ss").format("YYYY-MM-DD HH:mm:ss");

                // Preparing the time string (18:23:00) for comparison
                const t = parsedData[i].Samples[j].Time_Stamp.split("_")[1];
                const rt = t.replace(/-/g, ":");
                const dataDateTime = dayjs(rt, "HH:mm:ss");

                //logic for check if the Min Time is Greater than the Max Time
                let formattedXMinValue = dayjs(props.xMinValue, 'YYYY-MM-DD_HH-mm-ss');
                let formattedDateTime
                if (formattedXMinValue.isAfter(dayjs(props.xMaxValue, 'YYYY-MM-DD_HH-mm-ss'))) {
                    formattedXMinValue = formattedXMinValue.subtract(1, 'day');
                    formattedDateTime = dataDateTime.subtract(1, 'day');
                }

                // console.log(formattedXMinValue, props.xMaxValue, "time values")
                if (
                    dataDateTime >= formattedXMinValue &&
                    dataDateTime <= props.xMaxValue
                ) {
                    const firstValue = samples[0][props.dataType + "_Avg_" + wave];

                    let value;
                    if (props.isNrm) {
                        value =
                            samples[j][props.dataType + "_Avg_" + wave] / firstValue - 1;
                    } else {
                        value = samples[j][props.dataType + "_Avg_" + wave];
                    }
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
                    filteredData = _result.filter(
                        (item) =>
                            // console.log(item.data[k]?.y, "this is data at" ,k)
                            item.data[k]?.y >= props.yMinValue &&
                            item.data[k]?.y <= props.yMaxValue
                    );
                }
            });
        }
        console.log(filteredData, 'filteredData')
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
            <h3 style={{marginTop: 90, textAlign: "center"}}>{graphHeadingText}</h3>
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
                style={{height: "60vh"}}
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
                    colors={{scheme: "nivo"}}
                    margin={{top: 50, right: 110, bottom: 50, left: 60}}
                    xScale={{
                        type: "time",
                        format: "%Y-%m-%d %H:%M:%S",
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
                    pointColor={{theme: "background"}}
                    pointBorderWidth={2}
                    pointBorderColor={{from: "serieColor"}}
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
