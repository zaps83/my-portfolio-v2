import React from 'react'
import './styles/home-project.css'
import { graphql, StaticQuery, Link } from "gatsby"
import Player from '../components/player'
import BlockContent from '@sanity/block-content-to-react'
import { serializer } from '../components/serializer'

export default () => (
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
            <h1 className='project-page-title'>Projects</h1>
            <div className='project-page-container'>
                <div className='project-grid'>
                    {data.allSanityProject.edges.map(({ node: project }) => (
                        <div className='project-container'>
                            <div className='project-title-container'>
                                <h2 className='project-title'>{project.title}</h2>
                            </div>
                            <div className='img-and-buttons'>
                                <div className='project-img-container'>
                                    <img className='project-image' src={project.mainImage.asset.fluid.src} alt='' />              
                                </div>
                                <div className='project-buttons'>
                                    <div className='visit-site project-button-container'>
                                        <a target='_blank' href={project.visitSite} className='visit-site-link project-button'>
                                            Visit Site
                                        </a>
                                    </div>
                                    <div className='view-code project-button-container'>
                                        <a target='_blank' href={project.viewCode} className='view-code-link project-button'>
                                            View Code
                                        </a>
                                    </div>
                                    <div className='watch-demo project-button-container'>
                                        <Player>
                                            <Player.Button />
                                            <Player.Video src={`media/${project.watchDemo}`} />
                                        </Player>
                                    </div>
                   
                                    
                                </div>
                            </div>
                            <BlockContent 
                                className='project-description'
                                blocks={project._rawBody} 
                                serializers={serializer} 
                                projectId='ldqg7s9d' 
                                dataset='production'/>
                            <div className='read-about'>
                                {project.relatedPosts.length ? (
                                    <h3 className='read-about-title'>Read About This Project</h3>
                                ) : null}
                                <div className='read-about-container'>
                                    {project.relatedPosts.map(({ postInfo }) => (
                                        <Link className='read-about-link' to={postInfo.postLink}>{postInfo.postName}</Link>
                                    ))}    
                                </div>  
                            </div>
                        </div>






/*                         <a href='#' target='_blank' className='project-container'>
                            <img className='project-image' src={project.mainImage.asset.fluid.src} alt='' />              
                            <div className='project-title-container'>
                                <h2 className='project-title'>{project.title}</h2>
                            </div>
                        </a> */
                    ))}
                </div>
                
            </div>
        </>
        )}
    />
)
