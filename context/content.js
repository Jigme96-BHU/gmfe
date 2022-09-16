import { message } from "antd";
import mqtt from "mqtt";
import { createContext, useContext, useEffect, useState } from "react";

const Content = createContext();

export function useAppContent() {
  return useContext(Content);
}

const HOST = process.env.NEXT_PUBLIC_MQTT_HOST;
const PORT = process.env.NEXT_PUBLIC_MQTT_PORT;
const TOPIC = process.env.NEXT_PUBLIC_MQTT_TOPIC;

export const ContentProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [sliderCollapsed, setSliderCollapsed] = useState(false);
  const [title, setTitle] = useState("");
  // mqtt
  const [client, setClient] = useState();
  //function to connect to broker
  const Connect = (val) => {
    let { host, port } = val;
    host = `ws://${host}:${port}/mqtt`;
    setClient(
      mqtt.connect(host, {
        clientId: `mqttjs_ + ${Math.random().toString(16)}`,
      })
    );
  };
  const mqttPublish = ({ topic, val }) => {
    if (client) {
      client.publish(topic, String(val));
    }
  };
  useEffect(() => {
    if (client) {
      client.on("connect", () => {
        message.success("Mqtt Connected");

        client.subscribe(TOPIC); //subscribe to topic after connection success
      });
      client.on("error", (err) => {
        console.error("Connection error: ", err);
        client.end();
      });
      client.on("reconnect", () => {
        console.log("Reconnecting");
      });
    } else {
      //connecting to broker {calling connect function}
      Connect({
        host: HOST,
        port: PORT,
      });
    }
  }, [client]);

  return (
    <Content.Provider
      value={{
        user,
        setUser,
        sliderCollapsed,
        setSliderCollapsed,
        title,
        setTitle,
        mqttClient: client,
        mqttPublish,
      }}
    >
      {children}
    </Content.Provider>
  );
};
