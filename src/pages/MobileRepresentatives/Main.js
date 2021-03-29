import "./style.css"
import React from "react"
import Basic from "@/constants/basic"
import { useHistory, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import BreadCrumbTemplete from "../../components/breadcrumb/BreadCrumbTemplete"
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Row, Col, Tag, Divider, Form, Input, Button, Upload, Table, Space } from 'antd'

const { SECONDARY_COLOR } = Basic

export default function Main() {
    const { t } = useTranslation()
    const currentPath = useLocation().pathname
    const history = useHistory()

    const handleCreate = () => {
        history.push("/mobile-representatives/form")
    }

    // console.log(useHistory(), "\npath:", currentPath)

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
        }
    ]
    

    const columns = [
        {
            title: t('fio'),
            dataIndex: 'fio',
            key: 'fio',
        },
        {
            title: t('region'),
            dataIndex: 'region',
            key: 'region',
        },
        {
            title: t('district'),
            dataIndex: 'district',
            key: 'district',
        },
        {
            title: t('address'),
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: t('county'),
            key: 'county',
            dataIndex: 'county',
            render: counties => (
                <>
                    {counties.map((tag, i) => (
                        <Tag color="blue" key={i}>
                            {tag}
                        </Tag>
                    ))}
                </>  
            )
        },
        {
            title: t('actions'),
            key: 'actions',
            dataIndex: 'actions',
            render: (val) => (
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
            ),
        },
    ];
    
    return (
        <div>
            <BreadCrumbTemplete routes={routes} />
            
            <div className="mobile-representatives">
                <div className="main">
                    <Row justify="end">
                        <Col>
                            <Button onClick={handleCreate} type="primary" style={{marginLeft: 8}}>
                                {t("create")}
                            </Button>
                        </Col>
                    </Row>
                    <Row style={{marginTop: 14}}>
                        <Col span={24}>
                            <Table 
                                size="small" 
                                columns={columns} 
                                dataSource={data} 
                                pagination={pagination}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

const pagination = {
    defaultCurrent: 1, 
    pageSize: 10,
    total: 100,
    size: "default"
}

const data = [
    {
        key: '1',
        fio: 'Sadullayev Anvar Abduganiyevich',
        region: "Toshkent sh.",
        district: 'Chirchiq shahri',
        address: "Yunusobod tumani, Qoraqulov ko'ch. 23-'a' uy",
        county: ['12:00', '20:00'],
        actions: {}
    },
    {
        key: '2',
        fio: 'Sadullayev Anvar Abduganiyevich',
        region: "Toshkent sh.",
        district: 'Chirchiq shahri',
        address: "Yunusobod tumani, Qoraqulov ko'ch. 23-'a' uy",
        county: ['12:00', '20:00'],
        actions: {}
    },
    {
        key: '3',
        fio: 'Sadullayev Anvar Abduganiyevich',
        region: "Toshkent sh.",
        district: 'Chirchiq shahri',
        address: "Yunusobod tumani, Qoraqulov ko'ch. 23-'a' uy",
        county: ['12:00', '20:00'],
        actions: {}
    },
    {
        key: '4',
        fio: 'Sadullayev Anvar Abduganiyevich',
        region: "Toshkent sh.",
        district: 'Chirchiq shahri',
        address: "Yunusobod tumani, Qoraqulov ko'ch. 23-'a' uy",
        county: ['12:00', '20:00'],
        actions: {}
    },
    {
        key: '5',
        fio: 'Sadullayev Anvar Abduganiyevich',
        region: "Toshkent sh.",
        district: 'Chirchiq shahri',
        address: "Yunusobod tumani, Qoraqulov ko'ch. 23-'a' uy",
        county: ['12:00', '20:00'],
        actions: {}
    },
    {
        key: '6',
        fio: 'Sadullayev Anvar Abduganiyevich',
        region: "Toshkent sh.",
        district: 'Chirchiq shahri',
        address: "Yunusobod tumani, Qoraqulov ko'ch. 23-'a' uy",
        county: ['12:00', '20:00'],
        actions: {}
    },
    {
        key: '7',
        fio: 'Sadullayev Anvar Abduganiyevich',
        region: "Toshkent sh.",
        district: 'Chirchiq shahri',
        address: "Yunusobod tumani, Qoraqulov ko'ch. 23-'a' uy",
        county: ['12:00', '20:00'],
        actions: {}
    },
    {
        key: '8',
        fio: 'Sadullayev Anvar Abduganiyevich',
        region: "Toshkent sh.",
        district: 'Chirchiq shahri',
        address: "Yunusobod tumani, Qoraqulov ko'ch. 23-'a' uy",
        county: ['12:00', '20:00'],
        actions: {}
    },
    {
        key: '9',
        fio: 'Sadullayev Anvar Abduganiyevich',
        region: "Toshkent sh.",
        district: 'Chirchiq shahri',
        address: "Yunusobod tumani, Qoraqulov ko'ch. 23-'a' uy",
        county: ['12:00', '20:00'],
        actions: {}
    },
    {
        key: '10',
        fio: 'Sadullayev Anvar Abduganiyevich',
        region: "Toshkent sh.",
        district: 'Chirchiq shahri',
        address: "Yunusobod tumani, Qoraqulov ko'ch. 23-'a' uy",
        county: ['12:00', '20:00'],
        actions: {}
    },
];