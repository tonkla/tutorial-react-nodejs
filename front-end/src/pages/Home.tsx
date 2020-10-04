import { Button } from 'antd'
import React from 'react'
import { Redirect } from 'react-router-dom'
import Layout from '../components/Layout'
import { useStoreActions, useStoreState } from '../store'

export default function Home() {
  const user = useStoreState((s) => s.userState.user)
  const logOut = useStoreActions((a) => a.userState.logOut)

  return (
    <div>
      {!user ? (
        <Redirect to="/login" />
      ) : (
        <Layout>
          <div>{user.email}</div>
          <Button type="link" onClick={() => logOut()}>
            Log out
          </Button>
        </Layout>
      )}
    </div>
  )
}
