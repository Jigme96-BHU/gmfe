import React, { useState } from "react";
import { Column } from "@ant-design/plots";
import { Col, Row } from "antd";
export default function Tank({ data }) {
  const config = {
    data,
    xField: "level_name",
    yField: "level",
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return (
    <Row gutter={[0, 8]}>
      <Col span={24}>
        <Row justify="space-around">
          {data.map((val, i) => {
            return (
              <Col key={i}>
                <div
                  style={{
                    padding: 2,
                    height: 35,
                    width: 70,
                    borderRadius: 20,
                    border: "4px solid red",
                    textAlign: "center",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  {val.level}
                </div>
              </Col>
            );
          })}
        </Row>
      </Col>
      <Col span={24}>
        <Column height={140} width={200} {...config} />
      </Col>
    </Row>
  );
}
