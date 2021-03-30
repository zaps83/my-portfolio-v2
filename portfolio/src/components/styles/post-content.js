import styled from 'styled-components/macro'
import { Link } from 'gatsby'

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

    @media (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
    }
    
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`

export const GatsbyLink = styled(Link)`

`

export const PostContainer = styled.span`
    display: block;
    position: relative;
    border: solid var(--clr-accent);
    background-color: var(--clr-accent);
    border-radius: 1rem;
    height: 12rem;
    width: 12rem;
    margin: 2rem;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    border-radius: 1rem;
`

export const PostInfo = styled.div`

`

export const PostTitle = styled.h2`
    text-decoration: none;
    background-color: rgba(61, 89, 138, .75);
    color: var(--clr-light);
    padding: .6rem 1rem;
    border-radius: .5rem;
    font-size: 1rem;
`

export const Difficulty = styled.div`

`

export const ProblemType = styled.div`

`