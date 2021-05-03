import "./style.css"
import React from "react"
import { Card } from "antd"
import { Main } from "./Main"
import StyledTab from "@/components/StyledTab/StyledTab"
import { useTranslation } from 'react-i18next'
import BreadCrumbTemplete from "@/components/breadcrumb/BreadCrumbTemplete"

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
                    <TabPane tab={t("main")} key="1">
                        <Main />
                    </TabPane>
                    <TabPane tab={t("work")} key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab={t("bonuses.penalties")} key="3">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab={t("documents")} key="4">
                        Content of Tab Pane 3
                    </TabPane>
                </StyledTab>
            </Card>
        </div>
    )
}