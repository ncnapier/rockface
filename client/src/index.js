// // import ReactDOM from 'react-dom';
// import reportWebVitals from './reportWebVitals';
// // import ApolloProvider from './ApolloProvider';
// import React from 'react';
// import * as ReactDOM from 'react-dom/client';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import App from './App'
// import gql from 'graphql-tag';

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  gql,
} from "@apollo/client";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ApolloProvider></ApolloProvider>
//   </React.StrictMode>
// );

const client = new ApolloClient({
  uri: "http://localhost:8000/",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      {
        getPosts {
          id
          body
          username
          createdAt
          likes {
            username
            id
            createdAt
          }
          comments {
            id
            createdAt
            body
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
// ReactDOM.render(ApolloProvider, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
