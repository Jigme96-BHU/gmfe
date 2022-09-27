import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Gauge } from "@ant-design/plots";
import { useAppContent } from "../../../context/content";

const SERVER = process.env.NEXT_PUBLIC_SERVER;

export default function ValveGuage({
  currentValve,
  setCurrentValve,
  node
}) {
  const { mqttPublish } = useAppContent();

  let [ValveValue, setValveValue] = useState(0);

  const getCurrentData = async () => {
    let body = {
      node_name: node.node,
      valve_name: node.valve,
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
    setValveValue(currentValve.valve_percent);
  }, [currentValve]);

  const postServer = async ({ val }) => {
    try {
      let { node_name, valve_name } = currentValve;
      let url = SERVER + "/data/valvedata"; //update API
      let date = new Date();
      date = date.toISOString();
      let body = {
        node_name,
        valve_name,
        valve_percent: val,
        valve_status: val == 0 ? "OFF" : "ON",
        date,
      };
      let response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      response = await response.json();
      if (response.status) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleIncrement = () => {
    if (ValveValue < 100) {
      let newVal = Number(ValveValue) + 25;
      if (newVal > 100) {
        setValveValue(100);
      } else {
        setValveValue(newVal);
      }
    }
  };

  const handleDecrement = () => {
    if (ValveValue > 0) {
      let newVal = ValveValue - 25;
      setValveValue(newVal);
    }
  };

  const handleValve = () => {
    mqttPublish({
      topic: currentValve.node_name,
      val: currentValve.valve_name + String(ValveValue),
    });
    postServer({ val: ValveValue });
    getCurrentData();
  };

  //guage config
  const config = {
    percent: ValveValue / 100,
    range: {
      color: "l(0) 0:#B8E1FF 1:#3D76DD",
    },
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    indicator: null,
    statistic: {
      title: {
        offsetY: -36,
        style: {
          fontSize: "36px",
          color: "white",
        },
        formatter: () => `${ValveValue}%`,
      },
      content: {
        style: {
          fontSize: "24px",
          lineHeight: "44px",
          color: "white",
        },
        formatter: () => "Valve",
      },
    },
  };

  return (
    <>
      <Card
        style={{
          borderRadius: 16,
          background: "#294c96",
          minHeight: 60,
        }}
      >
        <span className="big_title">Valve Guage</span>
      </Card>
      <Card
        style={{
          borderRadius: 16,
          marginTop: 10,
          background: "#294c96",
          minHeight: 410,
        }}
      >
        <Row justify="space-evenly" gutter={[16, 16]}>
          <Col span={24}>
            <Gauge {...config} height={200} width={300} />
          </Col>
          <Col span={24}>
            <Row justify="space-evenly">
              <Col>
                <Button
                  style={{
                    width: 100,
                    background: "#db5f51",
                    border: "none",
                  }}
                  onClick={handleDecrement}
                  icon={<DownOutlined />}
                />
              </Col>
              <Col>
                <Button
                  style={{
                    width: 100,
                    background: "#59d681",
                    border: "none",
                  }}
                  onClick={handleValve}
                >
                  Turn Valve
                </Button>
              </Col>
              <Col>
                <Button
                  style={{
                    width: 100,
                    background: "#59d681",
                    border: "none",
                  }}
                  onClick={handleIncrement}
                  icon={<UpOutlined />}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </>
  );
}

//merge two branch git?git 