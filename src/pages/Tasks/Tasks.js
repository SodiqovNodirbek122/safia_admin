import React, { useState } from "react";
import BreadCrumbTemplete from "../../components/breadcrumb/BreadCrumbTemplete";
import "./style.less";
import { Card, Row, Col, Button, Input, Dropdown, Menu } from "antd";
import { useTranslation } from "react-i18next";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import Board, { moveCard } from "@lourenci/react-kanban";
import TaskModal from "./TaskModal";

export default function Tasks() {
  const { t } = useTranslation();
  const [controlledBoard, setBoard] = useState(board);

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
  const board = {
    columns: [
      {
        id: 1,
        title: t("new"),
        cards: [
          {
            id: 1,
            // title: "Card title 1",
            description: "Card content",
          },
          {
            id: 2,
            title: "Card title 2",
            description: "Card content",
          },
          {
            id: 3,
            title: "Card title 3",
            description: "Card content",
          },
        ],
      },
      {
        id: 2,
        title: t("invited"),
        cards: [
          {
            id: 9,
            title: "Card title 9",
            description: "Card content",
          },
        ],
      },
      {
        id: 3,
        title: t("interview"),
        cards: [
          {
            id: 10,
            title: "Card title 10",
            description: "Card content",
          },
          {
            id: 11,
            title: "Card title 11",
            description: "Card content",
          },
        ],
      },
      {
        id: 4,
        title: "Production",
        cards: [
          {
            id: 12,
            title: "Card title 12",
            description: "Card content",
          },
          {
            id: 13,
            title: "Card title 13",
            description: "Card content",
          },
        ],
      },
    ],
  };

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
        <Board
          Ca
          allowRemoveLane
          allowRenameColumn
          allowRemoveCard
          onLaneRemove={console.log}
          onCardRemove={console.log}
          onLaneRename={console.log}
          initialBoard={board}
          allowAddCard={{ on: "top" }}
          onNewCardConfirm={(draftCard) => ({
            id: new Date().getTime(),
            ...draftCard,
          })}
          onCardNew={console.log}
        />
      </div>
      <div className="task-modal">
        <TaskModal/>
      </div>
    </div>
  );
}
