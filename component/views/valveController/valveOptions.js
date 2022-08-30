import React from "react";
import { Card, Col, Row, Select } from "antd";

export default function ValveOptions({
  valveList,
  setCurrentValve,
  currentValve,
}) {
  return (
    <Card
      style={{
        borderRadius: 16,
        background: "#294c96",
        minHeight: 500,
      }}
    >
      <p className="big_title">Valve</p>
      <Card
        style={{
          borderRadius: 6,
          minHeight: 300,
        }}
      >
        <Select
          style={{ width: 150 }}
          onChange={(v) => {
            setCurrentValve(valveList[v]);
          }}
          placeholder="Select Valve"
        >
          {valveList.map((val, i) => {
            return (
              <Select.Option value={val.key} key={i}>
                {val.valve_name}
              </Select.Option>
            );
          })}
        </Select>
        <br />
        <br />
        <br />
        <br />
        <Row>
          <Col span={12}>
            <p className="sub_title">Node :</p>
          </Col>
          <Col span={12}>
            <b>{currentValve.node_name}</b>
          </Col>
          <Col span={12}>
            <p className="sub_title">Status :</p>
          </Col>
          <Col span={12}>
            <b>{currentValve.valve_status}</b>
          </Col>
        </Row>
      </Card>
    </Card>
  );
}
