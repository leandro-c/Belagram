import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { ApolloClient } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import Context from './Context'

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'https://belagram-server.leandroccasarin.now.sh/graphql'
})

const client = new ApolloClient({
  uri: 'https://belagram-server.leandroccasarin.now.sh/graphql',
  link,
  cache
})
ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app'))
