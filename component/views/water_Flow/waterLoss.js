import { Card, Col, Row } from "antd";

export default function WaterLoss({ data }) {
  return (
    <Card
      style={{
        borderRadius: "16px",
        padding: 12,
        backgroundColor: "#294c96",
        textAlign: "center",
      }}
    >
      <p className="big_title">Water Loss</p>
      <Card>
        <Row justify="space-evenly">
          <Col span={12}>
            <p className="title">Flow Rate</p>
            <b>0</b>
          </Col>
          <Col span={12}>
            <p className="title">Total Flow</p>
            <b>0</b>
          </Col>
        </Row>
      </Card>
    </Card>
  );
}
