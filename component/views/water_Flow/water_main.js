import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useAppContent } from "../../../context/content";
import FlowMeterDisplay from "./flowMeterDisplay";
import TankLevel from "./tankLevel";
import WaterLoss from "./waterLoss";

export default function WaterFlowDash() {
  const { mqttClient } = useAppContent();
  const [TankData, setTankData] = useState([
    {
      level_name: "level1",
      flow_rate: 0,
      total_flow: 0,
      voltage: 0,
      level: 0,
    },{
      level_name: "level2",
      flow_rate: 0,
      total_flow: 0,
      voltage: 0,
      level: 0,
    },
  ]);

  const [FlowRateData, setFlowRateData] = useState([]);

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
      data[i].key = i;
    }
    data.reverse(); //reverse array
    setFlowRateData(data);
  };

  useEffect(() => {
    if (mqttClient) {
      mqttClient.on("message", (topic, message) => {
        let data = JSON.parse(message);
        getFlowRateData(data);
        getTankData(data);
      });
    }
  }, [mqttClient]);

  return (
    <div>
      <Row gutter={[8, 8]}>
        <Col span={8}>
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <FlowMeterDisplay data={FlowRateData} />
            </Col>
            <Col span={24}>
              <WaterLoss data={{}} />
            </Col>
          </Row>
        </Col>
        <Col span={16}>
          <TankLevel data={TankData} />
        </Col>
      </Row>
    </div>
  );
}
