import { Card, Col, Row } from "antd";

export default function WaterQuality({ data }) {

  return (
    <Card style={{ borderRadius: 16, height: 160 }}>
      <p className="big_title" style={{ color: 'black' }}>Water Quality</p><br />
      <Row justify="space-around" gutter={[16, 0]}>
        {data.map((val, i) => {
          return (
            <Col key={i}>
              <Row justify="space-evenly">
                <Col span={24} style={{ width: 50 }}>
                  <p className="sub_title">{val.Quality_name}</p>
                </Col>
                <Col span={24} style={{ width: 50 }}>
                  <p className="sub_title">{i === 1 ? val.value / 100 : val.value}</p>
                </Col>
              </Row>
            </Col>
          );
        })}
      </Row>
    </Card>
  );
}
