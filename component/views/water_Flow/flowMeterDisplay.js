import { Card, Col, Row, Select } from "antd";
import { useState } from "react";

export default function FlowMeterDisplay({ data }) {
  const [SelectFlowData, setSelectFlowData] = useState({
    flow_rate: 0,
    total_flow: 0,
  });
  return (
    <Card
      style={{
        borderRadius: "16px",
        padding: 12,
        backgroundColor: "#294c96",
      }}
    >
      <p className="big_title">Flow Meter Display</p>
      <Card>
        <Select
          style={{ width: 130 }}
          placeholder="Select Zone"
          onChange={(val) => {
            setSelectFlowData(data[val]);
          }}
        >
          {data.map((val, i) => {
            return (
              <Select.Option key={i} value={val.key}>
                {val.flow_name}
              </Select.Option>
            );
          })}
        </Select>
        <br />
        <br />
        <div>
          <Row justify="space-evenly" style={{ textAlign: "center" }}>
            <Col span={12}>
              <p className="sub_title">Flow Rate</p>
              <b>{SelectFlowData.flow_rate}</b>
            </Col>
            <Col span={12}>
              <p className="sub_title">Total Flow</p>
              <b>{SelectFlowData.total_flow}</b>
            </Col>
          </Row>
        </div>
      </Card>
    </Card>
  );
}
