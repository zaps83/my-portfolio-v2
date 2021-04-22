import styled from 'styled-components/macro'
import { Link } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'

export const Container = styled.div`
    margin: 0 auto 3em;
    width: 100%;
    display: flex;
    justify-content: center; 
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0em 5em;

    @media (max-width: 1300px) {
        grid-template-columns: 1fr 1fr;
        margin: 2em 3em;
    }
    
    @media (max-width: 900px) {
       display: none;
    }
`
export const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8em;
    width: 8em;
    margin: ${props => props.page === 'singlePost' ? 'auto 0' : '1em auto'};

    @media (max-width: 600px) {
        height: 5em;
        width: 5em;
    }

    @media (max-width: ${props => props.page === 'singlePost' ? '1000px' : '900px'}) {
        margin: .5em ${props => props.page === 'singlePost' ? '1em' : '1.5em'} .5em .5em;

    }



    @media (max-width: 450px) {
        height: 3em;
        width: 3em;
        margin: 1em 2em 1em 1em;

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

    &:active {
        @media (max-width: 1024px) {
            background-color: ${props => props.theme.hover};
        }
    }

    &:hover {
        @media (min-width: 1024px) {
            background-color: ${props => props.theme.hover};
        }


        @media (min-width: 450px) {
            transform: scale(1.015);
        }
    }

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 450px) {
        border-radius: 0;
        border-left: none;
        border-right: none;
        border-bottom: none;
        margin: 0;

        &:last-of-type {
            border-bottom: .1em solid #999999;
        }
    }

    &:active ${Body} {
        @media (max-width: 1024px) {
            background-color: ${props => props.theme.hover};
        }
    }

    &:hover ${Body} {
        @media (min-width: 1024px) {
            background-color: ${props => props.theme.hover};
        }
    }
`

export const Image = styled.div`
    height: 8em;
    width: 8em;
    margin: 1em auto;
    background-image: url(${props => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 80%;
    
    @media (max-width: 900px) {
        margin-right: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        padding: 1em;
        background-size: 70%;
    }

    @media (max-width: 800px) {
        margin-right: 1em;
    }

    @media (max-width: 700px) {
        margin-right: 1.5em;
        background-size: 90%;
    }

    @media (max-width: 600px) {
        margin-right: 1.5em;
        background-size: 100%;
    }

    @media (max-width: 450px) {
        margin-right: 1.5em;
        background-size: 100%;
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
    position: absolute;
    font-size: .8em;
    font-weight: 800;
    top: 9.5em;
    right: 1em;

    @media (max-width: 900px) {
        position: static;
        display: inline;
        margin: .5em 0;
    }
`

export const List = styled.div`
    margin: 0 0 1em;

    @media (max-width: 900px) {
        line-height: 1em;
        display: inline;
        margin-bottom: .5em;
    }

    @media (max-width: 750px) {
        font-size: .9em;
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

export const DateAndTitle = styled.div`
    margin: 1em 1em 0;
    border-top: solid;
    padding: .5em 0 0;
    display: flex;
    flex-direction: column;

    @media (max-width: 900px) {
        margin: 1em;
        padding: 0;
        border: solid;
        flex-direction: reverse-column;
    }
`

export const PostTitle = styled.h2`
    margin: .25em 0 1em;

    @media (max-width: 900px) {
        margin: .3em 0 .7em;
    }
`

export const Date = styled.div`
    font-size: .9em;
    
    @media (max-width: 900px) {
        margin: .5em 0 0;
    }

    @media (min-width: 900px) {
        align-self: flex-end;
    }
`

export const Description = styled(BlockContent)`
    padding: .5em 1em 0;
    text-align: left;
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
