import { Card, Table } from "antd";
import { useEffect, useState } from "react";
import io from 'socket.io-client';
let socket;

export default function Water_loss() {

  const [input, setInput] = useState('')
  const [rbp, setrbp] = useState('')
  const [bhu, setbhu] = useState('')
  const [school, setschool] = useState('')

  useEffect(() => {SocketInitializer(),[]})

  const SocketInitializer = async () =>{
    const socket = await io('http://localhost:5001');
    socket.on('connection',()=>{
      console.log('socket Connected')
    })
    socket.on('message',(data)=>{
      let userobj = JSON.parse(data)
      const small_town = userobj.small_town;
      setInput(small_town);
      const rbp = userobj.RBP;
      setrbp(rbp);
      const bhu = userobj.BHU;
      setbhu(bhu);
      const school = userobj.School;
      setschool(school);
    })
  }

  const Data = [

    {
      key: 1,
      name: "Small Town",
      flow_rate_diff: input,
      status: false,
    },
    {
      key: 2,
      name: "RBP",
      flow_rate_diff: rbp,
      status: true,
    },
    {
      key: 2,
      name: "BHU",
      flow_rate_diff: bhu,
      status: true,
    },
    {
      key: 2,
      name: "School",
      flow_rate_diff: school,
      status: true,
    },
  ];

  const column = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Flow Rate Difference",
      dataIndex: "flow_rate_diff",
      key: "flow_rate_diff",
    },

    {
      title: "Status",
      dataIndex: "status",
      render: (_, record) => (
        <>
          {record.status ? (
            <div className="on">Operational</div>
          ) : (
            <div className="off">Defunct</div>
          )}
        </>
      ),
    },
  ];
  return (
    <Card
      style={{
        borderRadius: 16,
        padding: 12,
        minHeight: 330,
      }}
    >
      <p className="title">Water Loss</p>
      <Table bordered dataSource={Data} columns={column} />
    </Card>
  );
}
