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
      data: { label: "Reservior 1" },
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
      data: { label: "Reservior 2" },
      position: { x: 200, y: 25 },
    },

    {
      id: "3",
      style: { width: 80, borderRadius: 20, border: "8px solid green" },
      data: { label: "FLOW" },
      position: { x: 210, y: 125 },
    },

    {
      id: "4",
      style: { width: 80, borderRadius: 20, border: "8px solid green" },
      data: { label: "FLOW4" },
      position: { x: 210, y: 240 },
    },
    {
      id: "5",
      sourcePosition: "right",
      targetPosition: "left",
      style: { width: 80, borderRadius: 20, border: "8px solid green" },
      data: { label: "FLOW5" },
      position: { x: 300, y: 400 },
    },
    {
      id: "6",
      sourcePosition: "right",
      targetPosition: "left",
      style: { width: 80, borderRadius: 20, border: "8px solid green" },
      type: "output",
      data: { label: "FLOW" },
      position: { x: 475, y: 350 },
    },
    {
      id: "7",
      sourcePosition: "right",
      targetPosition: "left",
      style: { width: 80, borderRadius: 20, border: "8px solid green" },
      type: "output",
      data: { label: "FLOW" },
      position: { x: 475, y: 450 },
    },
    {
      id: "8",
      sourcePosition: "right",
      targetPosition: "left",
      style: { width: 80, borderRadius: 20, border: "8px solid green" },
      data: { label: "FLOW8" },
      position: { x: 400, y: 260 },
    },
    {
      id: "9",
      sourcePosition: "right",
      targetPosition: "left",
      style: { width: 80, borderRadius: 20, border: "8px solid green" },
      data: { label: "FLOW9" },
      position: { x: 550, y: 260 },
    },
    {
      id: "10",
      sourcePosition: "right",
      targetPosition: "left",
      style: { width: 80, borderRadius: 20, border: "8px solid green" },
      type: "output",
      data: { label: "FLOW10" },
      position: { x: 480, y: 150 },
    },
    {
      id: "11",
      sourcePosition: "right",
      targetPosition: "left",
      style: { width: 80, borderRadius: 20, border: "8px solid green" },
      data: { label: "FLOW11" },
      position: { x: 675, y: 260 },
    },
    {
      id: "12",
      sourcePosition: "right",
      targetPosition: "left",
      style: { width: 80, borderRadius: 20, border: "8px solid green" },
      type: "output",
      data: { label: "FLOW12" },
      position: { x: 630, y: 150 },
    },
    {
      id: "13",
      style: { width: 80, borderRadius: 20, border: "8px solid green" },
      data: { label: "FLOW13" },
      position: { x: 720, y: 360 },
    },
    {
      id: "14",
      sourcePosition: "right",
      targetPosition: "left",
      style: { width: 80, borderRadius: 20, border: "8px solid green" },
      type: "output",
      data: { label: "FLOW14" },
      position: { x: 840, y: 260 },
    },
    {
      id: "15",
      style: { width: 80, borderRadius: 20, border: "8px solid green" },
      data: { label: "FLOW15" },
      position: { x: 720, y: 470 },
    },
    {
      id: "16",
      sourcePosition: "right",
      targetPosition: "left",
      style: { width: 80, borderRadius: 20, border: "8px solid green" },
      type: "output",
      data: { label: "FLOW16" },
      position: { x: 840, y: 400 },
    },
    {
      id: "17",
      style: { width: 80, borderRadius: 20, border: "8px solid green" },
      type: "output",
      data: { label: "FLOW17" },
      position: { x: 720, y: 570 },
    },
    {
      id: "18",
      sourcePosition: "right",
      targetPosition: "left",
      style: { width: 80, borderRadius: 20, border: "8px solid green" },
      type: "output",
      data: { label: "FLOW18" },
      position: { x: 840, y: 530 },
    },
  ];

  const edges = [
    {
      id: "e2-3",
      source: "2",
      target: "3",
      label: "hoho",
      type: "smoothstep",
      animated: true,
    },
    {
      id: "e3-4",
      source: "3",
      target: "4",
      label: "hoho",
      type: "smoothstep",
      animated: true,
    },
    {
      id: "e4-5",
      source: "4",
      target: "5",
      type: "smoothstep",
      label: "hoho",
      animated: true,
    },
    {
      id: "e5-6",
      source: "5",
      target: "6",
      label: "hoho",
      type: "smoothstep",
      animated: true,
    },
    {
      id: "e5-7",
      source: "5",
      target: "7",
      label: "hoho",
      type: "smoothstep",
      animated: true,
    },
    {
      id: "e4-8",
      source: "4",
      target: "8",
      label: "hoho",
      animated: true,
    },
    {
      id: "e8-9",
      source: "8",
      target: "9",
      label: "hoho",
      animated: true,
    },
    {
      id: "e8-10",
      source: "8",
      target: "10",
      type: "smoothstep",
      label: "hoho",
      animated: true,
    },
    {
      id: "e9-11",
      source: "9",
      target: "11",
      label: "hoho",
      animated: true,
    },
    {
      id: "e9-12",
      source: "9",
      target: "12",
      type: "smoothstep",
      label: "hoho",
      animated: true,
    },
    {
      id: "e11-13",
      source: "11",
      target: "13",
      label: "hoho",
      animated: true,
    },
    {
      id: "e11-14",
      source: "11",
      target: "14",
      label: "hoho",
      animated: true,
    },
    {
      id: "e13-15",
      source: "13",
      target: "15",
      label: "hoho",
      animated: true,
    },
    {
      id: "e13-16",
      source: "13",
      target: "16",
      label: "hoho",
      animated: true,
    },
    {
      id: "e15-17",
      source: "15",
      target: "17",
      label: "hoho",
      animated: true,
    },
    {
      id: "e15-18",
      source: "15",
      target: "18",
      label: "hoho",
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
