import { Button, Form, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { useStoreActions, useStoreState } from '../store'
import { User } from '../typings'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  const user = useStoreState((s) => s.userState.user)
  const logIn = useStoreActions((a) => a.userState.logIn)

  useEffect(() => {
    ;(async () => {})()
  }, [])

  function handleClick() {
    const emailRegex = /(.+)@(.+){2,}\.(.+){2,}/
    if (emailRegex.test(email)) {
      const user: User = {
        email,
        password,
      }
      logIn(user)
    }
  }

  return user ? (
    <Redirect to="/" />
  ) : (
    <div className="flex items-center justify-center">
      <div className="mt-10 w-64">
        <Form>
          <Form.Item>
            <Input size="large" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
          <Form.Item>
            <Input
              size="large"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button size="large" type="primary" className="w-full" onClick={handleClick}>
              Log in
            </Button>
          </Form.Item>
          <div className="flex justify-center">
            <Button
              type="link"
              onClick={() => {
                history.push('/register')
              }}
            >
              Register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
