import styled from 'styled-components/macro'


export const Container = styled.div`
    margin: 2em 4em;
`

export const Title = styled.h1`
    color: ${props => props.theme.secondary};
`

export const SubTitle = styled.h2`
    color: ${props => props.theme.secondary};
`

export const Description = styled.p`
    color: ${props => props.theme.secondary};
`