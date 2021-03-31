import styled from 'styled-components/macro'
import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faSun as SunIcon,
    faMoon as MoonIcon
} from '@fortawesome/free-solid-svg-icons'

export const Header = styled.div`
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

export const NavText = styled.div`
    @media (max-width: 500px) {
        font-size: .5em;
    }
`

export const Nav = styled.nav`
    display: flex;
    margin: 0;
`

export const Inner = styled.div`
    border-radius: 20em;
    padding: .2em 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`

export const GatsbyInner = styled.div`
    border-radius: 20em;
    padding: .2em 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;

    @media (max-width: 420px) {
        flex-direction: column;
    }
`

export const Icon = styled(FontAwesomeIcon)`
    margin: 0 .25em 0;
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
        background-color: ${props => props.theme.hover};
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
        background-color: ${props => props.theme.hover};
    }
`

export const Links = styled.nav`
    display: flex;
    margin: 0;
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

export const SocialIconLink = styled(FontAwesomeIcon)`
    margin: 0 .5em 0 -.1em;
    font-size: 25px;
`

export const ToggleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-left: .1em solid #999999;
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
    background-color: ${props => props.theme.main};
    border: .1em solid #999999;
    position: absolute;
    z-index: 99;
    padding: .25em;
    width: 10em;
    top: 2.25em;
    right: 0;

    @media (max-width: 420px) {
        top: 2.75em;
    }
`

export const DropdownContainer = styled.div`
    display: none;
    align-items: center;
    position: relative;
    padding: 0 1em;
    @media (max-width: 1000px) {
        display: flex;
    }
    &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
    }
`

const Toggle = styled.button`
    display: inline-flex;
    align-items: left;
    padding: .5rem 0;
    margin: 0;
    text-decoration: none;
    color: ${props => props.theme.secondary};
    border: none;
    background-color: ${props => props.theme.main};
    position: relative;
    &:focus {
        outline: none;
    }
    &:hover ${Inner} {
        @media (max-width: 1000px) {
            background-color: ${props => props.theme.hover};
        }
    }
    @media (max-width: 1000px) {
        border-top: .1em solid #999999;
    }
`

const DarkMode = styled.div`
    display: inline;
    width: 6em;

    @media (min-width: 1000px) {
        display: none;
    }
    &:hover ${Inner} {
        @media (max-width: 1000px) {
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

    return (
        <Toggle onClick={() => changeTheme()}>
            <Inner>
                <Icon icon={icon} />
                <DarkMode>Dark Mode</DarkMode>
            </Inner>
        </Toggle>
    )
}