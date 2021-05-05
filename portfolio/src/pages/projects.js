import React from 'react'
import * as S from '../page-styles/home'
import ProjectContent from '../components/ProjectContent'
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet"

export default function Project ({ data }) {

    return (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Projects | ZapsCode</title>
            <link rel="canonical" href="http://zapscode.com" />
          </Helmet>
            <S.Title>Projects</S.Title>
            <ProjectContent page='projects' data={data}/>
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