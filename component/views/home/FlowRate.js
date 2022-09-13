import { Col, Row } from "antd";

export default function FlowRate({ data }) {
  return (
    <div style={{ padding: 10 }}>
      <Row justify="start">
        {data.map((val, i) => {
          return (
            <Col key={i} span={8}>
              <Row justify="start">
                <Col span={12}>
                  <p className="sub_title">{val.flow_name}</p>
                </Col>
                <Col span={12}>
                  <Row justify="space-between">
                    <Col span={12}>
                      <p style={{ fontWeight: "bold" }}>{val.flow_rate}</p>
                    </Col>
                    <Col span={12} style={{ padding: 2 }}>
                      <div
                        style={{
                          backgroundColor: val.flow_rate < 5 ? "red" : "green",
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
