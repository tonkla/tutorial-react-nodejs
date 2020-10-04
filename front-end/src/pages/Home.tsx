import React from 'react'
import Layout from '../components/Layout'
import { useStoreState } from '../store'

export default function Home() {
  const userRole = useStoreState((s) => s.userRoleState.userRole)
  console.log(userRole)
  return <Layout>Home</Layout>
}
