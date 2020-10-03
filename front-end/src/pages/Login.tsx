import { Button, Input } from 'antd'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const history = useHistory()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  function handleClick() {
    const emailRegex = /(.+)@(.+){2,}\.(.+){2,}/
    if (emailRegex.test(email)) {
      history.push('/')
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="mt-10">
        <Input size="large" placeholder="Email" onChange={handleChange} />
        <Button size="large" type="primary" className="mt-4 w-full" onClick={handleClick}>
          Log in
        </Button>
      </div>
    </div>
  )
}
