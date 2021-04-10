import React from 'react'
import PostContent from '../components/PostContent'
import * as S from '../page-styles/home'

import { graphql } from 'gatsby'

export default function Post ({ data }) {
    return (
        <>
            <S.Title>Posts</S.Title>
            <PostContent page='post' data={data}/>
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