export default function valveListHandler(req, res) {
  try {
    if (req.method == "GET") {
      let valveList = [
        {
          node_name: "NODE 1",
          valve_name: "VAL 1",
          valve_topic: "valve1",
          valve_status: "ON",
          valve_percent: 70,
        },
        {
          node_name: "NODE 1",
          valve_name: "VAL 2",
          valve_topic: "valve2",
          valve_status: "ON",
          valve_percent: 50,
        },
        {
          node_name: "NODE 2",
          valve_name: "VAL 3",
          valve_topic: "valve3",
          valve_status: "ON",
          valve_percent: 60,
        },
        {
          node_name: "NODE 2",
          valve_name: "VAL 4",
          valve_topic: "valve4",
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
