import BlockContent from '@sanity/block-content-to-react'
import { Link } from 'gatsby'
import styled from 'styled-components/macro'

export const Container = styled.div`
    background-color: var(--clr-light);
    margin: 0 10em;
    padding: 0 5em;
`

export const Header1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Header2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 5em;
`

export const Title = styled.h1`

`

export const Image = styled.img`
    height: 4em;
`

export const Difficulty = styled.div`

`

export const ProblemType = styled.div`

`

export const Url = styled.a`

`

export const PostContent = styled(BlockContent)`

`

export const GatsbyLink = styled(Link)`

`