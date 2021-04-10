import BlockContent from '@sanity/block-content-to-react'
import { Link } from 'gatsby'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Container = styled.div`
    background-color: ${props => props.theme.accent3};
    margin: 6em 9em 4em;
    padding:  2em 3em 3em;
    border: .1em solid #999999;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;    
    border-radius: 1em;

    @media (max-width: 1400px) {
        margin: 6em 7em 4em;
    }

    @media (max-width: 1200px) {
        margin: 6em 5em 4em;
    }

    @media (max-width: 1000px) {
        padding: 2em 1em 3em;
    }

    @media (max-width: 800px) {
        margin: 6em 3em 4em;
    }

    @media (max-width: 600px) {
        margin: 6em 1em 4em;
    }

    @media (max-width: 450px) {
        margin: 6em 0em 4em;
        border-left: none;
        border-right: none;
        border-radius: 0;
    }
`

export const Heading = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    margin: 0 0 4em;
    border-bottom: .1em solid ${props => props.theme.lightLine};

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

export const MobileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 1em;

    @media (max-width: 450px) {
        margin: 0;
    }
`

export const PostTitle = styled.h2`
    text-decoration: none;
    margin: 1em 0 .5em;
    padding: 0;
    font-size: 3em;
`

export const List = styled.div`
    margin: 0 0 1em;
    line-height: 1em;
    display: inline;
`

export const Bullet = styled.div`
    display: inline;
    margin: 0 .5em;
    font-size: .8em;

    &:first-of-type {
        margin-left: 0;
    }

    &:last-of-type {
        margin-right: 0;
    }
`

export const Difficulty = styled.div`
    background-color: ${props => 
        props.theme.main === '#fcfcfc' ? (
        props.children === 'Easy' ? 
        props.theme.green : 
        props.children === 'Medium' ? 
            props.theme.yellow : 
            props.theme.red) : 
        props.theme.accent3
            
    };
    color: ${props => 
        props.theme.main !== '#fcfcfc' ? (
        props.children === 'Easy' ? 
        props.theme.green : 
        props.children === 'Medium' ? 
            props.theme.yellow : 
            props.theme.red) : 
        props.theme.main            
    };
    border: .05em solid ${props => 
        props.theme.main !== '#fcfcfc' ? (
        props.children === 'Easy' ? 
        props.theme.green : 
        props.children === 'Medium' ? 
            props.theme.yellow : 
            props.theme.red) : 
        props.theme.main            
    };
    border-radius: 2em;
    padding: .2em .8em;
    display: inline;
    font-size: .8em;
    font-weight: 800;
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 0 0 1em;
`

export const Date = styled.div`
    margin-right: .75em;
`

export const Leetcode = styled.a`
    color: ${props => props.theme.secondary};
    margin-left: .75em;
    font-size: .9em;

    &:hover {
        color: ${props => props.theme.accent};
    }
`

export const Image = styled.div`
    height: 12em;
    width: 28em;
    margin: 2em;
    background-image: url(${props => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 100%;

    @media (max-width: 600px) {
        width: 5em;
        height: 5em;
        margin: 1em;
    }

`

export const PostContent = styled(BlockContent)`
    margin: 0 1em;

    @media (max-width: 450px) {
        margin: 0;
    }
`
export const Return = styled.div`
    text-align: center;
    margin: 0 0 3em;
`

export const GatsbyLink = styled(Link)`
    color: ${props => props.theme.secondary};
    font-size: 1.3em;
    font-weight: 700;
    margin: auto;

    &:hover {
        color: ${props => props.theme.accent};
    }
`

export const Icon = styled(FontAwesomeIcon)`
    margin: 0 .3em;
`