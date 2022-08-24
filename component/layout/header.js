import React, { useState } from "react";
import { Card, Col, Layout, Menu, Row } from "antd";
import {
  AlertFilled,
  ApartmentOutlined,
  DashboardOutlined,
  ExperimentOutlined,
  HomeFilled,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

//logos
import logo from "../../public/images/dhilogo.png";
import desuung from "../../public/images/desu-2.png";
import rgob from "../../public/images/rgob.png";
import { useAppContent } from "../../context/content";

const { Content, Sider } = Layout;

export default function Header({ children }) {
  const { title, sliderCollapsed, setSliderCollapsed } = useAppContent();

  const Menu_List = [
    {
      key: 1,
      label: <Link href="/">Home</Link>,
      icon: <HomeFilled />,
    },
    {
      key: 2,
      label: <Link href="/">SCADA Display</Link>,
      icon: <ApartmentOutlined />,
    },
    {
      key: 3,
      label: <Link href="/valveController">Valve Controller</Link>,
      icon: <DashboardOutlined />,
    },
    {
      key: 4,
      label: <Link href="/waterFlow">Water Flow Display</Link>,
      icon: <ExperimentOutlined />,
    },
    {
      key: 5,
      label: <Link href="/alarmsEvents">Alarms and Events</Link>,
      icon: <AlertFilled />,
    },
  ];

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        width={270}
        collapsible
        collapsed={sliderCollapsed}
        onCollapse={(value) => setSliderCollapsed(value)}
      >
        {!sliderCollapsed ? (
          <div
            style={{
              padding: "10px 30px 10px 30px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            <Row justify="space-evenly">
              <Col>
                <br />
                <Image src={logo} height={70} width={100} alt="DHI Logo" />
              </Col>
              <Col>
                <br />
                <p style={{ color: "white" }}>
                  DE-SUUNG NATIONAL SERVICE WATER PROJECT
                </p>
              </Col>
              <Col>
                <p style={{ fontSize: "11px", color: "gray" }}>
                  Gyelpozshing Integrated Water Supply Pilot Project
                </p>
              </Col>
            </Row>
          </div>
        ) : (
          <Image src={logo} height={70} width={100} alt="DHI Logo" />
        )}
        <Menu theme="dark" mode="inline" items={Menu_List} />
        <br />
        {!sliderCollapsed ? (
          <div
            style={{
              color: "white",
              fontWeight: "bold",
              textAlign: "left",
              paddingLeft: 12,
            }}
          >
            <span style={{ fontSize: 17 }}>Contact Details</span>
            <br />
            <span style={{ color: "gray" }}>Random@gmail.com</span>
            <br />
            <span style={{ color: "gray" }}>12345678</span>
          </div>
        ) : null}
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "16px 16px 16px 16px",
          }}
        >
          <Card
            style={{
              borderRadius: "30px",
              height: "100px",
              marginBottom: "10px",
            }}
          >
            <Row justify="space-between">
              <Col>
                <Image
                  src={desuung}
                  height={80}
                  width={100}
                  alt="Desuung Logo"
                />
              </Col>
              <Col>
                <p style={{ fontWeight: "bold", fontSize: 27 }}>{title}</p>
              </Col>
              <Col>
                <Image src={rgob} height={80} width={100} alt="RGOB Logo" />
              </Col>
            </Row>
          </Card>
          <main>{children}</main>
        </Content>
      </Layout>
    </Layout>
  );
}