// import {Avatar} from "antd";
// import {UserOutlined} from "@ant-design/icons";
import basic from "../constants/basic";
import React from "react";

function MenuHeader (props) {
    const { isLogo2 = false } = props

    return (
        <div className='logo'>
            <div style={{margin: '0 auto'}}>
                <img 
                    src={isLogo2 ? basic.LOGO2 : basic.LOGO} 
                    style={{ width: '50%' }}
                />
            </div>
            {/*{ !props.collapsed ? <h1 className='title'>{ basic.TITLE }</h1> : '' }*/}
            {/*<Avatar size={36} src={ basic.LOGO } className='avatar' icon={<UserOutlined />} />*/}
            {/*{ !props.collapsed ? <h1 className='title'>{ basic.TITLE }</h1> : '' }*/}
        </div>
    )
}
export default MenuHeader
