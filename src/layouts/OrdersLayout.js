import React, { useState, useEffect } from 'react'
import {Layout, notification} from 'antd'
import { useHistory } from "react-router-dom"
import RightContent from '@/components/RightContent'
import MenuHeader from '@/components/MenuHeader'
import MainMenu from '@/components/menu/Menu'
import basic from '@/constants/basic'
import '@/assets/styles/layout.less'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
const { Header, Content, Sider } = Layout


export default function OrdersLayout({ children }) {

  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          className='slider'
          theme={basic.MENU_THEME}
          width={64}
          // collapsed={collapsed}
        >
          <MenuHeader isLogo2 />

        </Sider>
        <Layout className='site-layout'>
          <Header
            className='site-layout-background header'
            style={{ padding: 0 }}
          >
            <ArrowLeftOutlined
              // onClick={() => {
              //   setCollapsed(!collapsed)
              // }}
              className='menuIcon'
            />
            <RightContent />
          </Header>
          <Content style={{ margin: '0 16px' }} className="mainBox">{children}</Content>
        </Layout>
      </Layout>
    </div>
  )
}
