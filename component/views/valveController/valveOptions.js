import React, { useEffect, useState } from "react";
import { Card, Cascader, Col, Row } from "antd";
import { useAppContent } from "../../../context/content";

const SERVER = process.env.NEXT_PUBLIC_SERVER;
const REPLYTOPIC = process.env.NEXT_PUBLIC_MQTT_TOPIC_REPLY;
export default function ValveOptions({
  valveList,
  setCurrentValve,
  currentValve,
  setConfig,
}) {
  let { mqttClient } = useAppContent();

  let [response, setResponse] = useState("");

  const getCurrentData = async (a, b) => {
    setConfig({
      node: a,
      valve: b,
    });
    let body = {
      node_name: a,
      valve_name: b,
    };
    let response = await fetch(SERVER + "/data/specific", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    response = await response.json();
    setCurrentValve(response.data);

  };

  useEffect(() => {
    if (mqttClient) {
      mqttClient.on("message", (topic, messages) => {
        if (topic == REPLYTOPIC) {
          // console.log(topic, messages.toString());
          setResponse(messages.toString());
        }
      });
    }
  }, [mqttClient]);

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
          <Col span={12}>
            <p className="sub_title">Valve feedback:</p>
          </Col>
          <Col span={12}>
            <b>{response}</b>
          </Col>

          <Col span={12}>
            <p className="sub_title">Valve percent:</p>
          </Col>
        </Row>
      </Card>
    </Card>
  );
}
