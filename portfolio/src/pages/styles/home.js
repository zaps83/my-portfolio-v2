import styled from 'styled-components/macro'
import { Link } from 'gatsby'

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.secondary};
    margin: 1em;
`

export const GatsbyLink = styled(Link)`
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.secondary};
    margin: 1em auto 4em;
    padding: 0 0 1em;
    font-size: 1.1em;
    border-bottom: .15em solid ${props => props.theme.button};
    width: 90%;

    &:hover {
        color: ${props => props.theme.accent};
    }

    &:last-of-type {
        border: none;
    } 
`