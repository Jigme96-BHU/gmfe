import { Col, Row } from "antd";


export default function ValveStatus({ data }) {
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
                      <p style={{ fontWeight: "bold", padding:6 }}>{val.valve_position}</p>
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
