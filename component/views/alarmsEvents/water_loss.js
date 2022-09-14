import { Card, Table } from "antd";
import { useEffect, useState } from "react";
import io from 'socket.io-client';
let socket;

export default function Water_loss() {

  const [input, setInput] = useState('No Data')
  const [rbp, setRbp] = useState('No Data')
  const [bhu, setBhu] = useState('No Data')
  const [school, setSchool] = useState('No Data')
  const [terrace, setTerrace] = useState('No Data')
  const [kst, setKst] = useState('No Data')
  const [maintown, setMainTown] = useState('No Data')
  const [chabjey, setChabjey] = useState('No Data')

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
      setRbp(rbp);
      const bhu = userobj.BHU;
      setBhu(bhu);
      const school = userobj.School;
      setSchool(school);
      const terrace = userobj.Terrace;
      setTerrace(terrace);
      const chabjey = userobj.Chabjey;
      setChabjey(chabjey)
      const main_town = userobj.Main_Town;
      setMainTown(main_town);
      const kst = userobj.KST;
      setKst(kst);
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
      key: 3,
      name: "BHU",
      flow_rate_diff: bhu,
      status: true,
    },
    {
      key: 4,
      name: "School",
      flow_rate_diff: school,
      status: true,
    },
    {
      key: 5,
      name: "KST",
      flow_rate_diff: kst,
      status: true,
    },
    {
      key: 6,
      name: "Terrace",
      flow_rate_diff: terrace,
      status: true,
    },
    {
      key: 7,
      name: "Main Town",
      flow_rate_diff: maintown,
      status: true,
    },
    {
      key: 8,
      name: "Chabjey",
      flow_rate_diff: chabjey,
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
          {record.flow_rate_diff > 0 ? (
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
      <Table bordered dataSource={Data} pagination={{pageSize:5}} columns={column} />
    </Card>
  );
}
