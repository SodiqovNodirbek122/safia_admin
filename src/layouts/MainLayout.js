import React, { useState, useEffect } from 'react'
import {Layout, notification} from 'antd'
import { useHistory } from "react-router-dom"
import RightContent from '@/components/RightContent'
import MenuHeader from '@/components/MenuHeader'
import MainMenu from '@/components/menu/Menu'
import basic from '@/constants/basic'
import '@/assets/styles/layout.less'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
const { Header, Content, Sider } = Layout

// ***********************WEBSOCKET****************************************
const token = localStorage.getItem('token')
// if (token) {
//   const websocket = new WebSocket(`wss://websocket.muno.uz/ws?Authorization=${token}`)
//   websocket.onopen = () => {
//     console.log('Muno socket connecting.....')
//   }
//   websocket.onmessage = (e) => {
//     console.log('WebSocket message received: ', e)
//     notification.warning({
//       message: 'WebSocket Received'
//     })
//   }
// }
// ***********************WEBSOCKET****************************************





export default function MainLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false)
  const isAuthorited = useSelector((state) => state.auth.accessToken)

  const history = useHistory()

  useEffect(() => {
    if(!isAuthorited) {
      history.push('/login')
    }
  }, []);

  return (
    <div className={`App ${isAuthorited ? '' : 'd-none'}`}>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          className='slider'
          collapsible
          theme={basic.MENU_THEME}
          width={250}
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
        >
          <MenuHeader collapsed={collapsed} />
          <MainMenu />
        </Sider>
        <Layout className='site-layout'>
          <Header
            className='site-layout-background header'
            style={{ padding: 0 }}
          >
            {collapsed ? (
              <MenuUnfoldOutlined
                onClick={() => {
                  setCollapsed(!collapsed)
                }}
                className='menuIcon'
              />
            ) : (
              <MenuFoldOutlined
                onClick={() => {
                  setCollapsed(!collapsed)
                }}
                className='menuIcon'
              />
            )}
            <RightContent />
          </Header>
          <Content style={{ margin: '0 16px' }} className="mainBox">{children}</Content>
        </Layout>
      </Layout>
    </div>
  )
}
