import React from 'react'
import * as S from './styles/array'

const Array = ({ page }) => {

    return (
        <>
            <S.Open page={page}>
                [
            </S.Open>
            <S.Close page={page}>
                ]
            </S.Close>
        </>

    )
}

export default Array