import React, { useState } from "react";
import BreadCrumbTemplete from "../../components/breadcrumb/BreadCrumbTemplete";
import "./style.less";
import { Card, Row, Col, Button, Input, Dropdown, Menu } from "antd";
import { useTranslation } from "react-i18next";
import { SearchOutlined, DownOutlined } from "@ant-design/icons"; 
import TaskModal from "./TaskModal";
import DragDrop from "./DragDrop/DragDrop";

export default function Tasks() {
  const { t } = useTranslation();

  const routes = [
    {
      name: t("tasks"),
      route: "/tasks",
      link: true,
    },
    {
      name: t("my.tasks"),
      route: "/tasks",
      link: true,
    },
  ];
  const menu = (
    <Menu>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <BreadCrumbTemplete routes={routes} />

      <div className="tasks">
        <Card title={t("recruiting")}>
          <Row>
            <Col span={8}>
              <Input prefix={<SearchOutlined />} placeholder={t("search")} />
            </Col>
            <Col span={4} offset={2}>
              <Dropdown overlay={menu}>
                <Button block>
                  {t("user")}
                  <DownOutlined />
                </Button>
              </Dropdown>
            </Col>
            <Col span={4} offset={1}>
              <Dropdown overlay={menu}>
                <Button block>
                  {t("branches")}
                  <DownOutlined />
                </Button>
              </Dropdown>
            </Col>
            <Col span={4} offset={1}>
              <Dropdown overlay={menu}>
                <Button block>
                  {t("position")}
                  <DownOutlined />
                </Button>
              </Dropdown>
            </Col>
          </Row>
        </Card>
      </div>
      <div className="board">
        <DragDrop/>
      </div>
    </div>
  );
}
