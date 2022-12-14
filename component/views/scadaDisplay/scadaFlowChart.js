import React from "react";
import ReactFlow, { Controls } from "react-flow-renderer";

export default function ScadaFlowChart() {
  const nodes = [
    {
      id: "1",
      type: "input",
      style: {
        width: 100,
        borderRadius: 20,
      },
      data: { label: "Source 1" },
      position: { x: 50, y: 25 },
    },

    {
      id: "2",
      type: "input",
      style: {
        width: 100,
        // height: 100,
        // border: "none",
        borderRadius: 20,
        // backgroundImage:
        //   "url('https://www.ntotank.com/media/catalog/product/cache/1/image/3294x/9df78eab33525d08d6e5fb8d27136e95/t/l/tlv03000dg.jpg')",
        // backgroundSize: "cover",
      },
      data: { label: "Source" },
      position: { x: 200, y: 25 },
    },

    {
      id: "3",
      style: { width: 90, borderRadius: 20, border: "8px solid blue" },
      data: { label: "Source A" },
      position: { x: 325, y: 125 },
    },

    {
      id: "4",
      style: { width: 150, borderRadius: 20, border: "8px solid green" },
      data: { label: "Filter Tank" },
      position: { x: 210, y: 240 },
    },
    {
      id: "5",
      sourcePosition: "right",
      targetPosition: "left",
      style: { width: 80, borderRadius: 20, border: "8px solid blue" },
      data: { label: "Public inL" },
      position: { x: 0, y: 380 },
    },
    {
      id: "6",
      sourcePosition: "right",
      targetPosition: "left",
      style: { width: 80, borderRadius: 20, border: "8px solid blue" },
      type: "output",
      data: { label: "V2" },
      position: { x: 100, y: 380 },
    },
    {
      id: "7",
      sourcePosition: "right",
      targetPosition: "left",
      style: { width: 80, borderRadius: 20, border: "8px solid blue" },
      type: "output",
      data: { label: "V3" },
      position: { x: 380, y: 380 },
    },
    {
      id: "8",
      sourcePosition: "right",
      targetPosition: "left",
      style: { width: 80, borderRadius: 20, border: "8px solid blue" },
      data: { label: "Public inR" },
      position: { x: 400, y: 260 },
    },
    {
      id: "9",
      sourcePosition: "right",
      targetPosition: "left",
      style: { width: 80, borderRadius: 20, border: "8px solid blue" },
      data: { label: "FLOW9" },
      position: { x: 550, y: 260 },
    },
    {
      id: "10",
      sourcePosition: "right",
      targetPosition: "left",
      style: { width: 80, borderRadius: 20, border: "8px solid blue" },
      type: "output",
      data: { label: "FLOW10" },
      position: { x: 480, y: 150 },
    },
    {
      id: "11",
      sourcePosition: "right",
      targetPosition: "left",
      style: { width: 80, borderRadius: 20, border: "8px solid blue" },
      data: { label: "FLOW11" },
      position: { x: 675, y: 260 },
    },
    {
      id: "12",
      sourcePosition: "right",
      targetPosition: "left",
      style: { width: 80, borderRadius: 20, border: "8px solid blue" },
      type: "output",
      data: { label: "FLOW12" },
      position: { x: 630, y: 150 },
    },
    {
      id: "13",
      style: { width: 80, borderRadius: 20, border: "8px solid blue" },
      data: { label: "FLOW13" },
      position: { x: 720, y: 360 },
    },
    {
      id: "14",
      sourcePosition: "right",
      targetPosition: "left",
      style: { width: 80, borderRadius: 20, border: "8px solid blue" },
      type: "output",
      data: { label: "FLOW14" },
      position: { x: 840, y: 260 },
    },
    {
      id: "15",
      style: { width: 80, borderRadius: 20, border: "8px solid blue" },
      data: { label: "FLOW15" },
      position: { x: 720, y: 470 },
    },
    {
      id: "16",
      sourcePosition: "right",
      targetPosition: "left",
      style: { width: 80, borderRadius: 20, border: "8px solid blue" },
      type: "output",
      data: { label: "FLOW16" },
      position: { x: 840, y: 400 },
    },
    {
      id: "17",
      style: { width: 80, borderRadius: 20, border: "8px solid blue" },
      type: "output",
      data: { label: "FLOW17" },
      position: { x: 720, y: 570 },
    },
    {
      id: "18",
      sourcePosition: "right",
      targetPosition: "left",
      style: { width: 80, borderRadius: 20, border: "8px solid blue" },
      type: "output",
      data: { label: "Valve18" },
      position: { x: 840, y: 530 },
    },
  ];

  const edges = [
    {
      id: "e2-3",
      source: "2",
      target: "3",
      label: "Drepong",
      type: "smoothstep",
      animated: true,
    },
    {
      id: "e2-4",
      source: "2",
      target: "4",
      label: "Tshangkhar",
      type: "smoothstep",
      animated: true,
    },
    {
      id: "e3-4",
      source: "3",
      target: "4",
      label: "",
      type: "smoothstep",
      animated: true,
    },
    {
      id: "e4-5",
      source: "4",
      target: "6",
      type: "smoothstep",
      label: "flow2",
      animated: true,
    },
    {
      id: "e4-6",
      source: "4",
      target: "7",
      type: "smoothstep",
      label: "flow3",
      animated: true,
    },
    
   
    // {
    //   id: "e5-7",
    //   source: "5",
    //   target: "7",
    //   label: "flow5",
    //   type: "smoothstep",
    //   animated: true,
    // },
    {
      id: "e4-8",
      source: "4",
      target: "8",
      label: "flow6",
      animated: true,
    },
    {
      id: "e8-9",
      source: "8",
      target: "9",
      label: "flow7",
      animated: true,
    },
    {
      id: "e8-10",
      source: "8",
      target: "10",
      type: "smoothstep",
      label: "flow8",
      animated: true,
    },
    {
      id: "e9-11",
      source: "9",
      target: "11",
      label: "flow9",
      animated: true,
    },
    {
      id: "e9-12",
      source: "9",
      target: "12",
      type: "smoothstep",
      label: "flow10",
      animated: true,
    },
    {
      id: "e11-13",
      source: "11",
      target: "13",
      label: "flow11",
      animated: true,
    },
    {
      id: "e11-14",
      source: "11",
      target: "14",
      label: "flow12",
      animated: true,
    },
    {
      id: "e13-15",
      source: "13",
      target: "15",
      label: "flow13",
      animated: true,
    },
    {
      id: "e13-16",
      source: "13",
      target: "16",
      label: "flow14",
      animated: true,
    },
    {
      id: "e15-17",
      source: "15",
      target: "17",
      label: "flow15",
      animated: true,
    },
    {
      id: "e15-18",
      source: "15",
      target: "18",
      label: "flow16",
      animated: true,
    },
    
  ];

  return (
    <div style={{ height: 500 }}>
      <ReactFlow nodes={nodes} edges={edges} fitView zoomOnScroll={false}>
        <Controls />
      </ReactFlow>
    </div>
  );
}
