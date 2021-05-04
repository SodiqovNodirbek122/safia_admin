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
import { DownOutlined, FilterFilled,DownloadOutlined,SearchOutlined } from "@ant-design/icons";

export default function TableList() {
  const { t } = useTranslation();
  const [filteredInfo, SetFilteredInfo] = useState({});
  const data = [
    {
      key: "1",
      fullname: "Сафаров Комил ",
      vacancy: "Управляющий",
      branches: "Изза ",
      nomerPhone:'93 391 17 94',
      source:"Работа.уз",
      dateClosing:"04.04 - 01.02"
    },
    {
      key: "2",
      fullname: "Исаева Юлиа",
      vacancy: "Продавец ",
      branches: "Цум",
      nomerPhone:'99 011 18 72',
      source:"Телеграм",
      dateClosing:"04.04 - 01.02"
    },
    {
      key: "3",
      fullname: "Мирзаева Гуласал",
      vacancy: "Бариста",
      branches: "Ракат",
      nomerPhone:'90 349 55 24',
      source:"Коллдж",
      dateClosing:"04.04 - 01.02"
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
    },    
    {
      title: t("nomer.phone"),
      dataIndex: "nomerPhone",
      key: "nomerPhone",
      filters: [
        { text: "91", value: "91" },
        { text: "90", value: "90" },
      ],
      filteredValue: filteredInfo.nomerPhone || null,
      onFilter: (value, record) => record.nomerPhone.includes(value),
    },
    {
      title: t("source"),
      dataIndex: "source",
      key: "source",
      filters: [
        { text: "91", value: "91" },
        { text: "90", value: "90" },
      ],
      filteredValue: filteredInfo.source || null,
      onFilter: (value, record) => record.source.includes(value),
    },
    {
      title: t("date.closing"),
      dataIndex: "dateClosing",
      key: "dateClosing",
      filters: [
        { text: "04.04 - 01.02", value: "04.04 - 01.02" },
      ],
      filteredValue: filteredInfo.dateClosing || null,
      onFilter: (value, record) => record.dateClosing.includes(value),
    },
  ];
  const menu = (
    <Menu>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  const handleChange = (pagination, filters) => {
    console.log("Various parameters", pagination, filters);
    SetFilteredInfo(filters);
  };
  const { Search } = Input;

  return (
    <div className="staff-table">
      <Row>
        <Col style={{ padding: "12px" }} span={11}>
          <Input prefix={<SearchOutlined />} placeholder={t("search")+t("fullname")+', '+t("nomer.phone")+', '+t('vacancy')} />
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
          <Table bordered columns={columns} dataSource={data} onChange={handleChange} />
        </Col>
      </Row>
    </div>
  );
}
