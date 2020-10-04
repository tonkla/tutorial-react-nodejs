import { Button, Form, Input } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Register() {
  const history = useHistory()
  function handleChange() {}

  function onFinish(values: any) {
    console.log('Values', values)
  }

  function onFinishFailed(error: any) {
    console.log('Error', error)
  }

  const emailRegex = /(.+)@(.+){2,}\.(.+){2,}/

  return (
    <div className="flex items-center justify-center">
      <div className="mt-10 w-64">
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
      </div>
    </div>
  )
}
