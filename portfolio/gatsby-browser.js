/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it


import Layout from './src/components/layout'
import React from 'react'

export const onRouteUpdate = ({ location, prevLocation }) => {
  /*   console.log("new pathname1", location.pathname)
    console.log("old pathname", prevLocation ? prevLocation.pathname : null) */
}

export const wrapPageElement = ({ element, props}) => (
    <Layout {...props}>{element}</Layout>
)
