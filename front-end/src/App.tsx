import 'antd/dist/antd.css'
import { StoreProvider } from 'easy-peasy'
import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import AuthorizedRoute from './components/AuthorizedRoute'
// import About from './pages/About'
// import Home from './pages/Home'
// import Login from './pages/Login'
// import Register from './pages/Register'
import store from './store'
import './styles/tailwind-output.css'

const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const About = lazy(() => import('./pages/About'))
const Home = lazy(() => import('./pages/Home'))

export default function App() {
  return (
    <StoreProvider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <AuthorizedRoute path="/about" exact component={About} />
            <AuthorizedRoute path="/" exact component={Home} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Router>
    </StoreProvider>
  )
}
