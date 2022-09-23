import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import ValveGuage from "./valveGuage";
import ValveOptions from "./valveOptions";

// const HOST = process.env.NEXT_PUBLIC_HOST;
const SERVER = process.env.NEXT_PUBLIC_SERVER
export default function ValveControlDash() {
  const [valveList, setValveList] = useState([]);

  useEffect(() => {
    const getValveList = async () => {
      try {
        let response = await fetch(SERVER + "/data/valvelist");
        response = await response.json();
        if (response.status) {
          let valveList = response.data;
          /* structuring data to impliment cascade
            const valveList = [{
              label: "node",
              value: "node",
              children: [{
                label, "valve"
                value:"valve"
              }]
            }]
          */
          let groupedList = valveList.reduce((acc, value) => {
            // Group initialization
            if (!acc[value.node_name]) {
              acc[value.node_name] = [];
            }

            // Grouping
            acc[value.node_name].push(value);

            return acc;
          }, {});
          let keys = Object.keys(groupedList);
          let valveObj = [];
          for (let i = 0; i < keys.length; i++) {
            let valves = [];

            for (let j = 0; j < groupedList[keys[i]].length; j++) {
              valves[j] = {
                label: groupedList[keys[i]][j].valve_name,
                value: groupedList[keys[i]][j].valve_name,
              };
            }

            valveObj[i] = {
              label: keys[i],
              value: keys[i],
              children: valves,
            };
          }
          setValveList(valveObj);
        }
      } catch (error) {}
    };
    getValveList();
  }, []);
  const [currentValve, setCurrentValve] = useState({
    node_name: "",
    valve_name: "",
    valve_percent: 0,
    status: "OFF",
  });

  return (
    <div style={{ textAlign: "center" }}>
      <Row gutter={[8, 8]}>
        <Col span={8}>
          <ValveOptions
            currentValve={currentValve}
            setCurrentValve={setCurrentValve}
            valveList={valveList}
          />
        </Col>
        <Col span={16}>
          <ValveGuage currentValve={currentValve} />
        </Col>
      </Row>
    </div>
  );
}
