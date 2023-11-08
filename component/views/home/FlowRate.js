import { Col, Row } from "antd";


export default function FlowRate({ data }) {
  return (
    <div style={{ padding: 10 }}>
      <Row justify="start">
        {data.map((val, i) => {
          // Check if val.flow_rate is empty or not a number, if so, set it to '0.00'
          let flowRate = isNaN(val.flow_rate) || val.flow_rate === '' ? 'N/A' : parseFloat(val.flow_rate).toFixed(2);
          return (
            <Col key={i} span={8}>
              <Row justify="start">
                <Col span={12}>
                  <p className="sub_title">{val.flow_name}</p>
                </Col>
                <Col span={12}>
                  <Row justify="space-between">
                    <Col span={12}>
                      <p style={{ fontWeight: "bold" }}>{flowRate}</p>
                    </Col>
                    <Col span={12} style={{ padding: 2 }}>
                      <div
                        style={{
                          backgroundColor: flowRate === '0.00' ? "red" :  flowRate === 'N/A' ? "gray" : "green",
                          width: 25,
                          height: 15,
                        }}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}