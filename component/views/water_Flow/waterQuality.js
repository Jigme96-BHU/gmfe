import { Card, Col, Row } from "antd";

export default function WaterQuality({ data }) {
  return (
    <Card style={{ borderRadius: 16, height: 160 }}>
      <p className="title">Quality of Water</p>
      <Row justify="space-evenly">
        <Col>
          <p className="sub_title">PH</p>
          <b>0</b>
        </Col>
        <Col>
          <p className="sub_title">TDS</p>
          <b>0</b>
        </Col>
        <Col>
          <p className="sub_title">Chlorine</p>
          <b>0</b>
        </Col>
        <Col>
          <p className="sub_title">Turbidity</p>
          <b>0</b>
        </Col>
      </Row>
    </Card>
  );
}
