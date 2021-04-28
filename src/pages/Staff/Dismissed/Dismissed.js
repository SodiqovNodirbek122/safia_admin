import "./style.css"
import React from "react"
import BreadCrumbTemplete from "@/components/breadcrumb/BreadCrumbTemplete"
import { useTranslation } from 'react-i18next'
import { Card, Tabs } from "antd"
import StyledTab from "@/components/StyledTab/StyledTab"

const { TabPane } = StyledTab;

export default function Dismissed() {
    const { t } = useTranslation()

    const routes =  [
        {
            name: t("staff"),
            route: "/",
            link: true,
        },
        {
            name: t("dismissed"),
            route: "/dismissed",
            link: true,
        },
    ]

    return (
        <div className="dismissed">
            <BreadCrumbTemplete routes={routes}/>

            <Card className="content">
                <StyledTab defaultActiveKey="1">
                    <TabPane tab={t("main")} key="1" style={{margin: 0, padding: "16px 20px"}} className="safia-tab">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab={t("work")} key="2" className="safia-tab">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab={t("bonuses.penalties")} key="3" className="safia-tab">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab={t("documents")} key="4" className="safia-tab">
                        Content of Tab Pane 3
                    </TabPane>
                </StyledTab>
            </Card>
        </div>
    )
}