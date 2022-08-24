import React, { useState } from "react";
import { Column } from "@ant-design/plots";
import { Select } from "antd";
export default function Tank({ data }) {
  const config = {
    data,
    xField: "level_name",
    yField: "level",
    label: {
      position: "bottom",
      // 'top', 'bottom', 'middle',
      style: {
        fill: "black",
        opacity: 0.8,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return (
    <div>
      <Column height={150} width={200} {...config} />
    </div>
  );
}
