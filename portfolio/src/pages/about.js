import React from 'react'
import * as S from '../page-styles/home'
import { graphql } from 'gatsby'
import { serializer } from '../components/serializer'


export default function About ({ data }) {

    return (
        <>
            <S.AboutContainer>
                <S.AboutTitle>Steven Zapart</S.AboutTitle>
                <S.SubTitle>Full-Stack Developer</S.SubTitle>
                <S.Description>
                <S.PersonalContent 
                    blocks={data.allSanityAuthor.edges[0].node._rawAbout} 
                    serializers={serializer} 
                    projectId='ldqg7s9d' 
                    dataset='production'/>
                </S.Description>
            </S.AboutContainer>
        </>
    )
}

export const query = graphql`
{
allSanityAuthor {
    edges {
      node {
        _rawHome
        _rawAbout
      }
    }
  }
}
`