import React from 'react'
import * as S from '../page-styles/home'
import ProjectContent from '../components/ProjectContent'
import PostContent from '../components/PostContent'
import { graphql } from 'gatsby'
import { serializer } from '../components/serializer'
import { Helmet } from "react-helmet"

export default function App({ data }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ZapsCode</title>
        <link rel="canonical" href="https://zapscode.com" />
      </Helmet>
      <S.AboutContainer>
        <S.AboutTitle>Welcome to ZapsCode</S.AboutTitle>
        <S.Description>
        <S.PersonalContent 
          blocks={data.allSanityAuthor.edges[0].node._rawHome} 
          serializers={serializer} 
          projectId='ldqg7s9d' 
          dataset='production'/>
      </S.Description>
      </S.AboutContainer>
      <S.SectionBottom>
        <S.GatsbyLink to='about'>Read more about me</S.GatsbyLink>
      </S.SectionBottom>
      <S.Title>Featured Projects</S.Title>
      <ProjectContent page='home' data={data}/>
      <S.SectionBottom >
        <S.GatsbyLink to='projects'>See more projects</S.GatsbyLink>
      </S.SectionBottom>
      <S.Title>Latest Posts</S.Title>
      <PostContent page='home' data={data}/>
      <S.SectionBottom section='posts'>
        <S.GatsbyLink to='posts'>See more posts</S.GatsbyLink>
      </S.SectionBottom>
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
    allSanityAuthor {
      edges {
        node {
          _rawHome
          _rawAbout
        }
      }
    }
  } 
`