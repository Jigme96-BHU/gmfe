import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Gauge } from "@ant-design/plots";
import { useAppContent } from "../../../context/content";
export default function ValveGuage({ currentValve }) {
  const { mqttPublish } = useAppContent();

  const [ValveValue, setValveValue] = useState(0);

  useEffect(() => {
    setValveValue(currentValve.valve_percent);
  }, [currentValve]);

  const postServer = async ({ val }) => {
    try {
      let { node_name, valve_name } = currentValve;
      let url = "http://localhost:5000/data/postValve";
      let body = {
        node_name,
        valve_name,
        valve_percent: val * 100,
        valve_status: val == 0 ? "OFF" : "ON",
      };
      // let response = await fetch(url, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(body),
      // });
      console.log(body);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleIncrement = () => {
    if (ValveValue < 1) {
      setValveValue(ValveValue + 0.25);
      mqttPublish({
        valve_topic: currentValve.valve_topic,
        val: ValveValue + 0.25,
      });
    }
    postServer({ val: ValveValue + 0.25 });
  };

  const handleDecrement = () => {
    if (ValveValue > 0) {
      setValveValue(ValveValue - 0.25);
      mqttPublish({
        valve_topic: currentValve.valve_topic,
        val: ValveValue - 0.25,
      });
      postServer({ val: ValveValue - 0.25 });
    }
  };

  //guage config
  const config = {
    percent: ValveValue,
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
        formatter: () => `${ValveValue * 100}%`,
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
        <Row justify="space-evenly">
          <Col span={24}>
            <Gauge {...config} height={200} width={300} />
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
