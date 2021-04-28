import React from "react"
import BreadCrumbTemplete from "@/components/breadcrumb/BreadCrumbTemplete"
import { useTranslation } from 'react-i18next'


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
        <div>
            <BreadCrumbTemplete routes={routes}/>

            <div className="content">
                content
            </div>
        </div>
    )
}