import React from 'react'
import { graphql, StaticQuery } from "gatsby"
import * as S from './styles/post-content'

const Post = (props) => (

    
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
                        problemType
                        difficulty
                    }
                }
            }
        }
      
    `}
        render={data => (
        <>
            <S.Title>Posts</S.Title>
            <S.Container>
                <S.Grid>
                    {data.allSanityPost.edges.map(({ node: post, index }) => (
                        <S.GatsbyLink 
                            to={'/post/' + post.slug.current} 
                            key={post.slug.current}
                        >
                                <S.PostContainer key={index}>
                                    <S.Image src={post.mainImage?.asset.fluid.src} alt='' />
                                    <S.PostInfo>
                                        <S.PostTitle>{post.title}</S.PostTitle>
                                        <S.Difficulty>{post.difficulty}</S.Difficulty>
                                        <S.ProblemType>{post.problemType}</S.ProblemType>          
                                    </S.PostInfo>
                                </S.PostContainer>
                        </S.GatsbyLink>  
                    ))}
                </S.Grid>
            </S.Container>
        </>
        )}
    />
)

export default Post