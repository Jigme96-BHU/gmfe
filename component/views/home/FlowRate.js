import { Column } from "@ant-design/plots";

// export default function FlowRate({ data }) {
//   return (
//     <div style={{ padding: 10 }}>
//       <Row justify="start">
//         {data.map((val, i) => {
//           return (
//             <Col key={i} span={8}>
//               <Row justify="start">
//                 <Col span={12}>
//                   <p className="sub_title">{val.flow_name}</p>
//                 </Col>
//                 <Col span={12}>
//                   <p style={{ fontWeight: "bold" }}>{val.flow_rate}</p>
//                 </Col>
//               </Row>
//             </Col>
//           );
//         })}
//       </Row>
//     </div>
//   );
// }


export default function FlowRate({ data }) {
  const config = {
    data,
    xField: "flow_name",
    yField: "flow_rate",
    height: 150,
    width: 500,
  };

  return (
    <div style={{ padding: 10 }}>
      {/* <Table
        dataSource={data}
        columns={[
          { title: "Flow Name", dataIndex: "flow_name", key: "flow_name" },
          { title: "Flow Rate", dataIndex: "flow_rate", key: "flow_rate" },
          { title: "Total Flow", dataIndex: "total_flow", key: "total_flow" },
          { title: "Voltage", dataIndex: "voltage", key: "voltage" },
        ]}
      /> */}
      <Column {...config} />
    </div>
  );
}
