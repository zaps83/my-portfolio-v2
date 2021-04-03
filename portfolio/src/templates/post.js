import React from 'react'
import { graphql } from 'gatsby'
import * as S from './styles/post'
import { serializer } from '../components/serializer'
import { faChevronLeft as ArrowIcon } from '@fortawesome/free-solid-svg-icons'


export const query = graphql`
query ($slug: String) {
    sanityPost(slug: {current: {eq: $slug}}) {
    publishedAt
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
    bullets
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
            <S.Heading>
                <S.MobileContainer>
                    {data.sanityPost.title ? <S.PostTitle>{data.sanityPost.title}</S.PostTitle> : null}
                    <S.List>
                        {data.sanityPost.bullets.map((bullet, index) => {
                            return (
                                <>
                                <S.Bullet key={index}>{bullet}</S.Bullet>
                                {index !== data.sanityPost.bullets.length - 1 ? '•' : null}
                                </>
                            )
                        })}
                        {data.sanityPost.difficulty ? <S.Difficulty>{data.sanityPost.difficulty}</S.Difficulty> : null}
                    </S.List>
                    <S.HeaderContainer>
                        <S.Date>
                            {new Date(data.sanityPost.publishedAt).toLocaleString('en-US').slice(0, 9)}
                        </S.Date>
                        {data.sanityPost.leetcodeUrl ? (<>•
                        <S.Leetcode target='_blank' href={data.sanityPost.leetcodeUrl}>
                            Leetcode link
                        </S.Leetcode></>) : null}
                    </S.HeaderContainer>
                </S.MobileContainer>
                <S.Image image={data.sanityPost.mainImage?.asset.fluid.src} />
            </S.Heading>
            <S.PostContent 
                className='p-text'
                blocks={data.sanityPost._rawBody} 
                serializers={serializer} 
                projectId='ldqg7s9d' 
                dataset='production'/>
                <br/><br/>
        </S.Container>
        <S.Return>
            <S.GatsbyLink to='/post'><S.Icon icon={ArrowIcon} />Back to posts</S.GatsbyLink>
        </S.Return>

    </>

)

export default SinglePage