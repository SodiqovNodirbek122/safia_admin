import "./style.css"
import React from "react"
import Basic from "@/constants/basic";
import { YMaps, Map } from 'react-yandex-maps';
import { useTranslation } from "react-i18next";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Row, Col, Card, Skeleton, Form, Input, Button, Upload, Select, Typography, Pagination } from 'antd';

export function Content() {
    const { t } = useTranslation()
    const { Text } = Typography
    const { SECONDARY_COLOR } = Basic

    return (
        <Row justify="center" style={{marginTop: 36}} className="content">
            <Col span={23}>
                <Row justify="space-between">
                    {arr.map((v, index) => (
                        <Col xl={6} lg={8} md={12} sm={24} style={{padding: 10}} key={index}>
                            <Card>
                                <div className="map-content">
                                    <YMaps>
                                        <Map 
                                            width="100%" 
                                            height="100%" 
                                            defaultState={{ center: [55.751574, 37.573856], zoom: 9 }} 
                                        />
                                    </YMaps>
                                </div>
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
                <Row justify="end">
                    <Col style={{padding: 10}}>
                        <Pagination
                            showSizeChanger
                            // onShowSizeChange={onShowSizeChange}
                            defaultCurrent={3}
                            total={500}
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

const arr = ["", "", "", "", "", "", "", "", "", "", "", ""]