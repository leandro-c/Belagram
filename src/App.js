import React from 'react'
import { Logo } from './components/Logo'
// estilos globales
import { GlobalStyle } from './styles/GlobalStyles'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Home } from './pages/Home'
import { Router } from '@reach/router'
export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <Router>
            <Home path='/' />
            <Home path='/pet/:id' />
          </Router>
      }

    </div>
  )
}
