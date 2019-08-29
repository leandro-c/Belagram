
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

export const withPhotos = graphql(gql`
query getPhotos($categoryId: ID){
photos(categoryId: $categoryId){
  id
  categoryId
  src
  likes
  liked
  userId
}
}`)

/*
High order components, render props, y ahora hooks!

import { useQuery } from 'react-apollo-hooks'
import gql from 'graphql-tag'

const getSinglePhoto = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const useGetSinglePhoto = id => {
  const { loading, data, error } = useQuery(getSinglePhoto, { variables: { id } })
  return { loading, data, error }
}
*/
