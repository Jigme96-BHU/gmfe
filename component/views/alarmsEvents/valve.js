import { Card, Table } from "antd";

export default function Valve({ data }) {
  const Data = [
    {
      key: 1,
      name: "ATP",
      status: true,
      time_operation: "10-10-2022",
      operation: false,
      time_error: "11-10-2022",
    },
  ];

  const column = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (_, record) => (
        <>
          {record.status ? (
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
      title: "Time ON/OFF",
      dataIndex: "time_operation",
      key: "time_operation",
    },
    {
      title: "Operation",
      dataIndex: "operation",
      render: (_, record) => (
        <>
          {record.operation ? (
            <div className="on">
              <span>Operational</span>
            </div>
          ) : (
            <div className="off">
              <span>Defunct</span>
            </div>
          )}
        </>
      ),
    },
    {
      title: "Time(of Error)",
      dataIndex: "time_error",
      key: "time_error",
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
      <Table bordered dataSource={Data} columns={column} />
    </Card>
  );
}
