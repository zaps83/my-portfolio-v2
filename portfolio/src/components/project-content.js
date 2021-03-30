import React from 'react'
import * as S from './styles/project-content'
import { graphql, StaticQuery } from "gatsby"
import Player from '../components/player'
import { serializer } from '../components/serializer'

const Project = () => (
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
        render={data => (
            <>
            <S.Title>Projects</S.Title>
            <S.Container>
                <S.Grid>
                    {data.allSanityProject.edges.map(({ node: project }) => (
                        <S.ProjectContainer>
                            <S.ProjectTitle>
                                {project.title}
                            </S.ProjectTitle>
                            <S.InnerContainer>
                                    <S.Image src={project.mainImage.asset.fluid.src} alt='' />
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
                                            <Player.Video src={`media/${project.watchDemo}`} />
                                        </Player>
                                    </S.Button>
                                </S.Buttons>
                            </S.InnerContainer>
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
                                        <S.ReadAboutLink to={postInfo.postLink}>{postInfo.postName}</S.ReadAboutLink>
                                    ))}    
                                </S.ReadAboutLinks>
                        </S.ProjectContainer>
                    ))}
                </S.Grid>
            </S.Container>
        </>
        )}
    />
)

export default Project