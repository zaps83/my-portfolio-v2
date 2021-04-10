import React from 'react'
import * as S from '../page-styles/home'
import ProjectContent from '../components/ProjectContent'
import PostContent from '../components/PostContent'
import { graphql } from 'gatsby'

export default function App({ data }) {
  return (
    <>
      <S.AboutContainer>
        <S.AboutTitle>Steven Zapart</S.AboutTitle>
        <S.SubTitle>Full-Stack Developer</S.SubTitle>
        <S.Description>I am developer with experience in React.</S.Description>
      </S.AboutContainer>
      <S.SectionBottom>
        <S.GatsbyLink to='about'>Read more</S.GatsbyLink>
      </S.SectionBottom>
      <S.Title>Lastest Posts</S.Title>
      <PostContent page='home' data={data}/>
      <S.SectionBottom>
        <S.GatsbyLink to='post'>See more posts</S.GatsbyLink>
      </S.SectionBottom>
      <S.Title>Latest Projects</S.Title>
      <ProjectContent page='home' data={data}/>
      <S.SectionBottom section={'project'}>
        <S.GatsbyLink to='project'>See more projects</S.GatsbyLink>
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
  } 
`