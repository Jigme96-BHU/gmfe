import { Col, Row,Card } from "antd";


export default function FlowRate({ data }) {
  return (
    <div style={{ }}>
      <Row>
      
      
        {data.map((val, i) => {
          return (
            <Col key={i} span={5}>
              <Row >
                

              <Card
      hoverable
      style={{
        backgroundColor: val.flow_rate < 5 ? "#e31305" : "#55c704",

        width: 130,

        borderRadius:15,
        margin:3
      }}
  
    >

                <Col span={1}>
                  <p className="sub_title" style={{ fontWeight: "bold", color:"white" }}>{val.flow_name}</p>
                </Col>
                <Col span={1}>
                  <Row >
                    <Col span={1}>
                      <p style={{ fontWeight: "bold", color:"white" }}>{val.flow_rate}</p>
                    </Col>
                   
                  </Row>
                
                </Col>

  </Card>
              
              
              </Row>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
