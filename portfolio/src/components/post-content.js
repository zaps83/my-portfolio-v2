import React from 'react'
import { graphql, StaticQuery, Link } from "gatsby"
import './styles/home-post.css'

const Post = () => (

    <StaticQuery
        query={graphql`
        {
            allSanityPost {
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
                    }
                }
            }
        }
      
    `}
        render={data => (
        <>
            <h1 className='post-page-title'>Posts</h1>
            <div className='post-page-container'>
                <div className='post-grid'>
                    {data.allSanityPost.edges.map(({ node: post, index }) => (
                        <Link to={'/post/' + post.slug.current} key={post.slug.current}>
                            <span>
                                <span className='post-container' key={index}>
                                    <img className='post-image' src={post.mainImage?.asset.fluid.src} alt='' />
                                    <span className='post-title-container'>
                                        <h2 className='post-title'>{post.title}</h2>              
                                    </span>
                                </span>
                            </span> 
                        </Link>  
                    ))}
                </div>
            </div>
        </>
        )}
    />
)

export default Post