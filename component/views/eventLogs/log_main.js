import { Card, Table, DatePicker, Select, Button, message } from "antd";
import { useEffect, useState } from "react";
import React from "react";
import { useAppContent } from "../../../context/content";
import { getRenderPropValue } from "antd/lib/_util/getRenderPropValue";
const server = process.env.NEXT_PUBLIC_SERVER
import { Line, Bar } from '@ant-design/plots'

import { getDailyData, getWeeklyDataLevel } from './log'
import { getMonthlyData } from "./log";
import { getDailyDataLevel } from "./log";
import { getMonthlyDataLevel } from "./log";
import { getWeeklyData } from "./log";
const { Option } = Select;

const sensorData = ['FlowMeter', 'LevelSensor', 'QualitySensor'];
const eachSensorData = {
  FlowMeter: ['FM1', 'FM2', 'FM3', 'FM4', 'FM5', 'FM6', 'FM7', 'FM8', 'FM9', 'FM10', 'FM11', 'FM12', 'FM13', 'FM14', 'FM15', 'FM16', 'FM17'],
  LevelSensor: ['level1', 'level2'],
  QualitySensor: ['Q1', 'Q2', 'Q3'],
};

const PickWithType = ({ type, onChange }) => {
  if (type === 'date') return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange}></DatePicker>
}


const chartDemo = () => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState(new Date());

  const [period, setPeriod] = useState('anyday');

  const [sensor, setSensors] = useState(eachSensorData[sensorData[0]]);
  const [secondSensor, setSecondSensor] = useState(eachSensorData[sensorData[0]][0]);
  const [sensorType, setSensorType] = useState('FlowMeter');
  const [yField, setYField] = useState('flow_rate');

  const handleSensorChange = (value) => {
    setSensors(eachSensorData[value]);
    setSecondSensor(eachSensorData[value][0]);
    setSensorType(value);
    if (value === 'LevelSensor') {
      setYField('level');
    } else {
      setYField('flow_rate');

    }
  };

  const OnSecondSensorChange = (value) => {
    setSecondSensor(value);
  };

  const config = {
    data,
    width: 600,
    height: 400,
    autoFit: false,
    xField: 'createdAt',
    yField: yField,

  }

  async function getDate(data, dataSting) {
    return setDate(dataSting);
  }

  async function senddata() {
    try {

      if (sensorType === 'FlowMeter') {
        if (period === "anyday") {
          let response = await getDailyData({ date });
          let filterdata = response.filter((val) => {
            return val.flow_name === secondSensor;
          });
          setData(filterdata);

        } else if (period === "month") {
          let response = await getMonthlyData({ date });
          let filterdata = response.filter((val) => {
            return val.flow_name === secondSensor;
          });
          setData(filterdata);
        } else if (period === "weekly") {
          let response = await getWeeklyData({ date });
          let filterdata = response.filter((val) => {
            return val.flow_name === secondSensor;
          })
          setData(filterdata);
        }


      } else if (sensorType === 'LevelSensor') {
        if (period === "anyday") {
          let response = await getDailyDataLevel({ date });
          let filterdata = response.filter((val) => {
            return val.level_name === secondSensor;
          })
          setData(filterdata);
        } else if (period === "month") {
          let response = await getMonthlyDataLevel({ date });
          let filterdata = response.filter((val) => {
            return val.level_name === secondSensor;
          })
          setData(filterdata);

        } else if (period === "weekly") {
          let response = await getWeeklyDataLevel({ date });
          let filterdata = response.filter((val) => {
            return val.level_name === secondSensor;
          })
          setData(filterdata);
        }
      }



    } catch (err) {
      console.log(err)
    }

  }

  return (
    <>
      <Card
        style={{
          borderRadius: 16,
          padding: 12,
          minHeight: 330,
        }}
      >
        <h1>Select Date</h1>

        <Select value={period} style={{ width: 120, }} onChange={setPeriod}>
          <Option value="anyday">Any Date</Option>
          <Option value="weekly">Weekly</Option>
          <Option value="month">Month</Option>
        </Select>
        <Select defaultValue={sensorData[0]} style={{ width: 140, }} onChange={handleSensorChange}>
          {sensorData.map((sensor) => (
            <Option key={sensor}>{sensor}</Option>
          ))}
        </Select>
        <Select value={secondSensor} style={{ width: 90, }} onChange={OnSecondSensorChange}>
          {sensor.map((sensor) => (
            <Option key={sensor}>{sensor}</Option>
          ))}
        </Select>

        <PickWithType onChange={getDate} ></PickWithType>
        <Button type="primary" onClick={senddata}>Fetch</Button>
        <Line {...config}></Line>
      </Card>

    </>

  );


}

export default chartDemo;











