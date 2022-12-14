import { Col, Row } from "antd";
import { useAppContent } from "../../../context/content";
import Valve from "./valve";
import Water_loss from "./water_loss";

export default function AlarmsEventsDash() {
  const { mqttClient } = useAppContent();
  return (
    <div>
      <Row gutter={[8, 8]}>
        <Col span={14}>
          <Valve data={[]} />
        </Col>
        <Col span={10}>
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <Water_loss data={[]} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
