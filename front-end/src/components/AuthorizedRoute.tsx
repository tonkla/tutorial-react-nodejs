import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useStoreState } from '../store'

export default function AuthorizedRoute({ component: Component, ...rest }: any) {
  const user = useStoreState((s) => s.userState.user)
  return (
    <Route
      {...rest}
      render={(props) => (user ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  )
}
