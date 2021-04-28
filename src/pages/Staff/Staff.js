import React from "react";
import BreadCrumbTemplete from "../../components/breadcrumb/BreadCrumbTemplete";
import "./style.css";
import { Card, Tabs, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import StatusList from "./StatusList/StatusList";
import TableList from "./Table/Table";

const ExtraButton = function () {
  return (
    <Button type="primary" icon={<DownloadOutlined />}>
      Download
    </Button>
  );
};

export default function Staff() {
  const { TabPane } = Tabs;
  const routes = [
    {
      name: "Сотрудники",
      route: "/",
      link: true,
    },
    {
      name: "Кандидаты",
      link: true,
      route: "/",
    },
  ];
  return (
    <div>
      {/* <BreadCrumbTemplete routes={routes}/> */}
      <div className="staff">
        <Card title={<BreadCrumbTemplete routes={routes} bordered={true} />}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Кандидаты" key="1">
              <StatusList />
              <TableList />
            </TabPane>
            <TabPane tab="Штат" key="2">
              Штат
            </TabPane>
            <TabPane tab="Уволенные" key="3">
              Уволенные
            </TabPane>
            <TabPane tab="Резерв" key="4">
              Резерв
            </TabPane>
            <TabPane tab="Негоден" key="5">
              Негоден
            </TabPane>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
