import React from "react";
// import { useQuery } from "@apollo/react-hooks";

// import { gql } from "@apollo/client";
import { Grid, GridRow, GridColumn, Image } from "semantic-ui-react";
import { ApolloClient, InMemoryCache, useQuery } from "@apollo/client";
import { FETCH_POSTS_QUERY } from "../util/graphql";
import gql from 'graphql-tag';


function Home() {
  //   const {
  //     loading,
  //     data: { getPosts: posts },
  //   } = useQuery(FETCH_POSTS_QUERY);

  //   const client = new ApolloClient({
  //     uri: 'http://localhost:8000/',
  //     cache: new InMemoryCache()
  // })

  const GET_POSTS = gql`
    query getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  `;

  function DisplayPosts(){
    const { loading, error, data } = useQuery(GET_POSTS);

    if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.locations.map(({ id, body, createdAt, username, likes, likeCount, comments, commentCount  }) => (
    <div key={id}>
      <h3>{body}</h3>
      
      <b>About this location:</b>
    
      <br />
    </div>
  ));
  }

  //   client.query({
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

  return (
    // <Grid columns={3} divided>
    //   <Grid.Row>
    //     <Grid.Column></Grid.Column>
    //   </Grid.Row>
    // </Grid>
    <div>
    <h2>id</h2>
    <DisplayPosts />
    </div>
  );
}

// const FETCH_POSTS_QUERY = gql`
//   {
//     getPosts {
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
//     }
//   }
// `;

export default Home;
