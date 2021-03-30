import React from 'react'
import { graphql } from 'gatsby'
import * as S from './styles/post'
import { serializer } from '../components/serializer'


export const query = graphql`
query ($slug: String) {
    sanityPost(slug: {current: {eq: $slug}}) {
        title
        body {
            _key
            _type
            style
            list
            _rawChildren
        }
        _rawBody
        leetcodeUrl
        problemType
        difficulty
        mainImage {
                asset {
                    fluid {
                        src
                    }
                }
            }
        }
    }
`

const SinglePage = ({ data }) => (
    <>
        <S.Container>
            <S.Header1>
                <S.Title>{data.sanityPost.title}</S.Title>
                <S.Image src={data.sanityPost.mainImage?.asset.fluid.src} alt='' />
            </S.Header1>
            <S.Header2>
                <S.Difficulty>{data.sanityPost.difficulty}</S.Difficulty>
                <S.ProblemType>{data.sanityPost.problemType}</S.ProblemType>
                <S.Url 
                    href={data.sanityPost.leetcodeUrl} 
                    target='_blank' 
                    rel="noreferrer"
                >Leetcode Link</S.Url>
            </S.Header2>

            <S.PostContent 
                className='p-text'
                blocks={data.sanityPost._rawBody} 
                serializers={serializer} 
                projectId='ldqg7s9d' 
                dataset='production'/>
            <S.GatsbyLink to='/post'>Back to posts</S.GatsbyLink>
        </S.Container>
    </>

)

export default SinglePage