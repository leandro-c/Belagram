import React from 'react'
import { PhotoCard } from '../PhotoCard'
// import { categories } from '../../../api/db.json'

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } }
= {}) => {
  return (
    <ul>
      { photos.map(photo =>
        <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}
