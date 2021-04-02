import Layout from './src/components/layout'
import React from 'react'

export const wrapPageElement = ({ element, props}) => (
    <Layout {...props}>{element}</Layout>
)

export const onRouteUpdate = ({ location, prevLocation }) => {
    console.log("new pathname2", location.pathname)
    console.log("old pathname", prevLocation ? prevLocation.pathname : null)
}