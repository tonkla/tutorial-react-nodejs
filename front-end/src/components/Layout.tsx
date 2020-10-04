import {
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Button, Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useStoreActions, useStoreState } from '../store'

export default function MainLayout({ children }: React.ComponentProps<'div'>) {
  const [collapsed, setCollapsed] = useState(false)

  const location = useLocation()
  const history = useHistory()

  const user = useStoreState((s) => s.userState.user)
  const logOut = useStoreActions((a) => a.userState.logOut)

  function getSelected() {
    return [location.pathname]
  }

  const { Header, Content, Sider } = Layout

  return (
    user && (
      <Layout className="h-screen">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['/']} selectedKeys={getSelected()}>
            <Menu.Item
              key="/"
              icon={<DashboardOutlined />}
              onClick={() => history.push('/')}
              className="flex items-center"
            >
              Home
            </Menu.Item>
            <Menu.Item
              key="/about"
              icon={<UserOutlined />}
              onClick={() => history.push('/about')}
              className="flex items-center"
            >
              About
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="px-10 bg-white">
            <div className="flex">
              <div className="flex items-center">
                {collapsed ? (
                  <MenuUnfoldOutlined className="trigger" onClick={() => setCollapsed(false)} />
                ) : (
                  <MenuFoldOutlined className="trigger" onClick={() => setCollapsed(true)} />
                )}
              </div>
              <div className="flex-1 flex flex-row justify-end items-center">
                <div>{user.email}</div>
                <Button type="link" onClick={() => logOut()}>
                  Log out
                </Button>
              </div>
            </div>
          </Header>
          <Content className="p-10">{children}</Content>
        </Layout>
      </Layout>
    )
  )
}
