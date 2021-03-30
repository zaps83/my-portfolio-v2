import styled from 'styled-components/macro'
import { CgSun } from "react-icons/cg"
import { HiMoon } from "react-icons/hi"
import React from 'react'
import { Link } from 'gatsby'
import { SocialIcon } from 'react-social-icons'

export const Header = styled.div`
    background-color: ${props => props.theme.secondary};
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
`

export const Nav = styled.nav`
    display: flex;
`

export const GatsbyLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    padding: .25rem 2rem;
    border-radius: 1rem 1rem 0 0;
    margin: .25rem .25rem 0;
    border: none;
    color: ${(props) => (props.active === props.tab) ? props.theme.secondary : props.theme.main};
    text-decoration: none;
    background-color: ${(props) => (props.active === props.tab) ? props.theme.main : props.theme.secondary};
`

export const SocialContainer = styled.div`
    display: flex;
    align-items: center;
`

export const SocialIconLink = styled(SocialIcon)`
    display: inline-flex;
    padding: .75rem;
    border-radius: 1rem;
    color: #3d598a;
    margin: 0 .25rem;
`

export const ResumeLink = styled.a`
    display: inline-flex;
    align-items: center;
    padding: .25rem 2rem;
    border-radius: 1rem 1rem 0 0;
    background-color: ${(props) => props.theme.main};
    margin: .25rem .25rem 0;
    border: none;
    color: ${(props) => props.theme.secondary};
    text-decoration: none;
`

const Toggle = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;   
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.main};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`

export function Splash(props) {
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark")
        } else {
            props.setTheme("light")
        }
    }

    const icon = props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />

    return (
        <Toggle onClick={() => changeTheme()}>
            {icon}
        </Toggle>
    )
}