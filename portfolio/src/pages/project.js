import React from 'react'
import HomeProject from '../components/project-content'
import './styles/post.css'
import * as S from './styles/home'

export default function Project () {

    return (
        <>
            <S.Title>Projects</S.Title>
            <HomeProject page='project'/>
        </>
    )
}