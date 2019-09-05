import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const LOGIN = gql`
mutation login($input: UserCredentials!) {
  login (input: $input)
}
`

export const LoginMutation = ({ children }) => {
  return <Mutation mutation={LOGIN}>
    {children}
  </Mutation>
}

/* import { useMutation } from 'react-apollo-hooks'
import gql from 'graphql-tag'

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`

export const LoginMutation = (email, password) => {
  const [mutation, { data, error, loading }] = useMutation(LOGIN)
  const loginUser = (email, password) => {
    mutation({ variables: { input: { email, password } } })
  }
  return { loginUser, data, error, loading }
} */
