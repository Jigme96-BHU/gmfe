export default function valveListHandler(req, res) {
  try {
    if (req.method == "GET") {
      let valveList = [
        {
          node_name: "node1",
          valve_name: "valve1",
          valve_topic: "node1",
          valve_status: "ON",
          valve_percent: 70,
        },
        {
          node_name: "node1",
          valve_name: "valve2",
          valve_topic: "node1",
          valve_status: "ON",
          valve_percent: 50,
        },
        {
          node_name: "node2",
          valve_name: "valve1",
          valve_topic: "node2",
          valve_status: "ON",
          valve_percent: 60,
        },
        {
          node_name: "node2",
          valve_name: "valve2",
          valve_topic: "node2",
          valve_status: "ON",
          valve_percent: 0,
        },
      ];
      res.json({
        status: true,
        data: valveList,
      });
    }
  } catch (error) {
    res.json({ status: false, response: error.message });
  }
}
