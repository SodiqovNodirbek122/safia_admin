import "./style.css"
import React from "react"
import Basic from "@/constants/basic";
import { useTranslation } from "react-i18next";
import { YMaps, Map, ZoomControl } from 'react-yandex-maps';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Row, Col, Card, Skeleton, Form, Input, Button, Upload, Select, Typography, Pagination } from 'antd';

export function CreateMap({save}) {
    const { t } = useTranslation()

    return (
        <Row style={{backgroundColor: "#fff"}} className="create-map">
            <Col span={24}>
                <div className="map-content">
                    <YMaps>
                        <Map 
                            width="100%" 
                            height="100%" 
                            defaultState={{ center: [55.751574, 37.573856], zoom: 9 }} 
                        >
                            {/* <ZoomControl options={{ float: 'right' }} /> */}
                        </Map>
                    </YMaps>
                </div>
                <Row justify="end" style={{margin: "17px 0"}}>
                    <Col>
                        <Button onClick={save} type="default">
                            {t("cancel")}
                        </Button>
                        <Button onClick={save} type="primary" style={{marginLeft: 8}}>
                            {t("save")}
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}