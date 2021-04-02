import React from 'react'
import About from '../components/about-content'
import Projects from '../components/project-content'
import Posts from '../components/post-content'
import * as S from './styles/home'


export default function App() {
  return (
    <>
      <About />
      <S.GatsbyLink to='about'>Read more</S.GatsbyLink>
      <S.Title>Lastest Posts</S.Title>
      <Posts page='home'/>
      <S.GatsbyLink to='post'>See more posts</S.GatsbyLink>
      <S.Title>Latest Projects</S.Title>
      <Projects page='home'/>
      <S.GatsbyLink to='project'>See more projects</S.GatsbyLink>
    </>
  )
}

