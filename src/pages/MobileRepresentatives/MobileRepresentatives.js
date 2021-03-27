import "./style.css"
import React from "react"
import { useTranslation } from "react-i18next";
import BreadCrumbTemplete from "../../components/breadcrumb/BreadCrumbTemplete"
import { SearchOutlined, PictureFilled } from '@ant-design/icons';
import { Row, Col, Divider, Form, Input, Button, Upload, message  } from 'antd';


export default function MobileRepresentatives() {
    const { t, i18n } = useTranslation() 

    const routes = [
        {
            name: 'Home',
            route: '/',
            link: true
        },
        {
            name: 'mobile.representatives',
            link: false,
            route: '/mobile-representatives'
        },
        {
            name: 'form',
            link: false,
            // route: '/about'
        }
    ]
    
    return (
        <div>
            <BreadCrumbTemplete routes={routes} />
            
            <div className="mobile-representatives">
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
                            // {...layout}
                            layout="vertical"
                            name="mobile-representatives-form"
                            // initialValues={{ remember: true }}
                            // onFinish={onFinish}
                            // onFinishFailed={onFinishFailed}
                        >
                            <Form.Item label={t("fio")}>
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item label={t("address")}>
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <div>
                                <Form.Item
                                    name="year"
                                    label={t("birth.date")}
                                    // rules={[{ required: true }]}
                                    style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                                >
                                    <Input placeholder="Input birth year" />
                                </Form.Item>
                                <Form.Item
                                    name="month"
                                    label={t("change")}
                                    // rules={[{ required: true }]}
                                    style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginLeft: 16 }}
                                >
                                    <Input placeholder="Input birth month" />
                                </Form.Item>
                            </div>
                            <Form.Item label={t("telephone.number")}>
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item label={t("select.geofence")}>
                                <Input 
                                    placeholder="input placeholder" 
                                    suffix={
                                        <SearchOutlined />
                                    }
                                />
                            </Form.Item>
                            <div style={{marginBottom: "10rem"}}>
                                <Button type="default">
                                    {t("cancel")}
                                </Button>
                                <Button type="primary" style={{marginLeft: 8}}>
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
        </div>
    )
}