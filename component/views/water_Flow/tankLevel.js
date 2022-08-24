import { Card, Col, Row } from "antd";
import { Liquid } from "@ant-design/plots";
import WaterQuality from "./waterQuality";

export default function TankLevel({ data }) {
  const total_capacity = 100;
  return (
    <div style={{ textAlign: "center" }}>
      <Row gutter={[12, 12]}>
        <Col span={24}>
          <Card
            style={{
              borderRadius: 16,
              backgroundColor: "#294c96",
              textAlign: "center",
            }}
          >
            <span className="big_title">Tank Water Level</span>
          </Card>
        </Col>

        <Col span={24}>
          <Card style={{ borderRadius: 16, maxHeight: 250 }}>
            <Row>
              {data.map((val, i) => {
                return (
                  <Col key={i} span={12}>
                    <Liquid
                      {...{
                        percent: val.level * (1 / total_capacity),
                        outline: {
                          border: 3,
                          distance: 3,
                        },
                        width: 200,
                        height: 200,
                        wave: {
                          length: 225,
                        },
                      }}
                    />
                    <p className="sub_title">{val.flow_name}</p>
                  </Col>
                );
              })}
            </Row>
          </Card>
        </Col>

        <Col span={24}>
          <WaterQuality data={{}} />
        </Col>
      </Row>
    </div>
  );
}
