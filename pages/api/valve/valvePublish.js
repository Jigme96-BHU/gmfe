import mqttClient from "../../../connection/mqtt";
export default function valvePublishHandler(req, res) {
  try {
    if (req.method == "POST") {
      mqttClient.publish("hello", "hi");

      res.json({ status: true, message: "Published to MQTT" });
    }
  } catch (error) {
    res.json({
      status: false,
      response: error.message,
    });
  }
}
