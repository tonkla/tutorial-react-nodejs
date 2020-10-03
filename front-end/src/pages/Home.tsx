import { Button } from 'antd'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function Home() {
  const history = useHistory()

  function handleClick() {
    history.push('/login')
  }

  return (
    <div>
      <Button size="large" type="link" onClick={handleClick}>
        Login
      </Button>
      <Link to="/login">Login</Link>
    </div>
  )
}
