import React from 'react'
import * as S from '../page-styles/home'
import ProjectContent from '../components/ProjectContent'
import PostContent from '../components/PostContent'
import { graphql } from 'gatsby'

export default function App({ data }) {
  return (
    <>
      <S.AboutContainer>
        <S.AboutTitle>Hi, I'm Steven Zapart.</S.AboutTitle>
        <S.Description>
          I am full-stack developer mainly specializing in React.  
          I am passionate about web design and being creative.  
          I enjoy learning and developing new skills.
          I love coming up with ideas and process of bringing them to life.  
          After graduating with a degree in Mechanical Engineering in December,
          I discovered my true passion of coding.  
          Since then, I have been learning everything I can about the world of programming.
          I have been exploring all sorts of topics that I have found to be interesting from finding ways to optimally solve algorithm challenges to designing responsive websites to efficiently handling data in databases.
          I am now looking forward to starting a career in the field of software development.
          I am looking forward to contributing to exciting, impactful projects and collaborating and learning from other developers.  
          The about page has more information about me, my software development journey, and the purpose of this site.
          The posts page has guides that walk through algorithm problems and the process of developing various useful features for real sites.
          The projects page displays what I have created lately including links to the sites, links to the source code, and video demos.  
      </S.Description>
      </S.AboutContainer>
      <S.SectionBottom>
        <S.GatsbyLink to='about'>Read more about me</S.GatsbyLink>
      </S.SectionBottom>
      <S.Title>Lastest Posts</S.Title>
      <PostContent page='home' data={data}/>
      <S.SectionBottom>
        <S.GatsbyLink to='posts'>See more posts</S.GatsbyLink>
      </S.SectionBottom>
      <S.Title>Latest Projects</S.Title>
      <ProjectContent page='home' data={data}/>
      <S.SectionBottom section='projects'>
        <S.GatsbyLink to='projects'>See more projects</S.GatsbyLink>
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