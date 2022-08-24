import { Card, Table } from "antd";

export default function Water_loss() {
  const Data = [
    {
      key: 1,
      name: "ATP",
      flow_rate_diff: 0,
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
