import styled from 'styled-components/macro'
import React from 'react'

import { Link } from 'gatsby'
import { SocialIcon as ReactIcon } from 'react-social-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faSun as SunIcon,
    faMoon as MoonIcon
} from '@fortawesome/free-solid-svg-icons'

export const Header = styled.div`
    background-color: ${props => props.theme.main};
    border-bottom: .1em solid #999999;
    padding: 0 0 .5em;
    margin: 1em;
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
`

export const Nav = styled.nav`
    display: flex;
    margin: 0;
`

export const Inner = styled.div`
    border-radius: 1.5em;
    padding: .2em 1em;
`

export const NavIcon = styled(FontAwesomeIcon)`
    margin: 0 .25em 0 0;
`

export const GatsbyLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    padding: .5rem 0;
    border-radius: 1rem 1rem 0 0;
    margin: 0;
    border-bottom: solid ${(props) => (props.active === props.tab) ? props.theme.accent : props.theme.main};
    text-decoration: none;
    color: ${props => props.theme.secondary};

    &:hover ${Inner} {
        background-color: ${props => props.theme.hover};
    }
`

export const RightContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 1000px) {
        display: none;
    }
`

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;

    @media (max-width: 900px) {
        padding: 0 1em 0;
        border-left: .1em solid #999999;
    }
`

export const SocialIconLink = styled(ReactIcon)`
    display: inline-flex;
    padding: 0;
    border-radius: 1rem;
    color: #3d598a;
    margin: 0 .5em 0 0;
`

export const ResumeIcon = styled(FontAwesomeIcon)`
    margin: 0 .5em 0 -.1em;
    font-size: 25px;
`

export const ResumeLink = styled.a`
    display: inline-flex;
    border-radius: 1.5em;
    padding: .2em 1em;
    background-color: ${(props) => props.theme.main};
    color: ${(props) => props.theme.secondary};
    text-decoration: none;

    &:hover {
        background-color: ${props => props.theme.hover};
    }

    @media (max-width: 1000px) {
        padding: .2em .5em;
    }
`

export const ToggleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-left: .1em solid #999999;
    padding: 0 0 0 1em;
`

const Toggle = styled.button`
    cursor: pointer;
    height: 1.75em;
    width: 1.75em;   
    border-radius: 50%;
    margin: 0;
    border: none;
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.main};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`

export const Picture = styled(FontAwesomeIcon)`
    background: url(${({ src }) => src});
    background-size: contain;
    border: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;
`

export const Group = styled.div`
    display: flex;
    align-items: center;
`

export const TextLink = styled.p`
    color: white;
    text-decoration: none;
    margin-right: 30px;
    cursor: pointer;
    &:hover {
        font-weight: bold;
    }
    &:last-of-type {
        margin-right: 0;
    }
`

export const Dropdown = styled.div`
    display: none;
    background-color: ${props => props.theme.main};
    border: .1em solid #999999;
    position: absolute;
    z-index: 99;
    padding: 10px;
    width: 140px;
    top: 32px;
    right: 0px;
    ${Group}: last-of-type ${TextLink} {
        cursor: pointer;
    }
    ${Group} {
        margin-bottom: 10px;
        &:last-of-type {
            margin-bottom: 0;
        }
        ${TextLink} {
            cursor: pointer;
        }
    }
    button {
        margin-right: 10px;
    }
    p {
        font-size: 12px;
        margin-bottom: 0;
        margin-top: 0;
    }
`

export const DropdownContainer = styled.div`
    display: none;
    align-items: center;
    margin-left: 20px;
    position: relative;
    button {
        cursor: pointer;
    }
    @media (max-width: 1000px) {
        display: flex;
    }
    &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
    }
`



export function Splash(props) {

    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark")
        } else {
            props.setTheme("light")
        }
    }

    const icon = props.theme === "light" ? <FontAwesomeIcon icon={MoonIcon} /> : <FontAwesomeIcon icon={SunIcon} />

    return (
        <Toggle onClick={() => changeTheme()}>
            {icon}
        </Toggle>
    )
}