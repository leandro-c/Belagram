import React from 'react'
import { Article, ImgWrapper, Img } from './styles'
// hooks
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
// components
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from './../../container/ToggleLikeMutation'
const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `key-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, ref] = useNearScreen()

  return (
    <Article ref={ref}>
      {
        show && <React.Fragment>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  !liked && toggleLike({ variables: {
                    input: { id }
                  } })
                  setLiked(!liked)
                }
                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
              }

            }
          </ToggleLikeMutation>
        </React.Fragment>
      }

    </Article>
  )
}
