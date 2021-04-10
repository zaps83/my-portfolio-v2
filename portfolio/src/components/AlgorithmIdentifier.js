import * as A from '../algorithm-types'
import * as S from './styles/post-content'
import React from 'react'

export const algorithm = (type, page) => {
    if (type === 'LinkedList') {
        return <S.Body page={page}><A.LinkedList page={page}/></S.Body>
    } else if (type === 'BinaryTree') {
        return <S.Body page={page}><A.BinaryTree page={page}/></S.Body>
    } else if (type === 'Array') {
        return <S.Body page={page}><A.Array page={page}/></S.Body>
    } else if (type === 'String') {
        return <S.Body page={page}><A.String page={page}/></S.Body>
    }
}

