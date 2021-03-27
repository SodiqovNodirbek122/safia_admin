import "./style.css"
import React from "react"
import BreadCrumbTemplete from "../../components/breadcrumb/BreadCrumbTemplete"
import { Row, Col, Divider } from 'antd';


export default function MobileRepresentatives() {
    const routes = [
        {
            name: 'Home',
            route: '/',
            link: true
        },
        {
            name: 'mobile representatives',
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
                            Left Text
                        </Divider>
                    </Col>
                </Row>
            </div>
        </div>
    )
}