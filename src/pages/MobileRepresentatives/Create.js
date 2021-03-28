import React from "react"
import { useTranslation } from "react-i18next";
import BreadCrumbTemplete from "../../components/breadcrumb/BreadCrumbTemplete"
import { SearchOutlined, PictureFilled } from '@ant-design/icons';
import { Row, Col, Divider, Form, Input, Button, Upload } from 'antd';

export function Create() {
    const { t } = useTranslation() 

    const handleCancel = () => {
        console.log("this is handle cancel")
    }

    const handleSave = () => {
        console.log("this is handle save")
    }

    return (
        <div className="create">
            <Row>
                <Col span={10} offset={2}>
                    <Divider orientation="left" plain>
                        {t("mobile.rep.divider.title")}
                    </Divider>
                </Col>
            </Row>
            <Row>
                <Col span={10} offset={2}>
                    <Form
                        layout="vertical"
                        name="mobile-representatives-form"
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                    >
                        <Form.Item label={t("fio")}>
                            <Input />
                        </Form.Item>
                        <Form.Item label={t("address")}>
                            <Input />
                        </Form.Item>
                        <div>
                            <Form.Item
                                name="year"
                                label={t("birth.date")}
                                // rules={[{ required: true }]}
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="month"
                                label={t("change")}
                                // rules={[{ required: true }]}
                                style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginLeft: 16 }}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                        <Form.Item label={t("telephone.number")}>
                            <Input />
                        </Form.Item>
                        <Form.Item label={t("select.geofence")}>
                            <Input
                                suffix={
                                    <SearchOutlined />
                                }
                            />
                        </Form.Item>
                        <div style={{marginBottom: "10rem"}}>
                            <Button onClick={handleCancel} type="default">
                                {t("cancel")}
                            </Button>
                            <Button onClick={handleSave} type="primary" style={{marginLeft: 8}}>
                                {t("save")}
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col span={11} offset={1}>
                    <p className="select-img-label">
                        {t("select.image.label")}
                    </p>
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        // showUploadList={false}
                        // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        // beforeUpload={beforeUpload}
                        // onChange={this.handleChange}
                    >
                        <div style={{color: "#999"}}>
                            <PictureFilled style={{fontSize: 40}} />
                            <p>{t("select.image")}</p>
                        </div>
                    </Upload>
                </Col>
            </Row>
        </div>
    )
}