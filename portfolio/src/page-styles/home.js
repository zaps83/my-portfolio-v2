import styled from 'styled-components/macro'
import { Link } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'

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
    padding: 0 0 4em;
    width: 90%;
    border-bottom: ${props => props.section === 'projects' ? 'none' : `.15em solid ${props.theme.lightLine}`};
    padding-bottom: 4em;

`

export const GatsbyLink = styled(Link)`
    color: ${(props) => props.theme.secondary};
    font-size: 1.1em;
    &:hover {
        color: ${props => props.theme.accent};
    }
`

export const AboutContainer = styled.div`
    font-size: 1.1em;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 50em;
    margin: 4em auto 0 ;
    
    @media (max-width: 1000px) {
        width: 90%;
    }

`

export const AboutTitle = styled.h1`
    color: ${props => props.theme.secondary};
    margin-bottom: 1em;
`

export const SubTitle = styled.h2`
    color: ${props => props.theme.secondary};
`

export const Description = styled.p`
    color: ${props => props.theme.secondary};

`

export const PersonalContent = styled(BlockContent)`
    line-height: 1.6em;
`