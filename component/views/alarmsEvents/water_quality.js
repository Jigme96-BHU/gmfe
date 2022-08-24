import { Card, Col, Row } from "antd";

export default function Water_Quality() {
  return (
    <Card
      style={{
        borderRadius: 16,
        minHeight: 100,
      }}
    >
      <p className="title">Quality of Water</p>
      <Row justify="start">
        <Col span={12}>
          <Row justify="start">
            <Col span={8}>
              <p className="sub_title">PH</p>
            </Col>
            <Col span={8}>
              <b>0</b>
            </Col>
            <Col span={8}></Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row justify="start">
            <Col span={8}>
              <p className="sub_title">Turbidity</p>
            </Col>
            <Col span={8}>
              <b>0</b>
            </Col>
            <Col span={8}></Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row justify="start">
            <Col span={8}>
              <p className="sub_title">Cholorine</p>
            </Col>
            <Col span={8}>
              <b>0</b>
            </Col>
            <Col span={8}></Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row justify="start">
            <Col span={8}>
              <p className="sub_title">TDS</p>
            </Col>
            <Col span={8}>
              <b>0</b>
            </Col>
            <Col span={8}></Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
