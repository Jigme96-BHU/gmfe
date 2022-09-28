import { Card, Table } from "antd";
import { useEffect, useState } from "react";
import moment from "moment";

const SERVER = process.env.NEXT_PUBLIC_SERVER;

export default function Valve() {

  const [tabelData,setTableData] = useState([]);

  useEffect(()=>{
    const valveData = async()=>{
      try {
        let response = await fetch(SERVER + "/data/valvelist");
        response = await response.json();
        if(response.status){
          let valList = response.data;

          for(let i=0;i<valList.length; i++){
            valList[i].key = i;
            
          }
          console.log(valList);
          setTableData(valList);
        }
      } catch (error) {
        console.log(error);  
      }
    };
    valveData();
  },[])

  const column = [
    {
      title: "Node Name",
      dataIndex: "node_name",
      key: "node_name"
    },
    {
      title: "Valve Name",
      dataIndex: "valve_name",
      key: "valve_name",
    },
    {
      title: "Status",
      dataIndex: "valve_status",
      render: (_, record) => (
        <>
          {record.valve_status == "ON" ? (
            <div className="on">
              <span>ON</span>
            </div>
          ) : (
            <div className="off">
              <span>OFF</span>
            </div>
          )}
        </>
      ),
    },
    {
      title: "Date and Time ON/OFF",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render:(_,record)=>{
        return <span> {moment(record.updatedAt).format("YYYY/MM/DD HH:MM:S")} </span> ;
    }

    },
  ];
  return ( 
    <Card
      style={{
        borderRadius: 16,
        padding: 12,
        minHeight: 500,
      }}
    >
      <p className="title">Valve</p>
      <Table bordered dataSource={tabelData} pagination={{pageSize:6}} columns={column} />
    </Card>
  );
}

