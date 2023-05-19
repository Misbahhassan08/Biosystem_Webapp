import React, { createContext } from "react";
import mqtt from "precompiled-mqtt";
import { useEffect } from "react";

const clientId = "mqttjs_" + Math.random().toString(16).substr(2, 8);

function Mqttservice() {
  const [connectionStatus, setConnectionStatus] = React.useState(false);
  const host = "ws://broker.emqx.io:8083/mqtt";

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
      setConnectionStatus(true);
      console.log("connectionStatus :", connectionStatus);
    });

    client.on("reconnect", () => {
      console.log("Reconnecting...");
    });

    // client.on("message", (topic, payload, packet) => {
    //   if (topic == "testtopic/ali") {
    //     try {
    //       // const messageObj = JSON.parse(payload);
    //       if (graph !== "Hello Mqtt" && payload) {
    //         setTable(payload);
    //       }
    //     } catch (err) {
    //       console.error("Error sending message:", err);
    //     }
    //   } else {
    //     console.log("eroor");
    //   }
    // });

    client.on("disconnect", () => {
      setConnectionStatus(false);
      console.log("connectionStatus :", connectionStatus);
    });
    client.on("error", () => {
      console.warn("error in mqtt connection");
    });

    return () => {
      console.log("Disconnecting mqtt client");
      // client.end();
    };
  }, []);

  return <></>;
}

export default Mqttservice;
