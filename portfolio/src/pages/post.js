import React, { useContext } from 'react'
import PostContent from '../components/post-content'
import './styles/post.css'
import * as S from '../page-styles/home'
import { ThemeContext } from '../components/layout'

export default function Post (props) {
    console.log('page props', props)
    const { theme, setTheme } = useContext(ThemeContext)
    console.log('post theme', theme)
    return (
        <>
            <S.Title>Posts</S.Title>
            <PostContent page='post' theme={theme}/>
        </>
    )
}