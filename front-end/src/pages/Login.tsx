import { Button, Form, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import userApi from '../services/api/user'
import { useStoreActions } from '../store'
import { User } from '../typings'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const setUser = useStoreActions((actions) => actions.userState.setUser)

  useEffect(() => {
    ;(async () => {
      await userApi.findAll()
    })()
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  function handleClick() {
    const emailRegex = /(.+)@(.+){2,}\.(.+){2,}/
    if (emailRegex.test(email)) {
      const user: User = {
        email,
        password,
      }
      setUser(user)
      history.push('/')
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="mt-10 w-64">
        <Form>
          <Form.Item>
            <Input size="large" placeholder="Email" onChange={handleChange} />
          </Form.Item>
          <Form.Item>
            <Input size="large" placeholder="Password" onChange={handleChange} />
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
