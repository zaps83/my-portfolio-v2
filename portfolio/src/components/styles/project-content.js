import styled from 'styled-components/macro'
import BlockContent from '@sanity/block-content-to-react'
import { Link } from 'gatsby'


export const Title = styled.h1`
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.main};
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
    grid-template-columns: 1fr 1fr;
`

export const ProjectContainer =styled.div`
    background-color: var(--clr-light);
    color: var(--clr-dark);
    border: solid var(--clr-accent);
    border-radius: 3rem;
    margin: 4rem 2rem;
    width: 25rem;
`

export const ProjectTitle = styled.h2`
    margin: 1rem;
    text-align: center;
`

export const InnerContainer = styled.div`
    border: solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1re
`

export const Image = styled.img`
    object-fit: cover;
    height: 100%;
    width: 16rem;
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const Button = styled.a`
    border: solid;
    border-radius: 2rem;
    width: 7rem;
    text-align: center;
    margin: .25em 0;
    padding: .25rem;
    text-decoration: none; 
    cursor: pointer;
`

export const Description = styled(BlockContent)`
    margin: 1rem 1.5rem;
`

export const ReadAbout = styled.h3`
    margin: 1rem 1.5rem;
`

export const ReadAboutLinks = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 1.5rem 1rem;
`

export const ReadAboutLink = styled(Link)`

`