import React from "react";
import BreadCrumbTemplete from "../../components/breadcrumb/BreadCrumbTemplete";
import "./style.css";
import { Card, Tabs, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import StatusList from "./StatusList/StatusList";
import TableList from "./Table/Table";
import StyledTab from "@/components/StyledTab/StyledTab";
import { useTranslation } from "react-i18next";

export default function Staff() {
  const { TabPane } = StyledTab;
  const { t } = useTranslation();

  const routes = [
    {
      name: t("staff"),
      route: "/",
      link: true,
    },
    {
      name: t("candidates"),
      link: true,
      route: "/",
    },
  ];
  return (
    <div>
      <BreadCrumbTemplete routes={routes} />

      <div className="staff">
        <Card>
          <StyledTab defaultActiveKey="1">
            <TabPane tab="Кандидаты" key="1">
              <StatusList />
              <TableList />
            </TabPane>
            <TabPane tab="Штат" key="2">
              <TableList />
            </TabPane>
            <TabPane tab="Уволенные" key="3">
              <TableList />
            </TabPane>
            <TabPane tab="Резерв" key="4">
              Резерв
            </TabPane>
            <TabPane tab="Негоден" key="5">
              Негоден
            </TabPane>
          </StyledTab>
        </Card>
      </div>
    </div>
  );
}
