import React from 'react'
import PostContent from '../components/PostContent'
import * as S from '../page-styles/home'
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'

export default function Post ({ data }) {
    return (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Blog Posts | ZapsCode</title>
            <link rel="canonical" href="https://zapscode.com" />
          </Helmet>
          <S.Title>Blog Posts</S.Title>
          <PostContent page='posts' data={data}/>
        </>
    )
}

export const query = graphql`
{
    allSanityPost {
      edges {
        node {
          title
          slug {
            current
          }
          Image {
            asset {
              fluid {
                src
              }
            }
          }
          algorithmType
          bullets
          difficulty
          _rawDescription
          publishedAt
        }
      }
    }
  } 
`