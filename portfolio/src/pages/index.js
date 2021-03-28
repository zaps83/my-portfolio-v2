import React from 'react'
import Layout from '../components/layout'
import '../styles/global.css'
import About from '../components/about-content'
import Projects from '../components/project-content'
import Posts from '../components/post-content'

export default function App() {
  return (
    <Layout>
      <About />
      <Posts />
      <Projects />
    </Layout>
  )
}

