import React from 'react'
import * as S from './styles/project-content'
import { graphql, StaticQuery } from "gatsby"
import Player from './player'
import { serializer } from './serializer'

const Project = ({ page }) => (
    <StaticQuery 
        query={graphql`
        {
            allSanityProject {
              edges {
                node {
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
          
        `}
        render={data => {

          const projectData = data.allSanityProject.edges
          .sort((a, b) => new Date(b.node.publishedAt) - new Date(a.node.publishedAt))

          const homeData = projectData.filter((value, index) => index < 2)

          const currentData = page === 'home' ? homeData : projectData

          console.log('video file', currentData[0].node.videoFile)

          return (
            <>
            <S.Container>
                <S.Grid>
                    {currentData.map(({ node: project }) => {
                      return (
                        <S.ProjectContainer key={project.title}>
                            <S.ProjectTitle>
                                {project.title}
                            </S.ProjectTitle>
                            <S.InnerContainer>
                                <S.Image image={project.mainImage.asset.fluid.src} alt='' />
                                <S.Buttons>
                                    <S.Button target='_blank' rel="noreferrer" href={project.visitSite} >
                                        Visit Site
                                    </S.Button>
                                    <S.Button target='_blank' rel="noreferrer" href={project.viewCode} >
                                        View Code
                                    </S.Button>
                                    <S.Button>
                                        <Player>
                                            <Player.Button />
                                            <Player.Video src={`/${project.watchDemo}`} />
                                        </Player>
                                    </S.Button>
                                </S.Buttons>
                            </S.InnerContainer>
                            <S.Body>
                              <S.Date>
                                  {new Date(project.publishedAt).toLocaleString('en-US').slice(0, 9)}
                              </S.Date>
                              <S.Description 
                                  blocks={project._rawBody} 
                                  serializers={serializer} 
                                  projectId='ldqg7s9d' 
                                  dataset='production'/>
                                  {project.relatedPosts.length ? (
                                      <S.ReadAbout>Read More About This Project</S.ReadAbout>
                                  ) : null}
                                  <S.ReadAboutLinks>
                                      {project.relatedPosts.map(({ postInfo }) => (
                                          <S.ReadAboutLink key={postInfo.postLink} to={postInfo.postLink}>{postInfo.postName}</S.ReadAboutLink>
                                      ))}    
                                  </S.ReadAboutLinks>
                                </S.Body>
                        </S.ProjectContainer>
                    )})}
                </S.Grid>
            </S.Container>
        </>
        )}}
    />
)

export default Project