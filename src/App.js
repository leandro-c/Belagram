import React from 'react'
import { Logo } from './components/Logo'
// estilos globales
import { GlobalStyle } from './styles/GlobalStyles'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { DetailUser, User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { Home } from './pages/Home'

import { Router } from '@reach/router'
import { NavBar } from './components/NavBar'
import Context from './Context'
export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <Context.Consumer>
        {
          ({ isAuth }) => isAuth
            ? <Router>
              <Favs path='/favs' />
              <User path='/user' />
            </Router>
            : <Router>
              <NotRegisterUser path='/favs' />
              <NotRegisterUser path='/user' />
            </Router>
        }

      </Context.Consumer>
      <NavBar />
    </div>
  )
}
