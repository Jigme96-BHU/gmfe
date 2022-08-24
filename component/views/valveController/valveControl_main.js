import { Button, Card, Col, Row, Select } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Gauge } from "@ant-design/plots";
import React, { useEffect, useState } from "react";
import { useAppContent } from "../../../context/content";

export default function ValveControlDash() {
  const { mqttClient, mqttPublish } = useAppContent();

  const [FlowRateData, setFlowRateData] = useState([]);
  const [SelectFlowData, setSelectFlowData] = useState({
    flow_rate: 0,
    total_flow: 0,
  });
  const getFlowRateData = (val) => {
    let num_flow = val.doc_num;
    let data = [];
    for (let i = 0; i < num_flow; i++) {
      data[i] = val[`doc_${i + 1}`];
    }
    data.reverse(); //reverse array
    setFlowRateData(data);
  };

  useEffect(() => {
    if (mqttClient) {
      mqttClient.on("message", (topic, message) => {
        let data = JSON.parse(message);

        getFlowRateData(data);
      });
    }
  }, [mqttClient]);

  const [ValveValue, setValveValue] = useState(null);

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

  const postServer = async ({ val }) => {
    try {
      let { node_name, flow_name } = SelectFlowData;
      let url = "http://localhost:5000/data/postValve";
      let body = {
        node_name,
        valve_name: flow_name,
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
        flow_name: SelectFlowData.flow_name,
        val: ValveValue + 0.25,
      });
    }
    postServer({ val: ValveValue + 0.25 });
  };

  const handleDecrement = () => {
    if (ValveValue > 0) {
      setValveValue(ValveValue - 0.25);
      mqttPublish({
        flow_name: SelectFlowData.flow_name,
        val: ValveValue - 0.25,
      });
      postServer({ val: ValveValue - 0.25 });
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Row gutter={[8, 8]}>
        <Col span={8}>
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
                  setSelectFlowData(FlowRateData[v]);
                }}
                placeholder="Select Valve"
              >
                {FlowRateData.map((val, i) => {
                  return (
                    <Select.Option value={val.key} key={i}>
                      {val.flow_name}
                    </Select.Option>
                  );
                })}
              </Select>
              <br />
              <br />
              <br />
              <Row>
                <Col span={12}>
                  <p className="sub_title">Flow Rate</p>
                  <b>{SelectFlowData.flow_rate}</b>
                </Col>
                <Col span={12}>
                  <p className="sub_title">Total Flow</p>
                  <b>{SelectFlowData.total_flow}</b>
                </Col>
              </Row>
            </Card>
          </Card>
        </Col>
        <Col span={16}>
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
        </Col>
      </Row>
    </div>
  );
}
