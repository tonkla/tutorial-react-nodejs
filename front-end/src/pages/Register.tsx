import { Button, Form, Input } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import userApi from '../services/api/user'

export default function Register() {
  const history = useHistory()

  function handleChange() {}

  async function onFinish(values: any) {
    const data = await userApi.create(values)
    if (data) {
      history.push('/login')
    }
  }

  const emailRegex = /(.+)@(.+){2,}\.(.+){2,}/

  return (
    <div className="flex items-center justify-center">
      <div className="mt-10 w-64">
        <Form onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Email is required' },
              { pattern: emailRegex, message: 'Email is incorrect' },
            ]}
          >
            <Input size="large" placeholder="Email" onChange={handleChange} />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Password is required' }]}>
            <Input size="large" type="password" placeholder="Password" onChange={handleChange} />
          </Form.Item>
          <Form.Item>
            <Button size="large" type="primary" className="w-full" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
        <Button className="w-full" type="link" onClick={() => history.push('/login')}>
          Cancel
        </Button>
      </div>
    </div>
  )
}
