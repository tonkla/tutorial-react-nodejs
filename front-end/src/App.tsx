import 'antd/dist/antd.css'
import { StoreProvider } from 'easy-peasy'
import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import store from './store'
import './styles/tailwind-output.css'

export default function App() {
  return (
    <StoreProvider store={store}>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </StoreProvider>
  )
}
