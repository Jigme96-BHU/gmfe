import { Col, Row, Card } from "antd";
import React from "react";

export default function WaterQuality({ data }) {
  return (
    <div>
      <Row justify="start" gutter={[10, 0]}>
        {data.map((val, i) => {
          return (
            <Col span={24} key={i}>
              <Row justify="center">

{/* 
              <Card 
              
              hoverable
                style={{
                  backgroundColor:  "#eba709",
          
                  width: 130,
          
                  borderRadius:15,

                //  height:80,

                  margin:3
                  
                }}>
                 <Col  justify="center">
                  <p  style={{ fontWeight: "bold", color:"white", justifyItems:"center" }} className="sub_title">{val.Quality_name}</p>
                </Col>
                <Col  justify="center">
                  <p  style={{ color: "white" }} className="sub_title">{i === 1 ? val.value / 100 : val.value}</p>
                </Col>
              </Card> */}
 <Card 
                hoverable
                style={{
                  backgroundColor:  "#10b4eb",
          
                  width: 130,
                   height:85,   
                  borderRadius:15,
                  margin:3
                }}
                >

                
                <Col justify="center">
                  <p className="sub_title" style={{  color:"white" }}>{val.Quality_name}</p>
                </Col>
                <Col >
                  <Row justify="center">
                    <Col >
                      <p style={{  color:"white",  }}>{val.value}</p>
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
