import { Button } from 'antd'
import React from 'react'
import { Redirect } from 'react-router-dom'
import { useStoreActions, useStoreState } from '../store'

export default function Home() {
  const user = useStoreState((s) => s.userState.user)
  const logOut = useStoreActions((a) => a.userState.logOut)

  function handleClickLogOut() {
    logOut()
  }

  return (
    <div>
      {user ? (
        <div>
          <div>{user.email}</div>
          <Button type="link" onClick={handleClickLogOut}>
            Log out
          </Button>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  )
}
