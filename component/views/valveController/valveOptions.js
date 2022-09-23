import React from "react";
import { Card, Cascader, Col, Row, Select } from "antd";

const SERVER = process.env.NEXT_PUBLIC_SERVER;

export default function ValveOptions({
  valveList,
  setCurrentValve,
  currentValve,
  node,
  valve,
  setNode,
  setValve,
}) {
  const getCurrentData = async (a, b) => {
    setNode(a);
    setValve(b);
    let body = {
      node_name: node,
      valve_name: valve,
    };
    let response = await fetch(SERVER + "/data/specific", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    response = await response.json();

    setCurrentValve(response.data);
  };

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
        <Cascader
          style={{ width: 150 }}
          options={valveList}
          onChange={(v) => {
            setCurrentValve({
              node_name: v[0],
              valve_name: v[1],
              valve_percent: currentValve.valve_percent,
            });
            getCurrentData(v[0], v[1]);
          }}
          allowClear={false}
        />
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
            <p className="sub_title">Valve :</p>
          </Col>
          <Col span={12}>
            <b>{currentValve.valve_name}</b>
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
