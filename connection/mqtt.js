import mqtt from "mqtt";
const HOST = process.env.NEXT_PUBLIC_MQTT_HOST;
const PORT = process.env.NEXT_PUBLIC_MQTT_PORT;
const host = `ws://${HOST}:${PORT}/mqtt`;
const mqttClient = mqtt.connect(host, {
  clientId: `mqttjs_ + ${Math.random().toString(16)}`,
});
export default mqttClient;
