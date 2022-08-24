import { Col, Row } from "antd";

export default function AlarmsEvents() {
  return (
    <div>
      <Row justify="start" gutter={[6, 16]}>
        <Col span={12}>
          <p className="sub_title">Water Loss</p>
        </Col>
        <Col span={12}></Col>
        <Col span={12}>
          <p className="sub_title">Valve Operation</p>
        </Col>
        <Col span={12}></Col>
        <Col span={12}>
          <p className="sub_title">Quality of Water</p>
        </Col>
        <Col span={12}></Col>
      </Row>
    </div>
  );
}
