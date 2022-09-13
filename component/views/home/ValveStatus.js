import { Col, Row } from "antd";

export default function ValveStatus({ data }) {
  return (
    <div>
      <Row justify="start" gutter={[16, 0]}>
        {data.map((val, i) => {
          return (
            <Col span={8} key={i}>
              <Row justify="space-evenly">
                <Col style={{ width: 50 }}>
                  <p className="sub_title">{val.valve_name}</p>
                </Col>
                <Col style={{ width: 50 }}>
                  {val.valve_status ? (
                    <div className="on">ON</div>
                  ) : (
                    <div className="off">OFF</div>
                  )}
                </Col>
              </Row>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
