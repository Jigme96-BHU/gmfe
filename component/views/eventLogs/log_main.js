import Papa from 'papaparse';
import { Card, Table, DatePicker, Select, Button, message } from "antd";
import { useEffect, useState } from "react";
import React from "react";
import { useAppContent } from "../../../context/content";
import { getRenderPropValue } from "antd/lib/_util/getRenderPropValue";
const server = process.env.NEXT_PUBLIC_SERVER
import { Line, Bar } from '@ant-design/plots'

import { getDailyData, getDailyDataLevel, getDailyDataQuality } from './log'
import { getMonthlyData, getMonthlyDataLevel, getMonthlyDataQuality } from "./log";
import { getWeeklyData, getWeeklyDataLevel, getWeeklyDataQuality } from "./log";
const { Option } = Select;

const sensorData = ['FlowMeter', 'LevelSensor', 'QualitySensor'];
const eachSensorData = {
  FlowMeter: ['Public_OutA', 'Public_InL_B', 'Public_InR_B', 'Royal_TankA', 'TsangkharN',
              'DepongA', 'JE_ZimchungA', 'KHPC_TankB', 'Lower_TownA', 'TRI_TownB', 'TOWN_LineA',
              'TOWN_SchoolN', 'SCHOOL_ColA', 'SCHOOL_BhuN', 'BHU_ColA', 'BHU_RbpB', 'RBP_ColA', 'RBP_endB'],
  LevelSensor: ['Royal_Level', 'Public_Level'],
  QualitySensor: ['TDS', 'PH', 'Turbidity'],
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
    } else if (value === 'FlowMeter') {
      setYField('flow_meter');
    } else if (value === 'QualitySensor') {
      setYField('value');
    }
  };

  const OnSecondSensorChange = (value) => {
    setSecondSensor(value);
  };

  const config = {
    data,
    width: 1000,
    height: 600,
    autoFit: true,
    xField: 'createdAt',
    yField: yField,
  }

  async function getDate(data, dataSting) {
    return setDate(dataSting);
  }

  async function senddata() {
    try {
      let response;
      let filterdata;

      if (sensorType === 'FlowMeter') {
        if (period === "anyday") {
          response = await getDailyData({ date });
          filterdata = response.filter((val) => val.flow_name === secondSensor);
        } else if (period === "month") {
          response = await getMonthlyData({ date });
          filterdata = response.filter((val) => val.flow_name === secondSensor);
        } else if (period === "weekly") {
          response = await getWeeklyData({ date });
          filterdata = response.filter((val) => val.flow_name === secondSensor);
        }
      } else if (sensorType === 'LevelSensor') {
        if (period === "anyday") {
          response = await getDailyDataLevel({ date });
          filterdata = response.filter((val) => val.level_name === secondSensor);
        } else if (period === "month") {
          response = await getMonthlyDataLevel({ date });
          filterdata = response.filter((val) => val.level_name === secondSensor);
        } else if (period === "weekly") {
          response = await getWeeklyDataLevel({ date });
          filterdata = response.filter((val) => val.level_name === secondSensor);
        }
      } else if (sensorType === 'QualitySensor') {
        if (period === 'anyday') {
          response = await getDailyDataQuality({ date });
          filterdata = response.filter((val) => val.value_name === secondSensor);
        } else if (period === "month") {
          response = await getMonthlyDataQuality({ date });
          filterdata = response.filter((val) => val.value_name === secondSensor);
        } else if (period === "weekly") {
          response = await getWeeklyDataQuality({ date });
          filterdata = response.filter((val) => val.value_name === secondSensor);
        }
      }

      setData(filterdata);
    } catch (err) {
      console.log(err)
    }
  }

  const downloadData = () => {
    const csvData = Papa.unparse(data); // Assuming you have PapaParse library imported
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sensor_data.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

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

        <Select value={period} style={{ width: 120 }} onChange={setPeriod}>
          <Option value="anyday">Any Date</Option>
          <Option value="weekly">Weekly</Option>
          <Option value="month">Month</Option>
        </Select>
        <Select defaultValue={sensorData[0]} style={{ width: 140 }} onChange={handleSensorChange}>
          {sensorData.map((sensor) => (
            <Option key={sensor}>{sensor}</Option>
          ))}
        </Select>
        <Select value={secondSensor} style={{ width: 140 }} onChange={OnSecondSensorChange}>
          {sensor.map((sensor) => (
            <Option key={sensor}>{sensor}</Option>
          ))}
        </Select>

        <PickWithType onChange={getDate} />
        <Button type="primary" onClick={senddata}>Fetch</Button>
        <Button onClick={downloadData}>Download Data</Button>
        <Line {...config} />
      </Card>
    </>
  );
}

export default chartDemo;

