import "./style.css"
import React from "react"
import { Main } from "./Main"
import { Create } from "./Create"
import { useTranslation } from "react-i18next";
import BreadCrumbTemplete from "../../components/breadcrumb/BreadCrumbTemplete"
import { SearchOutlined, PictureFilled } from '@ant-design/icons';
import { Row, Col, Divider, Form, Input, Button, Upload } from 'antd';

export default function MobileRepresentatives() {
    const { t } = useTranslation() 

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
                <Main />
                {/* <Create /> */}
            </div>
        </div>
    )
}