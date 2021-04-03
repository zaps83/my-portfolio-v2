import styled from 'styled-components/macro'
import { Link } from 'gatsby'

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.secondary};
    margin: 1em;
`

export const SectionBottom = styled.div`
    display: flex;
    justify-content: center;
    margin: 1em auto 4em;
    padding: 0 0 1em;
    width: 90%;
    border-bottom: ${props => props.section === 'project' ? 'none' : `.15em solid ${props.theme.lightLine}`};
`

export const GatsbyLink = styled(Link)`
    color: ${(props) => props.theme.secondary};
    font-size: 1.1em;
    &:hover {
        color: ${props => props.theme.accent};
    }
`

export const AboutContainer = styled.div`
    margin: 2em 4em;
`

export const AboutTitle = styled.h1`
    color: ${props => props.theme.secondary};
`

export const SubTitle = styled.h2`
    color: ${props => props.theme.secondary};
`

export const Description = styled.p`
    color: ${props => props.theme.secondary};
`