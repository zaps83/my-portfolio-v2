/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it


import Layout from './src/components/layout'
import React from 'react'

export const wrapPageElement = ({ element, props}) => (
    <Layout {...props}>{element}</Layout>
)