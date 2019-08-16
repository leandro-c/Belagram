import React from 'react'
import { IoIosFlame } from 'react-icons/io'
import { ImgWrapper, Img, Button } from './styles'
const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const PhotoCard = ({ id, likes = 0, cover = DEFAULT_IMAGE }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={cover} />
        </ImgWrapper>
      </a>
      <Button>
        <IoIosFlame size='41px' />{likes}
      </Button>
    </article>
  )
}
