import React from 'react'
import { Redirect } from 'react-router-dom'
import Layout from '../components/Layout'
import { useStoreState } from '../store'

export default function Home() {
  const user = useStoreState((s) => s.userState.user)
  return <div>{!user ? <Redirect to="/login" /> : <Layout>Home</Layout>}</div>
}
