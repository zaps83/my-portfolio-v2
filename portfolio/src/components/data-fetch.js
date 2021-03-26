import React from 'react'
import { graphql} from "gatsby"

export const query = graphql`
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
  
`

export default function Data({ data }) {
  console.log('data', data)
    return (
        <div data={data}>
            {children}
        </div>
    )
  }
  