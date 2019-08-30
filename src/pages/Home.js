import React from 'react'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

export const Home = ({ id }) => {
  return (
    <React.Fragment>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </React.Fragment>
  )
}
