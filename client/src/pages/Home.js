import React from "react";
// import { useQuery } from "@apollo/react-hooks";

// import { gql } from "@apollo/client";
import { Grid, GridRow, GridColumn, Image } from "semantic-ui-react";
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from "@apollo/client";
import { FETCH_POSTS_QUERY } from "../util/graphql";
import gql from 'graphql-tag'

import PostCard from '../components/PostCard'

function Home() {


  const GET_POSTS = gql`
    query {
        getPosts {
      id
      body
      username
      createdAt
      commentCount
      likeCount
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
  `;

  
const { loading, error, data } = useQuery(GET_POSTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;


  return (
    <Grid columns={3} >
        <GridRow className="page-title">
            <h1>Recent Posts</h1>
        </GridRow>
    <GridRow>
      {loading ? (
          <h1>Loading Posts...</h1>
      ) : (
          data.getPosts && data.getPosts.map(post=> (
              <GridColumn key={post.id} style={{marginBottom: '20px'}}>
                  <PostCard post={post}/>
              </GridColumn>
          ))
      )}
    </GridRow>
    </Grid>
  );
}



export default Home;
