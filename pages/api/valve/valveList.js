
export default function valveListHandler(req, res) {
  try {
    if (req.method == "GET") {

      let valveList = [
        {
          node_name: "node1",
          valve_name: "A",
          valve_topic: "node1",
          valve_status: "OFF",
          valve_percent: 0,
        },
        {
          node_name: "node1",
          valve_name: "B",
          valve_topic: "node1",
          valve_status: "OFF",
          valve_percent: 0,
        },
        {
          node_name: "node2",
          valve_name: "A",
          valve_topic: "node2",
          valve_status: "OFF",
          valve_percent: 0,
        },
        {
          node_name: "node2",
          valve_name: "B",
          valve_topic: "node2",
          valve_status: "OFF",
          valve_percent: 0,
        },
        {
          node_name: "node3",
          valve_name: "A",
          valve_topic: "node3",
          valve_status: "OFF",
          valve_percent: 0,
        },
        {
          node_name: "node4",
          valve_name: "A",
          valve_topic: "node4",
          valve_status: "OFF",
          valve_percent: 0,
        },
        {
          node_name: "node5",
          valve_name: "A",
          valve_topic: "node5",
          valve_status: "OFF",
          valve_percent: 0,
        },
        {
          node_name: "node5",
          valve_name: "B",
          valve_topic: "node5",
          valve_status: "OFF",
          valve_percent: 0,
        },
        {
          node_name: "node6",
          valve_name: "A",
          valve_topic: "node6",
          valve_status: "OFF",
          valve_percent: 0,
        },
        {
          node_name: "node6",
          valve_name: "B",
          valve_topic: "node6",
          valve_status: "OFF",
          valve_percent: 0,
        },
        {
          node_name: "node7",
          valve_name: "A",
          valve_topic: "node7",
          valve_status: "OFF",
          valve_percent: 0,
        },
        {
          node_name: "node8",
          valve_name: "A",
          valve_topic: "node8",
          valve_status: "OFF",
          valve_percent: 0,
        },
        {
          node_name: "node8",
          valve_name: "B",
          valve_topic: "node8",
          valve_status: "OFF",
          valve_percent: 0,
        },
        {
          node_name: "node8",
          valve_name: "C",
          valve_topic: "node8",
          valve_status: "OFF",
          valve_percent: 0,
        },
        {
          node_name: "node9",
          valve_name: "A",
          valve_topic: "nodeA",
          valve_status: "OFF",
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
