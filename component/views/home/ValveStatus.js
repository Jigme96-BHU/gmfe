import { Col, Row } from "antd";

export default function ValveStatus({ data }) {
  return (
    <div style={{ paddingLeft: 10, fontSize: 13, backgroundColor: '#f0f2f5', borderRadius: '8px', padding: '20px' }}>
      <Row justify="start" gutter={[16, 16]}>
        {data.map((val, i) => {
          return (
            <Col key={i} span={8}>
              <Row justify="center" align="middle" style={{ border: '1px solid #d9d9d9', borderRadius: '8px', padding: '10px', backgroundColor: '#ffffff', flexDirection: 'column' }}>
                <Col span={24}>
                  <p style={{ fontWeight: "bold", fontSize: '20px', color: val.valve_position === 'N' ? 'red' : 'green', textAlign: 'center' }}>{val.valve_position}</p>
                </Col>
                <Col span={24}>
                  <p className="sub_title" style={{ fontWeight: 'normal', color: '#595959', textAlign: 'center' }}>{val.flow_name}</p>
                </Col>
              </Row>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
