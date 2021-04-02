import React from 'react'
import PostContent from '../components/post-content'
import './styles/post.css'
import * as S from './styles/home'

export default function Post () {

    return (
        <>
            <S.Title>Posts</S.Title>
            <PostContent page='post'/>
        </>
    )
}