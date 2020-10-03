import { Button, Input } from 'antd'
import React from 'react'

export default function Login() {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-10">
        <Input size="large" placeholder="Email" />
        <Button size="large" type="primary" className="mt-4 w-full">
          Log in
        </Button>
      </div>
    </div>
  )
}
