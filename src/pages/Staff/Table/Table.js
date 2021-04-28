import React from "react";
import { useState } from "react";
import './style.css'
import {
  Table,
  Row,
  Col,
  Input,
  DatePicker,
  Dropdown,
  Button,
  Menu,
} from "antd";
import { useTranslation } from "react-i18next";
import { DownOutlined, FilterFilled,DownloadOutlined } from "@ant-design/icons";

export default function TableList() {
  const { t } = useTranslation();
  const [filteredInfo, SetFilteredInfo] = useState({});
  const [sortedInfo, SetSortedInfo] = useState({});
  const data = [
    {
      key: "1",
      fullname: "John Brown",
      vacancy: "vacancy",
      branches: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      fullname: "Jim Green",
      vacancy: "teacher ",
      branches: "London No. 1 Lake Park",
    },
    {
      key: "3",
      fullname: "Joe Black",
      vacancy: "best vacancy",
      branches: "Sidney No. 1 Lake Park",
    },
    {
      key: "4",
      fullname: "Jim Red",
      vacancy: "best teacher",
      branches: "London No. 2 Lake Park",
    },
  ];
  const columns = [
    {
      title: t("fullname"),
      dataIndex: "fullname",
      key: "fullname",
      filters: [
        { text: "Joe", value: "Joe" },
        { text: "Jim", value: "Jim" },
      ],
      filteredValue: filteredInfo.fullname || null,
      onFilter: (value, record) => record.fullname.includes(value),
      ellipsis: true,
    },
    {
      title: t("vacancy"),
      dataIndex: "vacancy",
      key: "vacancy",
      filters: [
        { text: "vacancy", value: "vacancy" },
        { text: "teacher", value: "Jiteacherm" },
      ],
      filteredValue: filteredInfo.vacancy || null,
      onFilter: (value, record) => record.vacancy.includes(value),
      ellipsis: true,
    },
    {
      title: t("branches"),
      dataIndex: "branches",
      key: "branches",
      filters: [
        { text: "London", value: "London" },
        { text: "New York", value: "New York" },
      ],
      filteredValue: filteredInfo.branches || null,
      onFilter: (value, record) => record.branches.includes(value),
      // sorter: (a, b) => a.address.length - b.address.length,
      // sortOrder: sortedInfo.columnKey === "address" && sortedInfo.order,
      ellipsis: false,
    },
  ];
  const menu = (
    <Menu>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    SetFilteredInfo(filters);
    SetSortedInfo(sorter);
  };
  const { Search } = Input;

  return (
    <div className="staff-table">
      <Row>
        <Col style={{ padding: "12px" }} span={11}>
          <Input placeholder={t("search")+t("fullname")+', '+t("nomer.phone")+', '+t('vacancy')} />
        </Col>
        <Col style={{ padding: "12px" }} span={4}>
          <DatePicker />
        </Col>
        <Col style={{ padding: "12px" }} span={5} offset={1}>
          <Dropdown overlay={menu}>
            <Button block>
              <FilterFilled />
              {t("expand.filter")}
              <DownOutlined />
            </Button>
          </Dropdown>
        </Col>
        <Col style={{ padding: "12px" }} span={2} offset={1} type="primary" >
          <Button block type="primary" icon={<DownloadOutlined />}  />
        </Col>
        <Col style={{ padding: "12px" }} span={24}>
          <Table columns={columns} dataSource={data} onChange={handleChange} />
        </Col>
      </Row>
    </div>
  );
}
