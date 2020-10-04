import { DashboardOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React from 'react'

export default function MainLayout({ children }: React.ComponentProps<'div'>) {
  const { Header, Content, Sider } = Layout
  return (
    <Layout className="h-screen">
      <Sider>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header></Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  )
}
