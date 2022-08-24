import { Col, Row } from "antd";
import React from "react";

export default function WaterQuality({ data }) {
  return (
    <div>
      <Row justify="start">
        <Col span={12}>
          <p className="sub_title">PH</p>
        </Col>
        <Col span={12}></Col>
        <Col span={12}>
          <p className="sub_title">Chlorine</p>
        </Col>
        <Col span={12}></Col>
        <Col span={12}>
          <p className="sub_title">Turbidity</p>
        </Col>
        <Col span={12}></Col>
        <Col span={12}>
          <p className="sub_title">TDS</p>
        </Col>
        <Col span={12}></Col>
      </Row>
    </div>
  );
}
