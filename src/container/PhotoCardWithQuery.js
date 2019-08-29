import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const query = gql`
query getPhoto($id: ID!){
  photo(id:$id){
    id
    categoryId
    src
    likes
    liked
    userId
  }
}`

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={query} variables={{ id }}>
    {
      ({ loading, error, data }) => {
        const { photo = {} } = data
        return <PhotoCard {...photo} />
      }
    }
  </Query>
)
