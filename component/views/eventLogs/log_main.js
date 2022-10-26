import { Card, Table, DatePicker, Select, Button, message } from "antd";
import { useEffect, useState } from "react";
import React from "react";
import { useAppContent } from "../../../context/content";
import { getRenderPropValue } from "antd/lib/_util/getRenderPropValue";
const server = process.env.NEXT_PUBLIC_SERVER
import { Line, Bar } from '@ant-design/plots'

import { getDailyData, getDailyDataLevel, getDailyDataQuality } from './log'
import { getMonthlyData , getMonthlyDataLevel, getMonthlyDataQuality } from "./log";
import { getWeeklyData, getWeeklyDataLevel, getWeeklyDataQuality } from "./log";
const { Option } = Select;

const sensorData = ['FlowMeter', 'LevelSensor', 'QualitySensor'];
const eachSensorData = {
  FlowMeter: ['Police_end1', 'Police_Col1', 'Bhu_Police2', 'Bhu_Col2', 'School_Bhu3', 'School_Col3','Town_School4','Town_Line4', 'Tri_Town5', 'Lower_Town5', 'Kst_In6', 'Kst_Tank6', 'Depong7', 'Tsangkhar7', 'Royal_Tank8', 'Public_InR9', 'Public_InL9', 'Public_Out9'],
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
    }else if(value === 'FlowMeter'){
      setYField('flow_meter');
    }else if(value === 'QualitySensor'){
      setYField('value');
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
      }else if (sensorType == 'QualitySensor'){
        if(period === 'anyday'){
          let response = await getDailyDataQuality({ date });
          let filterdata = response.filter((val)=>{
            return val.value_name === secondSensor;
          })
          setData(filterdata);
        }
      }else if (period === "month") {
        let response = await getMonthlyDataQuality({ date });
        let filterdata = response.filter((val) => {
          return val.level_name === secondSensor;
        })
        setData(filterdata);

      } else if (period === "weekly") {
        let response = await getWeeklyDataQuality({ date });
        let filterdata = response.filter((val) => {
          return val.level_name === secondSensor;
        })
        setData(filterdata);
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
        <Select value={secondSensor} style={{ width: 140, }} onChange={OnSecondSensorChange}>
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











