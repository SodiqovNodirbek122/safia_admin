import "./style.css"
import React from "react"
import { Tabs } from "antd"

// const { TabPane } = Tabs;

export default class StyledTab extends React.Component {
    static TabPane({children, ...props}) {
        return (
            <Tabs.TabPane {...props}>{children}</Tabs.TabPane>
        )
    }

    render() {
        return (
            <div className="styled-tab">
                <Tabs {...this.props}>
                    {this.props.children}
                </Tabs>
            </div>
        )
    }
}