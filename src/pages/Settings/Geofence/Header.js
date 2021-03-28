import React from "react"
import { useTranslation } from "react-i18next";
import { Row, Col, Form, Input, Button, Select } from 'antd';

export function Header({create}) {
    const { t } = useTranslation()

    const handleCreate = () => {
        create()
    }

    return (
        <Row style={{backgroundColor: "#fff"}} className="header">
            <Col span={24}>
                <Form
                    layout="horizontal"
                    name="geofence-create-form"
                    className="header-form"
                    style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                >
                    <Form.Item className="header-input" name="gender">
                        <Select
                            allowClear
                            placeholder={t("select.status")}
                            // onChange={onGenderChange}
                        >
                            <Select.Option value="option1">option1</Select.Option>
                            <Select.Option value="option2">option2</Select.Option>
                            <Select.Option value="option3">option3</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item className="header-input" name="gender">
                        <Select
                            allowClear
                            placeholder={t("select.status")}
                            // onChange={onGenderChange}
                        >
                            <Select.Option value="option1">option1</Select.Option>
                            <Select.Option value="option2">option2</Select.Option>
                            <Select.Option value="option3">option3</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item className="header-input" name="gender">
                        <Select
                            allowClear
                            placeholder={t("select.status")}
                            // onChange={onGenderChange}
                        >
                            <Select.Option value="option1">option1</Select.Option>
                            <Select.Option value="option2">option2</Select.Option>
                            <Select.Option value="option3">option3</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item className="header-input">
                        <Input.Group compact>
                            <Input 
                                className="site-input-left"
                                placeholder={t("beginning.date")} 
                                // style={{ width: 100, textAlign: 'center' }} 
                            />
                            <Input
                                disabled
                                placeholder="~"
                                className="site-input-split"
                                // style={{
                                //     width: 30,
                                //     borderLeft: 0,
                                //     borderRight: 0,
                                //     backgroundColor: "#fff",
                                //     pointerEvents: 'none',
                                // }}
                            />
                            <Input
                                className="site-input-right"
                                placeholder={t("beginning.date")}
                                // style={{
                                //     width: 100,
                                //     // borderLeft: 0,
                                //     textAlign: 'center',
                                // }}
                            />
                        </Input.Group>
                    </Form.Item>
                    <Button type="primary" style={{margin: 20}} onClick={handleCreate}>
                        {t("create")}
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}