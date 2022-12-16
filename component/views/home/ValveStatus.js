import { Col, Row, Card } from "antd";


export default function ValveStatus({ data }) {
  return (
    <div style={{ padding: 10 }}>
      <Row justify="start">
        {data.map((val, i) => {
          return (
            <Col key={i} span={6}>
                
                <Card 
                hoverable
                style={{
                  backgroundColor:  "#10b4eb",
          
                  width: 130,
          
                  borderRadius:15,
                  margin:3
                }}
                >

                
                <Col justify="center">
                  <p className="sub_title" style={{ fontWeight: "bold", color:"white" }}>{val.flow_name}</p>
                </Col>
                <Col >
                  <Row justify="center">
                    <Col >
                      <p style={{ fontWeight: "bold", color:"white" }}>{val.valve_position}</p>
                    </Col>
                  </Row>
                </Col>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
