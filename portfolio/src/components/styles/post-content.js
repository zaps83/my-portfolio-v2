import styled from 'styled-components/macro'
import { Link } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    color: var(--clr-light);
    margin: 1rem;
`

export const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center; 
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 2em 10em;

    @media (max-width: 1400px) {
        grid-template-columns: 1fr 1fr;
    }
    
    @media (max-width: 900px) {
       display: none;
    }
`

export const GatsbyLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.secondary};
    text-align: center;
    border: .1em solid #999999;
    border-radius: 1em;
    margin: 2em;
    background-color: ${props => props.theme.accent3};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;    
    position: relative;

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
    }
`

export const Image = styled.div`
    padding: 4em;
    background-image: url(${props => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 40%;
    

    @media (max-width: 900px) {
        padding: 3em;
        background-size: 100%;
        margin: .3em;
        align-self: flex-start;
    }

    @media (max-width: 600px) {
        padding: 2em;
    }

    @media (max-width: 450px) {
        padding: 1em;
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
    border-radius: 2em;
    padding: .2em .8em;
    position: absolute;
    font-size: .8em;
    font-weight: 800;
    top: 8.5em;
    right: 1em;

    @media (max-width: 900px) {
        position: static;
        display: inline;
    }
`

export const List = styled.div`
    margin: 0 0 1em;

    @media (max-width: 900px) {
        line-height: 1em;
        display: inline;
    }

    @media (max-width: 750px) {
        font-size: .9em;
    }

    @media (max-width: 500px) {
        font-size: .7em;
    }
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

export const PostTitle = styled.h2`
    text-decoration: none;
    margin: .5em;
    border-top: .1em solid;
    padding: .5em 0 0;

    @media (max-width: 900px) {
        margin: 1em 0 .5em;
        padding: 0;
        border: none;
    }

    @media (max-width: 750px) {
        font-size: 1.1em;
    }

    @media (max-width: 500px) {
        font-size: .9em;
    }
`

export const Description = styled(BlockContent)`
    padding: .5em 1em 0;
    text-align: left;

    @media (max-width: 700px) {
        font-size: .9em;
    }

    @media (max-width: 500px) {
        font-size: .8em;
    }
`

export const Flex = styled.div`

    @media (min-width: 900px) {
        display: none;
    }
`

export const Heading = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
`

export const MobileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 1em;
`
