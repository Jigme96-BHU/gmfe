
export default function valveListHandler(req, res) {
  try {
    if (req.method == "GET") {

      let valveList = [
        {
          node_name: "node1",
          valve_name: "valve1",
          valve_topic: "node1",
          valve_status: "ON",
          valve_percent: 0,
        },
        {
          node_name: "node1",
          valve_name: "valve2",
          valve_topic: "node1",
          valve_status: "ON",
          valve_percent: 0,
        },
        {
<<<<<<< HEAD
          node_name: "NODE 2",
          valve_name: "VAL 1",
          valve_topic: "valve3",
=======
          node_name: "node2",
          valve_name: "valve1",
          valve_topic: "node2",
>>>>>>> 9b0df8c67784dc123598a29378502143f5dc9d55
          valve_status: "ON",
          valve_percent: 0,
        },
        {
<<<<<<< HEAD
          node_name: "NODE 2",
          valve_name: "VAL 2",
          valve_topic: "valve4",
          valve_status: "ON",
          valve_percent: 0,
        },
        {
          node_name: "NODE 3",
          valve_name: "VAL 1",
          valve_topic: "valve4",
          valve_status: "ON",
          valve_percent: 0,
        },
        {
          node_name: "NODE 3",
          valve_name: "VAL 2",
          valve_topic: "valve4",
          valve_status: "ON",
          valve_percent: 0,
        },
        {
          node_name: "NODE 4",
          valve_name: "VAL 1",
          valve_topic: "valve4",
          valve_status: "ON",
          valve_percent: 0,
        },
        {
          node_name: "NODE 4",
          valve_name: "VAL 2",
          valve_topic: "valve4",
=======
          node_name: "node2",
          valve_name: "valve2",
          valve_topic: "node2",
>>>>>>> 9b0df8c67784dc123598a29378502143f5dc9d55
          valve_status: "ON",
          valve_percent: 0,
        },
        {
          node_name: "NODE 5",
          valve_name: "VAL 1",
          valve_topic: "valve4",
          valve_status: "ON",
          valve_percent: 0,
        },
        {
          node_name: "NODE 5",
          valve_name: "VAL 2",
          valve_topic: "valve4",
          valve_status: "ON",
          valve_percent: 0,
        },
        {
          node_name: "NODE 6",
          valve_name: "VAL 1",
          valve_topic: "valve4",
          valve_status: "ON",
          valve_percent: 0,
        },
        {
          node_name: "NODE 6",
          valve_name: "VAL 2",
          valve_topic: "valve4",
          valve_status: "ON",
          valve_percent: 0,
        },
        {
          node_name: "NODE 7",
          valve_name: "VAL 1",
          valve_topic: "valve5",
          valve_status: "ON",
          valve_percent: 0,
        },
        {
          node_name: "NODE 7",
          valve_name: "VAL 2",
          valve_topic: "valve5",
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
