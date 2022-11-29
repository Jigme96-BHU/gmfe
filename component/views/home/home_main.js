import { Card, Col, Row } from "antd"
import { useAppContent } from "../../../context/content";
import AlarmsEvents from "./AlarmsEvents";
import FlowRate from "./FlowRate";
import Tank from "./Tank";
import ValveStatus from "./ValveStatus";
import WaterQuality from "./WaterQuality";
import { useState, useEffect } from "react";

// const Topic = process.env.NEXT_PUBLIC_MQTT_TOPIC;

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

  const [ValveStatusData, setValveStatusData] = useState([]);

  const [qualityStatusData, setQualityStatusData] = useState([]);

  const getValveData = (val) => {
    let num_valve = val.doc_num;
    let data = []
    for (let i = 0; i < num_valve; i++) {
      data[i] = val[`d_${i + 1}`];
    }
    data.reverse(); //reverse array
    setValveStatusData(data);
  }

  const getTankData = (val) => {
    let num_tank = val.l_n;
    let data = [];
    for (let i = 0; i < num_tank; i++) {
      data[i] = val[`l_${i + 1}`];
      data[i].level = Number(data[i].level);
    }
    setTankData(data);
  };

  const getFlowRateData = (val) => {
    let num_flow = val.doc_num;
    let data = [];
    for (let i = 0; i < num_flow; i++) {
      data[i] = val[`d_${i + 1}`];
    }
    data.reverse(); //reverse array
    setFlowRateData(data);
  };

  const getWaterQualityData = (val) => {
    let num_quality = val.w_n;
    let data = [];
    for (let i = 0; i < num_quality; i++) {
      data[i] = val[`Q_${i + 1}`];
    }
    setQualityStatusData(data);
  }

  useEffect(() => {
    if (mqttClient) {
      mqttClient.on("message", (topic, message) => {
        try {
          let data = JSON.parse(message);
          getTankData(data);
          getFlowRateData(data);
          getValveData(data);
          getWaterQualityData(data);
        } catch (err) {
          console.log('error', err);
        }
      });
    }
  }, [mqttClient]);
  return (
    <div>
      <Row gutter={[8, 8]}>
        <Col span={8}>
          <Card style={{ borderRadius: 15, height: 260 }}>
            <p className="title">Tank Water Level(Meters)</p>
            <Tank data={TankData} />
          </Card>
        </Col>
        <Col span={16}>
          <Card style={{ borderRadius: 15, height: 260, overflow: "auto" }}>
            <p className="title">Flow Rate Display(m<sup>3</sup>/hour)</p>
            <FlowRate data={FlowRateData} />
          </Card>
        </Col>
        <Col span={13}>
          <Card style={{ borderRadius: 15, height: 250, overflow: "auto" }}>
            <p className="title">Valve Position</p>
            <ValveStatus data={ValveStatusData} />
          </Card>
        </Col>
        <Col span={5}>
          <Card style={{ borderRadius: 15, height: 250 }}>
            <p className="title">Water Quality</p>
            <WaterQuality data={qualityStatusData} />
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
