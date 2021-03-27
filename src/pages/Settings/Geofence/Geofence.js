import "./style.css"
import React from "react"
import Header from "./Header"
import Content from "./Content"
import { useTranslation } from "react-i18next";
import BreadCrumbTemplete from "../../../components/breadcrumb/BreadCrumbTemplete"
import { SearchOutlined, PictureFilled } from '@ant-design/icons';
import { Row, Col, Divider, Form, Input, Button, Upload, Select } from 'antd';

export default function Orders() {
    const { t } = useTranslation() 

    const routes = [
        {
            name: 'Home',
            route: '/',
            link: true
        },
        {
            name: 'settings',
            link: false,
            route: '/settings'
        },
        {
            name: 'geofence',
            link: false,
            // route: '/about'
        }
    ]

    return (
        <div>
            <BreadCrumbTemplete routes={routes} />
            
            <div className="settings-geofence">
                <Header />
                <Content />
            </div>
        </div>
    )
}