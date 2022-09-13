import { Card, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useAppContent } from "../../../context/content";
import AlarmsEvents from "./AlarmsEvents";
import FlowRate from "./FlowRate";
import Tank from "./Tank";
import ValveStatus from "./ValveStatus";
import WaterQuality from "./WaterQuality";

export default function HomeDash() {
  const { mqttClient } = useAppContent();
  const [TankData, setTankData] = useState([
    {
      level_name: "level1",
      level: 0,
    },
    {
      level_name: "level2",
      level: 0,
    },
  ]);
  const [FlowRateData, setFlowRateData] = useState([]);

  const [ValveStatusData, setValveStatusData] = useState([
    {
      valve_name: "Val 1",
      valve_status: true,
    },
    {
      valve_name: "Val 2",
      valve_status: true,
    },
    {
      valve_name: "Val 3",
      valve_status: false,
    },
    {
      valve_name: "Val 1",
      valve_status: true,
    },
    {
      valve_name: "Val 2",
      valve_status: false,
    },
    {
      valve_name: "Val 3",
      valve_status: true,
    },
    {
      valve_name: "Val 1",
      valve_status: false,
    },
    {
      valve_name: "Val 2",
      valve_status: true,
    },
    {
      valve_name: "Val 3",
      valve_status: true,
    },
    {
      valve_name: "Val 1",
      valve_status: true,
    },
    {
      valve_name: "Val 2",
      valve_status: false,
    },
    {
      valve_name: "Val 3",
      valve_status: false,
    },
  ]);

  const getTankData = (val) => {
    let num_tank = val.level_num;
    let data = [];
    for (let i = 0; i < num_tank; i++) {
      data[i] = val[`level_${i + 1}`];
    }
    setTankData(data);
  };

  const getFlowRateData = (val) => {
    let num_flow = val.doc_num;
    let data = [];
    for (let i = 0; i < num_flow; i++) {
      data[i] = val[`doc_${i + 1}`];
    }
    data.reverse(); //reverse array
    setFlowRateData(data);
  };

  useEffect(() => {
    if (mqttClient) {
      mqttClient.on("message", (topic, message) => {
        let data = JSON.parse(message);
        getTankData(data);
        getFlowRateData(data);
      });
    }
  }, [mqttClient]);
  return (
    <div>
      <Row gutter={[8, 8]}>
        <Col span={8}>
          <Card style={{ borderRadius: 15, height: 260 }}>
            <p className="title">Tank Water Level</p>
            <Tank data={TankData} />
          </Card>
        </Col>
        <Col span={16}>
          <Card style={{ borderRadius: 15, height: 260, overflow: "auto" }}>
            <p className="title">Flow Rate Display</p>
            <FlowRate data={FlowRateData} />
          </Card>
        </Col>
        <Col span={13}>
          <Card style={{ borderRadius: 15, height: 250, overflow: "auto" }}>
            <p className="title">Valve Status</p>
            <ValveStatus data={ValveStatusData} />
          </Card>
        </Col>
        <Col span={5}>
          <Card style={{ borderRadius: 15, height: 250 }}>
            <p className="title">Water Quality</p>
            <WaterQuality data={{}} />
          </Card>
        </Col>
        <Col span={6}>
          <Card style={{ borderRadius: 15, height: 250 }}>
            <p className="title">Alarms and Events</p>
            <AlarmsEvents />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
