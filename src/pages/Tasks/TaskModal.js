import React, { useState } from "react";
import { Button, Modal, Dropdown, Menu, Table } from "antd";
import { useTranslation } from "react-i18next";
import StyledButton from "@/components/StyledButton/StyledButton";
import StyledTag from "@/components/StyledTag/StyledTag";
import { useHistory, Link } from "react-router-dom";
import {
  CalendarOutlined,
  DownOutlined,
  PlusOutlined,
  DeleteFilled,
} from "@ant-design/icons";
import "./style.less";
import img from "@/assets/images/user.png";
import tableImg from "@/assets/images/user.png";

export default function TaskModal({visible, setVisible}) {
  // console.log(props);
  const { t } = useTranslation();
  // const [isModalVisible, setIsModalVisible] = useState(false);
  const menu = (
    <Menu>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
  const columns = [
    {
      title: t("fullname"),
      dataIndex: "fullname",
      key: "fullname",
      render: (text) => <a>{text}</a>,
    },
    {
      title: t("phone.number"),
      dataIndex: "phone",
      key: "phone",
      render: (text) => <a>{text}</a>,
      // render: (text, record) => (
      //   <div>
      //     { moment(text).format('YYYY-MM-DD HH:mm') }
      //   </div>
      // )
    },
    {
      title: "Должность",
      dataIndex: "position",
      key: "position",
    },
    {
      title: t("branches"),
      dataIndex: "branches",
      key: "branches",
    },
    {
      title: t("status"),
      key: "status",
      dataIndex: "status",
      align: "center",
      render: (status) => (
        <StyledTag color={status ? "success" : "danger"}>
          {t(status ? "active" : "inactive")}
        </StyledTag>
      ),
    },
    {
      title: t("action"),
      key: "action",
      align: "center",
      render: (text, record, index) => (
        <div>
          <StyledButton
            color="danger"
            icon={DeleteFilled}
            title={t("delete")}
            // onClick={() => editItem(text, record)}
            tooltip={t("delete")}
          />
          {/* <Popconfirm
            title={t('do.you.really.want.to.delete')}
            visible={visible === index}
            onConfirm={() => deleteItem(text)}
            okButtonProps={{ loading: loading }}
            onCancel={() => setVisible(null)}
            cancelText={t('cancel')}
            okText={t('yes')}
          >
            <StyledButton
              color='danger'
              icon={DeleteFilled}
              onClick={() => setVisible(index)}
              tooltip={t("delete")}
            />
          </Popconfirm> */}
        </div>
      ),
    },
  ];

  const dataSource = [
    {
      key: "1",
      fullname: <div><img alt={"Logo"} src={tableImg} /> <span>Сафаров Комил</span></div>,
      phone: "93 391 17 94",
      position: "Управляющий",
      branches: "Изза",
      status: false,
    },
  ];

  // const showModal = () => {
  //   console.log(props.show);
  //   setIsModalVisible(props.show);
  //   setIsModalVisible(true)
  // }


  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="task-modal">
      <Modal
        title={t("internship") + " на 21.09"}
        visible={visible}
        onCancel={() => setVisible(false)}
        width={"80%"}
      >
        <div className="modal-header">
          <div className="users-img">
            <div className="user-img">
              <img alt={"Logo"} src={img} />
            </div>
            <div className="user-img">
              <img alt={"Logo"} src={img} />
            </div>
            <div className="user-img">
              <PlusOutlined />
            </div>
          </div>
          <div className="modal-header-right">
            <CalendarOutlined />
            <p>Фев 24 - Март 10</p>
            <Dropdown overlay={menu}>
              <Button>
                {t("interviews")}
                <DownOutlined />
              </Button>
            </Dropdown>
          </div>
        </div>
        <div className="description">
          <h3>{t("description")}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel purus sit amet luctus venenatis, lectus magna fringilla
            urna, porttitor
          </p>
        </div>
        <div className="table">
          <div className="table-header">
            <h1>{t("candidates")}</h1>
            <StyledButton
              icon={PlusOutlined}
              title={t("add") + " " + t("candidates")}
            />
          </div>
          <Table
            bordered
            columns={columns}
            dataSource={dataSource}
            // rowKey={(record) => record.id}
            // scroll={{ x: 100 }}
          />
        </div>
      </Modal>
    </div>
  );
}
