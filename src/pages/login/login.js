import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";

import "./login.less";
import logo from "./images/timg.jpg";
export default class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    alert("登录成功！");
  };
  render() {
    return (
      <div className="login">
        <div className="login_header">
          <img src={logo} alt="logo" />
          <h1>React項目：後臺管理系統</h1>
        </div>
        <div className="login_content">
          <h1>用戶登錄</h1>

          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="用户名"
              />
              ,
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="密码"
              />
              ,
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
