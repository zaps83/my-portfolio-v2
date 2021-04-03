import React from 'react'
import About from '../components/about-content'
import Projects from '../components/project-content'
import Posts from '../components/post-content'
import * as S from '../page-styles/home'


export default function App() {
  return (
    <>
      <S.AboutContainer>
        <S.AboutTitle>Steven Zapart</S.AboutTitle>
        <S.SubTitle>Full-Stack Developer</S.SubTitle>
        <S.Description>I am developer with experience in React.</S.Description>
      </S.AboutContainer>
      <S.SectionBottom>
        <S.GatsbyLink to='about'>Read more</S.GatsbyLink>
      </S.SectionBottom>
      <S.Title>Lastest Posts</S.Title>
      <Posts page='home'/>
      <S.SectionBottom>
        <S.GatsbyLink to='post'>See more posts</S.GatsbyLink>
      </S.SectionBottom>
      <S.Title>Latest Projects</S.Title>
      <Projects page='home'/>
      <S.SectionBottom section={'project'}>
        <S.GatsbyLink to='project'>See more projects</S.GatsbyLink>
      </S.SectionBottom>
    </>
  )
}

