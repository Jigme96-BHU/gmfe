import { Col, Row } from "antd";

export default function ValveStatus({ data }) {
  return (
    <div>
      <Row justify="start" gutter={[16, 0]}>
        {data.map((val, i) => {
          return (
            <Col span={8} key={i}>
              <Row gutter={[8,8]} justify="space-evenly">
                <Col style={{ width: 90 }}>
                  <p className="sub_title">{val.flow_name}</p>
                </Col>
                <Col  style={{ width: 50 }}>
                  {val.valve_position > 0 ?(
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
