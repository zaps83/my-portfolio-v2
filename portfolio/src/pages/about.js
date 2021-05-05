import React from 'react'
import * as S from '../page-styles/home'
import { graphql } from 'gatsby'
import { serializer } from '../components/serializer'
import { Helmet } from "react-helmet"


export default function About ({ data }) {

    return (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>About | ZapsCode</title>
            <link rel="canonical" href="http://zapscode.com" />
          </Helmet>
            <S.AboutContainer>
                <S.AboutTitle>Steven Zapart</S.AboutTitle>
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