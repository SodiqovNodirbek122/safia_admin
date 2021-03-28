import React from "react"
import { useTranslation } from "react-i18next";
import { Row, Col, Form, Input, Button, Select } from 'antd';

export default function Header() {
    const { t } = useTranslation()

    return (
        <Row style={{backgroundColor: "#fff", padding: 20}}>
            <Col span={24}>
                <Form
                    layout="horizontal"
                    name="geofence-create-form"
                    style={{display: 'flex', justifyContent: 'space-between'}}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                >
                    <Form.Item style={{flex: 'auto', margin: 0}} name="gender">
                        <Select
                            placeholder={t("select.status")}
                            // onChange={onGenderChange}
                            allowClear
                        >
                            <Select.Option value="option1">option1</Select.Option>
                            <Select.Option value="option2">option2</Select.Option>
                            <Select.Option value="option3">option3</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item style={{flex: 'auto', margin: 0, marginLeft: 16}} name="gender">
                        <Select
                            placeholder={t("select.status")}
                            // onChange={onGenderChange}
                            allowClear
                        >
                            <Select.Option value="option1">option1</Select.Option>
                            <Select.Option value="option2">option2</Select.Option>
                            <Select.Option value="option3">option3</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item style={{flex: 'auto', margin: 0, marginLeft: 16}} name="gender">
                        <Select
                            placeholder={t("select.status")}
                            // onChange={onGenderChange}
                            allowClear
                        >
                            <Select.Option value="option1">option1</Select.Option>
                            <Select.Option value="option2">option2</Select.Option>
                            <Select.Option value="option3">option3</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item style={{ margin: 0, marginLeft: 16}}>
                        <Input.Group compact>
                            <Input 
                                className="site-input-left"
                                // style={{ width: 100, textAlign: 'center' }} 
                                placeholder={t("beginning.date")} 
                            />
                            <Input
                                className="site-input-split"
                                // style={{
                                //     width: 30,
                                //     borderLeft: 0,
                                //     borderRight: 0,
                                //     backgroundColor: "#fff",
                                //     pointerEvents: 'none',
                                // }}
                                placeholder="~"
                                disabled
                            />
                            <Input
                                className="site-input-right"
                                // style={{
                                //     width: 100,
                                //     // borderLeft: 0,
                                //     textAlign: 'center',
                                // }}
                                placeholder={t("beginning.date")}
                            />
                        </Input.Group>
                    </Form.Item>
                    <Button type="primary" style={{marginLeft: 32}}>
                        {t("create")}
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}