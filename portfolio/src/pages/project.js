import React from 'react'
import * as S from '../page-styles/home'
import ProjectContent from '../components/ProjectContent'
import { graphql } from 'gatsby'

export default function Project ({ data }) {

    return (
        <>
            <S.Title>Projects</S.Title>
            <ProjectContent page='project' data={data}/>
        </>
    )
}

export const query = graphql`
{
    allSanityProject {
      edges {
        node {
            video {
                asset {
                    playbackId
                }
            }
          title
          slug {
            current
          }
          mainImage {
            asset {
              fluid {
                src
              }
            }
          }
          relatedPosts {
              postInfo {
                  postLink
                  postName
              }
          }
          viewCode
          visitSite
          watchDemo
          publishedAt
          body {
            children {
              text
            }
          }
          _rawBody
        }
      }
    }
  } 
`