import React from "react";
import App from "./App";
// import ApolloClient from 'apollo-client'
// import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from "apollo-link-http";
// import { ApolloProvider } from '@apollo/react-hooks'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  
} from "@apollo/client";
import gql from 'graphql-tag';

// const httpLink = createHttpLink({
//   uri: "http://localhost:8000/",
// });

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache(),
// });

const client = new ApolloClient({
    uri: 'http://localhost:8000/',
    cache: new InMemoryCache()
})

// client.query({
//   query: gql`
//      query getPosts {
//       id
//       body
//       createdAt
//       username
//       likeCount
//       likes {
//         username
//       }
//       commentCount
//       comments {
//         id
//         username
//         createdAt
//         body
//       }
    
//   }
//   `,
// })
// .then((results) => console.log(results));

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
