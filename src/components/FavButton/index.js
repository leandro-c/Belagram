import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return (
    <React.Fragment>
      <Button onClick={onClick}>
        <Icon size='40px' />{likes} likes!
      </Button>
    </React.Fragment>
  )
}
