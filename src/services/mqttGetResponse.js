import React, { createContext } from "react";
import mqtt from "precompiled-mqtt";
import { useEffect } from "react";

const clientId = "mqttjs_" + Math.random().toString(16).substr(2, 8);

function MqttGetResponse() {
  const [connectionStatus, setConnectionStatus] = React.useState(false);
  const [table, setTable] = React.useState([]);
  const host = "ws://broker.emqx.io:8083/mqtt";
  const responseTopic = "biogas/server/response";

  const options = {
    keepalive: 160,
    clientId: clientId,
    protocolId: "MQTT",
    protocolVersion: 4,
    clean: true,
    connectTimeout: 30 * 1000,
    will: {
      topic: "WillMsg",
      payload: "Connection Closed abnormally..!",
      qos: 0,
      retain: false,
    },
  };

  useEffect(() => {
    console.log("Connecting mqtt client");
    const client = mqtt.connect(host, options);
    client.on("connect", () => {
      client.subscribe(responseTopic, { qos: 0 });
    });

    client.on("reconnect", () => {
      client.subscribe(responseTopic, { qos: 0 });
      console.log("Reconnecting...");
    });

    client.on("message", (topic, payload, packet) => {
      if (topic == responseTopic) {
        try {
          // const messageObj = JSON.parse(payload);
          if (table !== "Hello Mqtt" && payload) {
            setTable(payload);
          }
        } catch (err) {
          console.error("Error sending message:", err);
        }
      } else {
        console.log("error");
      }
    });

    return () => {
      console.log("Disconnecting mqtt client");
      client.end();
    };
  }, []);

  localStorage.setItem("mqttResponseData", table);

  console.log("Connections: " + connectionStatus);

  return <div></div>;
}

export default MqttGetResponse;
