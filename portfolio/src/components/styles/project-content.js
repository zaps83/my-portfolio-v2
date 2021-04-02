import styled from 'styled-components/macro'
import BlockContent from '@sanity/block-content-to-react'
import { Link } from 'gatsby'


export const Container = styled.div`
    margin: 2em 3em;
    display: flex;
    justify-content: center; 

    @media (max-width: 450px) {
        margin: 2em 0;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;  
    }
`

export const ProjectContainer =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: ${props => props.theme.secondary};
    background-color: ${props => props.theme.accent3};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;    
    border: .1em solid #999999;
    border-radius: 1em;
    margin: 1em 3em;
    padding: 0 0 2em;

    @media (max-width: 1300px) {
        margin: 1em 1em;
    }

    @media (max-width: 450px) {
        margin: 1em 0;
        border-radius: 0;
        border-left: none;
        border-right: none;
    }
`

export const ProjectTitle = styled.h2`
    margin: 1rem;
    text-align: center;
`

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 90%;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

export const Image = styled.div`
    padding: 7em 13em;
    background-image: url(${props => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 100%;
    border: .1em solid ${props => props.theme.secondary};

    @media (max-width: 600px) {
        padding: 5em 10em;
    }

    @media (max-width: 400px) {
        padding: 5em 9em;
    }
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 2em 0 1.5em;
`

export const Button = styled.a`
    border: .15em solid ${props => props.theme.button};
    border-radius: .5em;
    width: 7rem;
    text-align: center;
    padding: .25em;
    text-decoration: none; 
    cursor: pointer;
    transition: all 0.2s;
    margin: .25em .5em;
    font-weight: 700;
    background-color: ${props => props.theme.accent2};
    color: ${props => props.theme.secondary};
    &:hover {
        background-color: ${props => props.theme.accent};
        color: ${props => props.theme.hover};
        border: .15em solid ${props => props.theme.secondary};
    }


    @media (max-width: 600px) {
        font-size: .8em;
        width: 7em;
    }
`

export const Description = styled(BlockContent)`
    width: 90%;
    padding: 2em 0;
    margin: 1em 0 0;
    border-top: solid;

    @media (max-width: 500px) {
        font-size: .8em;
    }

    @media (max-width: 400px) {
        font-size: .7em;
    }
`

export const ReadAbout = styled.h3`
    width: 90%;

    @media (max-width: 500px) {
        font-size: 1.1em;
    }
`

export const ReadAboutLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
`

export const ReadAboutLink = styled(Link)`
    color: ${props => props.theme.secondary};

    &:hover {
        color: ${props => props.theme.accent};
    }

    @media (max-width: 500px) {
        font-size: .8em;
    }

    @media (max-width: 400px) {
        font-size: .7em;
    }
`