import { Col, Row } from "antd";
import { useState } from "react";
import ValveGuage from "./valveGuage";
import ValveOptions from "./valveOptions";

export default function ValveControlDash({ valveList }) {
  const [currentValve, setCurrentValve] = useState({ valve_percent: 0 });

  return (
    <div style={{ textAlign: "center" }}>
      <Row gutter={[8, 8]}>
        <Col span={8}>
          <ValveOptions
            currentValve={currentValve}
            setCurrentValve={setCurrentValve}
            valveList={valveList}
          />
        </Col>
        <Col span={16}>
          <ValveGuage currentValve={currentValve} />
        </Col>
      </Row>
    </div>
  );
}
