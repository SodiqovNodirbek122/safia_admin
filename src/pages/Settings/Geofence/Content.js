import "./style.css"
import React from "react"
import Basic from "@/constants/basic";
import { useTranslation } from "react-i18next";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Row, Col, Card, Form, Input, Button, Upload, Select, Typography } from 'antd';

export default function Content() {
    const { t } = useTranslation()
    const { Text } = Typography
    const { SECONDARY_COLOR } = Basic

    return (
        <Row justify="center" style={{marginTop: 36}}>
            <Col span={23}>
                <Row justify="space-between">
                    {arr.map((v, i) => (
                        <Col xl={6} lg={8} md={12} sm={24} style={{padding: 10}} key={i}>
                            <Card>
                                <img width="100%" src="https://cdn.mapsinternational.co.uk/pub/media/catalog/product/cache/9408c2af9b2aa1f0e92b23ce5de2be46/w/o/world-wall-map-political-without-flags_wm00001_h.jpg" />
                                <div className="card-footer">
                                    <div className="card-footer-text">
                                        <Text style={{fontSize: 12}} strong>Ant Design</Text>
                                        <Text style={{fontSize: 12}}>Ant Design</Text>
                                    </div>
                                    <div>
                                        <Button 
                                            size="small" 
                                            type="text"
                                            icon={<EditOutlined style={{color: "#fff"}} />} 
                                            style={{backgroundColor: SECONDARY_COLOR}}
                                        />
                                        <Button 
                                            size="small" 
                                            type="primary" 
                                            icon={<DeleteOutlined />} 
                                            style={{marginLeft: 5}} 
                                        />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    )
}

const arr = ["", "", "", "", "", "", "", "", "", "", "", ""]