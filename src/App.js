import React from 'react'
import { Logo } from './components/Logo'
import { ListOfCategories } from './components/ListOfCategories'
// import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { ListOfPhotoCardsWithQuery } from './container/ListOfPhotoCardsWithQuery'
// estilos globales
import { GlobalStyle } from './styles/GlobalStyles'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

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
          : <React.Fragment>
            <ListOfCategories />
            <ListOfPhotoCardsWithQuery categoryId={1} />
          </React.Fragment>
      }

    </div>
  )
}
