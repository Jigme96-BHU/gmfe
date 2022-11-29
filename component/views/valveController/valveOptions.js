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
  let [isSuccess, setIsSuccess] = useState(false);
  let [responseMessage, setResponseMessage] = useState();
  let [nodeName, setNodeName] = useState();

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

  const checkErrorCodeFirstTwoDigit = async (responseNumber) => {

    switch (responseNumber) {

      case '01':
        setIsSuccess(true)
        setNodeName('BHU')
        break;
      case '02':
        setIsSuccess(false)
        setNodeName('KHPC')
        break;
      case '03':
        setIsSuccess(false)
        setNodeName('RBP')
      // 04 is from gateway and should be ignored
      case '05':
        setIsSuccess(false)
        setNodeName('SCHOOL')
        break;
      case '06':
        setIsSuccess(false)
        setNodeName('TRIJUNCTION')
        break;
      case '07':
        setIsSuccess(false)
        setNodeName('TOWN')
        break;
      case '08':
        setIsSuccess(false)
        setNodeName('SOURCE')
        break;
      case '09':
        setIsSuccess(false)
        setNodeName('ROYAL')
        break;
      case '10':
        setIsSuccess(false)
        setNodeName('DESUPTANK')
        break;
      default:
        setIsSuccess(false)
        setNodeName('Error')
    }
    console.log("message: " + responseMessage)
    console.log("error code: " + responseNumber)

  }


  const checkErrorCodeLastTwoDigit = async (responseNumber) => {

    switch (responseNumber) {

      case '00':
        setIsSuccess(true)
        setResponseMessage('Success')
        break;
      case '99':
        setIsSuccess(true)
        setResponseMessage('XOR Check Error')
        break;
      case 'E1':
        setIsSuccess(false)
        setResponseMessage('XOR Check Error')
        break;
      case 'E4':
        setIsSuccess(false)
        setResponseMessage('Security Check Failed')
      case 'E5':
        setIsSuccess(false)
        setResponseMessage('MAC frame long error')
        break;
      case 'E6':
        setIsSuccess(false)
        setResponseMessage('Invalid Parameter')
        break;
      case 'E7':
        setIsSuccess(false)
        setResponseMessage('DID not receive ACK')
        break;
      case 'EA':
        setIsSuccess(false)
        setResponseMessage('Transmitter is busy')
        break;
      case 'C1':
        setIsSuccess(false)
        setResponseMessage('Network Layer Invalid Parameter')
        break;
      case 'C2':
        setIsSuccess(false)
        setResponseMessage('Invalid Request')
        break;
      case 'C7':
        setIsSuccess(false)
        setResponseMessage('No Route Found')
        break;
      case 'D1':
        setIsSuccess(false)
        setResponseMessage('Buffer Busy')
        break;
      case 'D2':
        setIsSuccess(false)
        setResponseMessage('APS layer did not receive ACK')
        break;
      case 'D3':
        setIsSuccess(false)
        setResponseMessage('APS frame is too long')
        break;
      default:
        setIsSuccess(false)
        setResponseMessage('Error')
    }
    console.log("message: " + responseMessage)
    console.log("error code: " + responseNumber)
  }

  useEffect(() => {
    if (mqttClient) {
      mqttClient.on("message", (topic, messages) => {
        if (topic == REPLYTOPIC) {
          setResponse(messages.toString())
          try {
            let res1 = response.substring(2, 4)
            let res2 = response.substring(1, 2)
            checkErrorCodeLastTwoDigit(res1)
            checkErrorCodeFirstTwoDigit(res2)
          } catch (err) {
            console.log(err);
          }

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
            <p className="sub_title">Response:</p>
          </Col>
          <Col span={12}>
            <b>{responseMessage}</b>
          </Col>
          <Col span={12}>
            <p className="sub_title">From NODE:</p>
          </Col>
          <Col span={12}>
            <b>{nodeName}</b>
          </Col>
          <Col span={12}>
            <p className="sub_title">Valve percent:</p>
          </Col>
          <Col span={12}>
            <b>{currentValve.valve_percent}</b>
          </Col>
        </Row>
      </Card>
    </Card>
  );
}
