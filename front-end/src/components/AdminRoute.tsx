import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useStoreState } from '../store'
import { UserRole } from '../typings'

export default function AdminRoute({ component: Component, ...rest }: any) {
  const user = useStoreState((s) => s.userRoleState.userRole)

  const ROLES = ['ADMIN', 'STAFF']

  function isAllowed(user: UserRole) {
    return user.roles.filter((r) => ROLES.includes(r.name)).length > 0
  }

  return (
    <Route
      {...rest}
      render={(props) => (user && isAllowed(user) ? <Component {...props} /> : <Redirect to="/" />)}
    />
  )
}
