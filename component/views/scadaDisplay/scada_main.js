import { Card } from "antd";
import ScadaFlowChart from "./scadaFlowChart";

export default function ScadaDisplayMain() {
  return (
    <Card style={{ minHeight: "78vh" }}>
      <ScadaFlowChart />
    </Card>
  );
}
