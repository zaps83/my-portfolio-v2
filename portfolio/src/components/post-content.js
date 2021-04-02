import React from 'react'
import { graphql, StaticQuery } from "gatsby"
import * as S from './styles/post-content'
import { serializer } from './serializer'


const PostContent = ({ page }) => (

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
                  bullets
                  difficulty
                  _rawDescription
                  publishedAt
                }
              }
            }
          }
          
    `}
        render={data => {
            
            const postData = data.allSanityPost.edges
                .sort((a, b) => new Date(b.node.publishedAt) - new Date(a.node.publishedAt))

            const homeData = postData.filter((value, index) => index < 3)

            const currentData = page === 'home' ? homeData : postData

            return (
        <>
            <S.Container>
                <S.Grid>
                    {currentData.map(({ node: post }) => (
                        <S.GatsbyLink 
                            to={'/post/' + post.slug.current} 
                            key={post.slug.current}>
                                <S.Image image={post.mainImage?.asset.fluid.src} />
                                {post.difficulty ? <S.Difficulty>{post.difficulty}</S.Difficulty> : null}
                                {post.title ? <S.PostTitle>{post.title}</S.PostTitle> : null}       
                                <S.List>
                                    {post.bullets.map((bullet, index) => {
                                        return (
                                            <>
                                            <S.Bullet key={index}>{bullet}</S.Bullet>
                                            {index !== post.bullets.length - 1 ? '•' : null}
                                            </>
                                        )
                                    })}
                                </S.List>
                                {post._rawDescription ? <S.Description 
                                    blocks={post._rawDescription} 
                                    serializers={serializer} 
                                    projectId='ldqg7s9d' 
                                    dataset='production'/> : null}
                        </S.GatsbyLink>  
                    ))}
                </S.Grid>
                <S.Flex>
                {currentData.map(({ node: post }) => (
                    <S.GatsbyLink
                        to={'/post/' + post.slug.current} 
                        key={post.slug.current}>
                        <S.Heading>
                            <S.MobileContainer>
                            {post.title ? <S.PostTitle>{post.title}</S.PostTitle> : null}
                            <S.List>
                                {post.bullets.map((bullet, index) => {
                                    return (
                                        <>
                                        <S.Bullet key={index}>{bullet}</S.Bullet>
                                        {index !== post.bullets.length - 1 ? '•' : null}
                                        </>
                                    )
                                })}
                                {post.difficulty ? <S.Difficulty>{post.difficulty}</S.Difficulty> : null}
                            </S.List>  

                            </S.MobileContainer>
                            <S.Image image={post.mainImage?.asset.fluid.src} />
                        </S.Heading>
                        {post._rawDescription ? <S.Description 
                                    blocks={post._rawDescription} 
                                    serializers={serializer} 
                                    projectId='ldqg7s9d' 
                                    dataset='production'/> : null}
                    </S.GatsbyLink>
                ))}
                </S.Flex>
            </S.Container>
        </>
        )}}
    />
)

export default PostContent