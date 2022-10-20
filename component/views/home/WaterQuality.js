import { Col, Row } from "antd";
import React from "react";

export default function WaterQuality({ data }) {
  return (
    <div>
      <Row justify="start" gutter={[16, 0]}>
        {data.map((val, i) => {
          return (
            <Col span={24} key={i}>
              <Row justify="space-evenly">
                <Col style={{ width: 50 }}>
                  <p className="sub_title">{val.Quality_name}</p>
                </Col>
                <Col style={{ width: 50 }}>
                  <p style={{ color: "black" }} className="sub_title">{val.value}</p>
                </Col>
              </Row>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
