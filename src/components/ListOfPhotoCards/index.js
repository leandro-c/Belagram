import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { categories } from '../../../api/db.json'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      { categories.map(category =>
        <PhotoCard key={category.id} {...category} />)}
    </ul>
  )
}
