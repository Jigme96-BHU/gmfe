import React from "react";
import { useRouter } from "next/router";
import { Button, Card, Form, Input, message } from "antd";

export default function Login() {
  const Router = useRouter();
  const handleSubmit = async (props) => {
    try {
      let url = "/api/auth/login";
      let response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(props),
      });
      response = await response.json();
      if (response.status) {
        Router.push("/");
      } else {
        message.error(response.message);
      }
    } catch (error) {}
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
      }}
    >
      <Card style={{borderRadius: 20}}>

        <div>
          <center>
            <p style={{ fontSize: 25, fontFamily: "cursive" }}>Login</p>
          </center>
        </div>
        <Form
          onFinish={handleSubmit}
          layout="horizontal"
          validateMessages={{ required: "${label} is Required" }}
        >
          <Form.Item label="Email" name="email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
