import React from 'react'
import { graphql, Link } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import './styles/post.css'
import Layout from '../components/layout'
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

export default ({ data }) => (
    <Layout>
        <div>
            <h1>{data.sanityPost.title}</h1>
            <img src={data.sanityPost.mainImage?.asset.fluid.src} />
            <BlockContent 
                className='p-text'
                blocks={data.sanityPost._rawBody} 
                serializers={serializer} 
                projectId='ldqg7s9d' 
                dataset='production'/>
            <Link to='/post'>Back to posts</Link>
        </div>
    </Layout>

)