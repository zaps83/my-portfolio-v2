import React from 'react'
import * as S from './styles/linked-list'

const LinkedList = ({ page }) => {

    return (
            <S.Outer page={page}>
                <S.Circle></S.Circle>
                <S.Arrow></S.Arrow>
                <S.Circle></S.Circle>
                <S.Arrow></S.Arrow>
                <S.Circle></S.Circle>
            </S.Outer>

    )
}

export default LinkedList