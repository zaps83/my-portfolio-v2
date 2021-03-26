import React from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"
import HomePost from '../components/post-content'
import './styles/post.css'

export default function Post () {

    return (
        <Layout>
           <HomePost />
        </Layout>
    )
}