import styled from 'styled-components/macro'
import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faSun as SunIcon,
    faMoon as MoonIcon
} from '@fortawesome/free-solid-svg-icons'

export const Header = styled.div`
    border-bottom: .15em solid ${props => props.theme.lightLine};
    padding: 0 0 .5em;
    margin: 1em;
`

export const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-between;
    margin: 0 auto;
    width: 100%;
`

export const NavText = styled.div`
    @media (max-width: 500px) {
        font-size: .5em;
    }
`

export const Nav = styled.nav`
    display: flex;
    margin: 0;

    @media (max-width: 600px) {
        width: 100%;
        justify-content: space-between;
    }
`

export const Inner = styled.div`
    border-radius: 20em;
    padding: .2em 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    transition: all 0.2s;
`

export const GatsbyInner = styled.div`
    border-radius: 20em;
    padding: .2em 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    transition: all 0.2s;

    @media (max-width: 420px) {
        flex-direction: column;
    }
`

export const Icon = styled(FontAwesomeIcon)`
    margin: 0 .25em;
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

    &:hover ${GatsbyInner} {
        @media (min-width: 1024px) {
            background-color: ${props => props.theme.hover};
        }
    }

    &:active ${GatsbyInner} {
        @media (max-width: 1024px) {
            background-color: ${props => props.theme.hover};
        }
    }
`

export const SocialLink = styled.a`
    display: inline-flex;
    align-items: left;
    padding: .5rem 0;
    margin: 0;
    text-decoration: none;
    color: ${props => props.theme.secondary};

    &:hover ${Inner} {
        @media (min-width: 1024px) {
            background-color: ${props => props.theme.hover};
        }
    }

    &:active ${Inner} {
        @media (max-width: 1024px) {
            background-color: ${props => props.theme.hover};
        }
    }

    &:last-of-type {
        margin-right: 1.25em;
    }
`

export const Links = styled.nav`
    display: flex;
    margin: 0;

    @media (max-width: 500px) {
        font-size: .8em;
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

export const ToggleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-left: .15em solid ${props => props.theme.lightLine};
    padding: 0 0 0 1em;

`

export const OpenDropdown = styled(FontAwesomeIcon)`
    cursor: pointer;

`

export const Group = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.secondary}
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

export const DropdownText = styled.div`
    @media (max-width: 1000px) {
        margin-left: .75em;
    }
`

export const Dropdown = styled.div`
    display: none;
    background-color: ${props => props.theme.accent3};
    border: .1em solid #999999;
    position: absolute;
    z-index: 100;
    padding: .25em;
    width: 10em;
    top: 2.25em;
    right: 0;

    @media (max-width: 420px) {
        top: 3.5em;
    }
`

export const DropdownContainer = styled.div`
    display: none;
    align-items: center;
    position: relative;
    padding: 0 1em;

    &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 600px) and (max-width: 1000px) {
        ${props => props.device === 'desktop' ? 'display: flex' : 'display: none'};
    }

    @media (max-width: 600px) {
        ${props => props.device === 'mobile' ? 'display: flex' : 'display: none'};
        font-size: .8em;
    }
`

const Toggle = styled.button`
    display: inline;
    align-items: left;
    padding: .8em 0;
    margin: 0;
    text-decoration: none;
    color: ${props => props.theme.secondary};
    background-color: ${props => props.theme.main};
    position: relative;
    border-radius: 50%;
    transition: all 0.2s;
    border: none;
    &:focus {
        outline: none;
    }
    
    @media (max-width: 1000px) {
        background-color: ${props => props.theme.accent3};
        border-top: .15em solid ${props => props.theme.lightLine};
        border-radius: 0;
    }
    &:hover {
        @media (min-width: 1024px) {
            background-color: ${props => props.theme.hover};
        }
    }
    &:active {
        @media (max-width: 1024px) {
            background-color: ${props => props.theme.hover};
        }
    }
`

const DarkMode = styled.div`
    display: inline;
    width: 6em;
    text-align: left;

    @media (min-width: 1000px) {
        display: none;
    }
    &:hover ${Inner} {
        @media (min-width: 1024px) {
            background-color: ${props => props.theme.hover};
        }
    }

    &:active ${Inner} {
        @media (max-width: 1024px) {
            background-color: ${props => props.theme.hover};
        }
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

    const icon = props.theme === "light" ? MoonIcon : SunIcon
    const mode = props.theme === "light" ? "Dark" : "Light"

    return (
        <Toggle onClick={() => changeTheme()}>
            <Inner>
                <Icon icon={icon} />
                <DarkMode>{mode} Mode</DarkMode>
            </Inner>
        </Toggle>
    )
}

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em;
    padding: 1em;
    border-top: .15em solid ${props => props.theme.lightLine};

`

export const Email = styled.div`
    font-size: .8em;
    margin-top: .5em;
`